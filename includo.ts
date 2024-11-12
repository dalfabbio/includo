//STRUCTURE
interface IParticipants {
  name: string;
  lastName: string;
  educationLevel: educationLevel;
  originCountry: string;
  languageSkills: object[];
  fieldsOfInterest: string;
  offersReceived: object[];
  registerToCourse(course: ICourse): void;
}

type educationLevel =
  | "primary school"
  | "middle school"
  | "high school"
  | "bachelor degree"
  | "master degree";

interface ICourse {
  title: string;
  professionalField: string;
  lasting: string;
  registeredParticipants: IParticipants[];

  addParticipants(participant: IParticipants): void;
}

interface ICompany {
  name: string;
  field: string;
  description: string;
  openPositions: string[];
  openNewPosition(position: string): void;
  offerPosition(participant: IParticipants, position: string): void;
}

//IMPLEMENTATION
class Participant implements IParticipants {
  constructor(
    public name: string,
    public lastName: string,
    public originCountry: string,
    public educationLevel: educationLevel,
    public languageSkills: object[],
    public fieldsOfInterest: string
  ) {}

  offersReceived: object[];

  registerToCourse(course: ICourse): void {
    course.addParticipants(this);
  }
}

class Course implements ICourse {
  constructor(
    public title: string,
    public professionalField: string,
    public lasting: string,
    public registeredParticipants: IParticipants[]
  ) {}
  addParticipants(participant: IParticipants): void {
    this.registeredParticipants.push(participant);
  }
}

class Company implements ICompany {
  constructor(
    public name: string,
    public field: string,
    public description: string
  ) {}
  openPositions: string[];
  openNewPosition(position: string): void {
    this.openPositions.push(position);
  }

  offerPosition(participant: IParticipants, position: string): void {
    let offer = {
      companyName: this.name,
      field: this.field,
      position: position,
    };

    participant.offersReceived.push(offer);
  }
}
