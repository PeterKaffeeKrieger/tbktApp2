import {Task} from "./Task";
import {Customer} from "./Customer";

export class Appointment extends Task{

  constructor(name: string, private customer: Customer) {
    super(name);
  }

  getCustomer(): Customer {
    return this.customer;
  }


}
