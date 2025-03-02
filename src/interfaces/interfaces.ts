export interface IParticipants {
  name: string;
  lastName: string;
  educationLevel: educationLevel;
  originCountry: string;
  languageSkills: string[];
  fieldsOfInterest: string;
  offersReceived: object[];
  registerToCourse(course: ICourse): void;
}

export type educationLevel =
  | "primary school"
  | "middle school"
  | "high school"
  | "bachelor degree"
  | "master degree";

export interface ICourse {
  title: string;
  professionalField: string;
  lasting: string;
  _registeredParticipants: IParticipants[];

  addParticipants(participant: IParticipants): void;
}

export interface ICompany {
  name: string;
  field: string;
  description: string;
  openPositions: string[];
  openNewPosition(position: string): void;
  offerPosition(participant: IParticipants, position: string): void;
}
