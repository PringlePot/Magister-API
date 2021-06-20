export default class Subject {
  rawData: any;
  code: string;
  description: string;
  /**
   * Initializes new Subject object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.code = rawData.code;
    this.description = rawData.description;
  }
}
