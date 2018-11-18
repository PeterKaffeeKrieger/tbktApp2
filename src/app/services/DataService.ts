import {Appointment} from "../model/Appointment";
import {UserData} from "../model/UserData";
import {Task} from "../model/Task";
import {Note} from "../model/Note";
import {Customer} from "../model/Customer";
import {Order} from "../model/Order";
import {Device} from "../model/Device";
import {Part} from "../model/Part";

export class DataService {

  private userData: UserData;

  setUserData(userData: UserData){
    this.userData = userData;
  }


    getAppointments(): Appointment[] {
    return this.userData.getAppointments()
    }

    getAppointment(id:String): Appointment {
        for (let entry of this.userData.getAppointments()) {
            if(entry.getName() == id)
                return entry;    
        }
        return null;
    }

    getTasks(): Task[] {
        return this.userData.getTasks();
    }

  getTask(id:String): Task {
    for (let entry of this.userData.getTasks()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

  getNotes(): Note[] {
    return this.userData.getNotes();
  }

  getNote(id:String): Note {
    for (let entry of this.userData.getNotes()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

  getUser(): string {
    return this.userData.getUser().getName();
  }

  getCustomers(): Customer[] {
    return this.userData.getCustomers();
  }

  getCustomer(id:String): Customer {
    for (let entry of this.userData.getCustomers()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

  getOrders(): Order[] {
    return this.userData.getOrders();
  }

  getOrder(id:String): Order {
    for (let entry of this.userData.getOrders()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

  getDevices(): Device[] {
    return this.userData.getDevices();
  }

  getDevice(id:String): Device {
    for (let entry of this.userData.getDevices()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

  getParts(): Part[] {
    return this.userData.getParts();
  }

  getPart(id:String): Part {
    for (let entry of this.userData.getParts()) {
      if(entry.getName() == id)
        return entry;
    }
    return null;
  }

}
