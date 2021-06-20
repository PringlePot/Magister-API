/** An Appointment object for further interaction with appointments
 * @memberof Session
 * @prop {String} notes - Extra notes
 * @prop {Boolean} finishedHomework - Has finished homework
 * @prop {Array<Object>} attachments - Array of attachments
 * @prop {Array<Object>} teachers - Array of teachers
 * @prop {Array<Object>} courses - Array of courses
 * @prop {Boolean} lastsWholeDay - Does the appointment last the whole day
 * @prop {Date} startDate
 * @prop {Date} endDate
 * @prop {Array<Object>} groups - Array of groups
 * @prop {Array<Object>} classRooms - Array of classrooms
 * @prop {String} location
 * @prop {String} description - Description of current event (could be homework)
 * @prop {Number} status - The status code
 * @prop {Number} type - The type code
 */
export default class Appointment {
  rawData: any;
  notes: string;
  inhoud: string;
  finishedHomework: boolean;
  attachments: Array<Object>;
  teachers: Array<Object>;
  courses: Array<Object>;
  lastsWholeDay: boolean;
  startDate: Date;
  endDate: Date;
  groups: Array<Object>;
  classRooms: Array<Object>;
  location: string;
  description: string;
  status: number;
  type: number;
  /**
   * Initializes new Appointment object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.notes = rawData.Aantekening;
    this.finishedHomework = rawData.Afgerond;
    this.attachments = rawData.Bijlagen;
    this.teachers = rawData.Docenten;
    this.courses = rawData.Vakken;
    this.lastsWholeDay = rawData.DuurtHeleDag;
    this.startDate = new Date(rawData.Start);
    this.endDate = new Date(rawData.Einde);
    this.groups = rawData.Groepen;
    this.classRooms = rawData.Lokalen;
    this.location = rawData.Lokatie;
    this.description = rawData.Omschrijving;
    this.inhoud = rawData.Inhoud;
    this.status = rawData.Status;
    this.type = rawData.Type;
  }
}
