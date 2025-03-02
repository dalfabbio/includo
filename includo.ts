import { Participant } from "./src/participants";
import { Course } from "./src/courses";
import { Company } from "./src/companies";

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
