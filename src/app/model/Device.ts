import {Info} from "./Info";
import {Customer} from "./Customer";

export class Device extends Info{

  constructor(name: string, private customer: Customer){
    super(name);
  }

  getCustomer(){
    return this.customer;
  }

  private location: [number,number];
  getLocation(){
    return this.location;
  }

  setLocation(location: [number,number]){
    return this.location = location;
  }

}
