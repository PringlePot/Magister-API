export default class Person {
  rawData: any;
  id: number;
  firstName: string;
  nameInfix: string;
  lastName: string;
  officialFirstNames: string;
  initials: String;
  birthDate: string;
  type: number;
  /**
   * Initializes new Person object from a raw data object
   * @param {Object} rawData - The raw data directly parsed from JSON
   */
  constructor(rawData: any) {
    this.rawData = rawData;

    this.id = rawData.Id;
    this.firstName = rawData.Roepnaam;
    this.nameInfix = rawData.GebruikGeboortenaam
      ? rawData.GeboortenaamTussenvoegsel
      : rawData.OfficieleTussenvoegsels;
    this.lastName = rawData.GebruikGeboortenaam
      ? rawData.GeboorteAchternaam
      : rawData.OfficieleAchternaam;
    this.officialFirstNames = rawData.OfficieleVoornamen;
    this.initials = rawData.Voorletters;
    this.birthDate = rawData.Geboortedatum;
    this.type = rawData.Type || 3;
  }
}
