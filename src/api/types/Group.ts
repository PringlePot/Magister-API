export default class Group {
  rawData: any;
  id: number;
  description: string;
  startDate: Date;
  endDate: Date;
  study: Object;
  studyPeriod: string;
  mainProfile: string;
  secondaryProfile: string;
  /**
   * Initializes new Group object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.id = rawData.Id;
    this.description = rawData.Groep.Omschrijving;
    this.startDate = new Date(rawData.Start);
    this.endDate = new Date(rawData.Einde);
    this.study = rawData.Studie;
    this.studyPeriod = rawData.Lesperiode;
    this.mainProfile = rawData.Profiel;
    this.secondaryProfile = rawData.Profiel2;
  }
}
