import { ICompany, IParticipants } from "./interfaces/interfaces";

export class Company implements ICompany {
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
