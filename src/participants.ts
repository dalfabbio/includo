import {
  ICourse,
  IParticipants,
  educationLevel,
} from "./interfaces/interfaces";

export class Participant implements IParticipants {
  constructor(
    public name: string,
    public lastName: string,
    public originCountry: string,
    public educationLevel: educationLevel,
    public languageSkills: string[],
    public fieldsOfInterest: string
  ) {}

  offersReceived: object[] = [];

  registerToCourse(course: ICourse): void {
    course.addParticipants(this);
  }
}
