import Subject from './Subject';

export default class Grade {
  rawData: any;
  gotAt: Date;
  hasExemption: boolean;
  addedAt: Date;
  isVoldoende: boolean;
  columnId: number;
  hasToRetry: boolean;
  description: string;
  counts: boolean;
  subject: Subject;
  value: string;
  weighingFactor: number;
  /**
   * Initializes new Grade object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.gotAt = new Date(rawData.behaaldOp);
    this.hasExemption = rawData.heeftVrijstelling;
    this.addedAt = new Date(rawData.ingevoerdOp);
    this.isVoldoende = rawData.isVoldoende;
    this.columnId = rawData.kolomId;
    this.hasToRetry = rawData.moetInhalen;
    this.description = rawData.omschrijving;
    this.counts = rawData.teltMee;
    this.subject = new Subject(rawData.vak);
    this.value = rawData.waarde;
    this.weighingFactor = rawData.weegFactor;
  }
}
