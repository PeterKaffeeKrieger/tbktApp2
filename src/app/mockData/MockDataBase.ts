import {UserData} from "../model/UserData";
import {User} from "../model/User";
import {Appointment} from "../model/Appointment";
import {Customer} from "../model/Customer";
import {Device} from "../model/Device";
import {Note} from "../model/Note";
import {Task} from "../model/Task";
import {Part} from "../model/Part";

export class MockDataBase {

  isConnected(): boolean{
    return true;
  }

  tryLoadData(userName: string, pwHash: string): UserData{
    if(this.validateUser(userName,pwHash)){
      return this.userData;
    }
    return null;
  }

  trySaveData(userData: UserData, pwHash: string): boolean{
    if(this.validateUser(userData.getUser().getName(), pwHash) && userData.getUser().validatePwHash(pwHash)){
      this.userData = userData;
      return true;
    }
    return false;
  }

  validateUser(userName: string, pwHash: string): boolean{
    if(this.user.getName() == userName && this.user.validatePwHash(pwHash)){
      return true;
    }
    return false;
  }

  constructor(){
    this.user = new User("a","a");
    this.userData = new UserData(this.user);
    let c1 = new Customer("HSKA");
    let c2 = new Customer("KIT");
    let c3 = new Customer("DHBW");
    let c4 = new Customer("PH");
    this.userData.setAppointments([
      new Appointment("Appointment 1", c1),
      new Appointment("Appointment 2", c1),
      new Appointment("Appointment 3", c2),
      new Appointment("Appointment 4", c1),
      new Appointment("Appointment 5", c4),
    ]);
    this.userData.setCustomers([
      c1,
      c2,
      c3,
      c4,
    ]);
    let d1 = new Device("Device1", c1);
    let d2 = new Device("Device2", c1);
    let d3 = new Device("Device3", c2);
    c1.setDevices([d1,d2]);
    c2.setDevices([d3]);
    this.userData.setDevices([
      d1,
      d2,
      d3,
    ]);
    let n1 = new Note("Note1");
    n1.setText("random Text");
    this.userData.setNotes([n1]);
    let t1 = new Task("Task1");
    t1.setText("Note1 should be changed");
    this.userData.setTasks([t1]);
    let p1 = new Part("PC");
    p1.setPrice(1250.99);
    this.userData.setParts([p1]);
  }

  private user: User;
  private userData: UserData;
}
