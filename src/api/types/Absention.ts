export default class Appointment {
  rawData: any;
  appointmentid: number;
  code: string;
  end: number;
  allowedly: boolean;
  id: number;
  lesson: number;
  startDate: Date;
  endDate: Date;
  description: string;
  accountabilityType: number;

  /**
   * Initializes new Absention object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.appointmentid = rawData.AfspraakId;
    this.code = rawData.Code;
    this.end = rawData.Eind;
    this.allowedly = rawData.Geoorloofd;
    this.id = rawData.Id;
    this.lesson = rawData.Lesuur;
    this.startDate = new Date(rawData.Start);
    this.endDate = new Date(rawData.Einde);
    this.description = rawData.Omschrijving;
    this.accountabilityType = rawData.Verantwoordingtype;
  }
}
