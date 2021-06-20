import moment from 'moment';

import Group from './types/Group';
import Appointment from './types/Appointment';
import Person from './types/Person';
import Grade from './types/Grade';
import Absention from './types/Absention';

import Magister from '../auth/magister';
import {getMonday, getSunday} from '../util/DateUtil';

/** A Session object for further interaction with Magister */
class Session {
  sessionId: string;
  bearerToken: string;
  schoolUrl: string;
  client: Magister;
  id: number;
  current: any;

  /**
   * Initializes new Session object from tokens, usually automatically done when authenticating
   * @param {Magister} client
   */
  constructor(client: Magister) {
    this.sessionId = client.sessionId;
    this.bearerToken = client.accessToken;
    this.schoolUrl = 'https://' + client.hostname;
    this.client = client;
    this.id;
    this.current;
  }

  async initialize() {
    await this.getProfileInfo();
    return this.getCurrentSession();
  }

  /**
   * Get the current user profile info
   * @returns {Promise<Person>} - Object with user info
   */
  async getProfileInfo() {
    const data = await this.client.get(
      `${this.schoolUrl}/api/account?noCache=0`
    );
    this.id = data.Persoon.Id;
    return new Person(data.Persoon);
  }

  /**
   * Updates current object containing url's
   * @returns {Promise}
   */
  async getCurrentSession() {
    const data = await this.client.get(
      `${this.schoolUrl}/api/sessions/current`
    );
    this.current = data;
  }

  /**
   * Get grades in current year
   * @param {Number} amount - Amount of grades
   * @param {Number} skip - Gades to skip
   * @returns {Promise<Array>} - Array containing grades
   */
  async getGrades(amount: number, skip: number) {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${this.id}/cijfers/laatste?top=${amount}&skip=${skip}}`
    );
    const grades = [];
    for (let i = 0; i < data.items.length; i++) {
      grades.push(new Grade(data.items[i]));
    }

    return grades;
  }

  /**
   * Get absentions from a date to aa date
   * @param {Number} from - Starting date
   * @param {Number} to - Ending date
   * @returns {Promise<Array>} - Array containing absentions
   */
  async getAbsentions(from: number, to: number) {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${this.id}/absenties?tot=${moment(
        to
      ).format('YYYY-MM-DD')}&van=${moment(from).format('YYYY-MM-DD')}`
    );
    const absentions = [];
    for (let i = 0; i < data.Items.length; i++) {
      absentions.push(new Absention(data.Items[i]));
    }

    return absentions;
  }

  /**
   * Get all appointments from a date to a date
   * @param {Date} from - Starting date
   * @param {Date} to - Ending date
   * @returns {Promise<Array>} - Array containing appointments
   */
  async getAppointments(from: number, to: number) {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${
        this.id
      }/afspraken?status=1&tot=${moment(to).format('YYYY-MM-DD')}&van=${moment(
        from
      ).format('YYYY-MM-DD')}`
    );
    console.log(data);
    const appointments = [];
    for (let i = 0; i < data.Items.length; i++) {
      appointments.push(new Appointment(data.Items[i]));
    }

    return appointments;
  }

  /**
   * Get all appointments from a date to a date
   * @returns {Promise<Array>} - Array containing appointments
   */
  async getAppointmentsa() {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${this.id}/afspraken`
    );
    console.log(data);
    const appointments = [];
    for (let i = 0; i < data.Items.length; i++) {
      appointments.push(new Appointment(data.Items[i]));
    }

    return appointments;
  }

  /**
   * Get all appointments from a date to a date
   * @returns {Promise<Array>} - Array containing appointments
   */
  async getAppointmentsThisWeek() {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${
        this.id
      }/afspraken?status=1&tot=${moment(getSunday(new Date())).format(
        'YYYY-MM-DD'
      )}&van=${moment(getMonday(new Date())).format('YYYY-MM-DD')}`
    );
    const appointments = [];
    for (let i = 0; i < data.Items.length; i++) {
      appointments.push(new Appointment(data.Items[i]));
    }

    return appointments;
  }

  /**
   * Get all groups (classes) a user has ever been in
   * @returns {Promise<Array<Group>>} - Array containing group objects
   */
  async getGroups() {
    const data = await this.client.get(
      `${this.schoolUrl}/api/personen/${this.id}/aanmeldingen?geenToekomstige=false`
    );
    console.log(data);
    const groups = [];
    for (let i = 0; i < data.Items.length; i++) {
      groups.push(new Group(data.Items[i]));
    }

    return groups;
  }

  /**
   * Returns session data that can be used to reauthenticate later
   * @returns {String}
   */

  saveAuth() {
    const data = {
      sessionId: this.sessionId,
      bearerToken: this.bearerToken,
      schoolUrl: this.schoolUrl,
    };

    return JSON.stringify(data);
  }
}

export default Session;
