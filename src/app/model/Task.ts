import {Note} from "./Note";

export class Task extends Note{
  private startDate: Date;

  private endDate: Date;

  getStartDate(): Date {
    return this.startDate;
  }

  setStartDate(date : Date){
    this.startDate = date;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  setEndDate(date : Date){
    this.endDate = date;
  }
}
