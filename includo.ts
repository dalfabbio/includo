//STRUCTURE
interface IParticipants {
  name: string;
  lastName: string;
  educationLevel: educationLevel;
  originCountry: string;
  languageSkills: string[];
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
  _registeredParticipants: IParticipants[];

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
    public languageSkills: string[],
    public fieldsOfInterest: string
  ) {}

  offersReceived: object[] = [];

  registerToCourse(course: ICourse): void {
    course.addParticipants(this);
  }
}

class Course implements ICourse {
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

class Company implements ICompany {
  constructor(
    public name: string,
    public field: string,
    public description: string
  ) {}

  openPositions: string[] = [];
  openNewPosition(position: string): void {
    this.openPositions.push(position);
  }

  offerPosition(participant: IParticipants, position: string): void {
    try {
      if (this.openPositions.indexOf(position) === -1) {
        throw new Error(
          `La posizione "${position}" che si vuole proporre non risulta aperta. Aprire una posizione per poterla offrire.`
        );
      }
      let offer = {
        companyName: this.name,
        field: this.field,
        position: position,
      };
      participant.offersReceived.push(offer);
    } catch (err) {
      console.log(err.message); //this is a console.log for debugging, otherwise it would be an alert
    }
  }
}

//INSTANCES

const participant1 = new Participant(
  "Sahid",
  "Muhassa",
  "Tunisia",
  "high school",
  ["french", "english"],
  "artigianato"
);

const participant2 = new Participant(
  "Sandro",
  "Giocamazzi",
  "Ucraina",
  "primary school",
  ["Russian", "english"],
  "costruzioni"
);

const course1 = new Course("Ceramica", "artigiano", "6 mesi");
const course2 = new Course("disegno tecnico", "tecnico", "12 mesi");
course1.addParticipants(participant2);
course2.addParticipants(participant1);

const azienda1 = new Company(
  "Xylem",
  "industria",
  "Xylem si occupa della gestione del ciclo dell'acqua."
);

const azienda2 = new Company(
  "Plates&Co.",
  "design",
  "Plates&Co. si occupa della progettazione e realizzazione di oggetti per la cucina di design."
);

azienda1.openNewPosition("disegnatore tecnico");
azienda1.offerPosition(participant2, "disegnatore tecnico");

azienda2.openNewPosition("ceramista");
azienda2.offerPosition(participant1, "ceramista");

azienda2.offerPosition(participant2, "posizione non aperta");

console.log(
  `I partecipanti al corso di ${course1.title} sono:`,
  course1.registeredParticipants
);

console.log(
  `I partecipanti al corso di ${course2.title} sono:`,
  course2.registeredParticipants
);

console.log(
  `A ${participant1.name} si sono proposte le seguenti posizioni:`,
  participant1.offersReceived
);

console.log(
  `A ${participant2.name} si sono proposte le seguenti posizioni:`,
  participant2.offersReceived
);
