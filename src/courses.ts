import { ICourse, IParticipants } from "./interfaces/interfaces";

export class Course implements ICourse {
  constructor(
    public title: string,
    public professionalField: string,
    public lasting: string
  ) {}

  _registeredParticipants: IParticipants[] = [];

  get registeredParticipants() {
    //this offers a smaller version of the participants object, with the property most useful for the course purpose
    const nameOfParticipants: object[] = [];
    for (let par of this._registeredParticipants) {
      const el = {
        name: par.name,
        lastName: par.lastName,
        interest: par.fieldsOfInterest,
      };
      nameOfParticipants.push(el);
    }

    return nameOfParticipants;
  }

  addParticipants(participant: IParticipants): void {
    this._registeredParticipants.push(participant);
  }
}
