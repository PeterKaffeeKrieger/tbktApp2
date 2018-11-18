import {MockDataBase} from "../mockData/MockDataBase";
import {UserData} from "../model/UserData";

export class DataBaseService {

  private onlineDataBase = new MockDataBase();
  private offlineDataBase = new MockDataBase();

  loadUserData(userName: string, pwHash: string): UserData{
    if(this.onlineDataBase.isConnected()){
      console.log("loading online data");
      return this.onlineDataBase.tryLoadData(userName,pwHash);
    }else {
      console.log("loading offline data");
      return this.offlineDataBase.tryLoadData(userName,pwHash);
    }
  }

  validateUser(userName: string, pwHash: string):boolean{
    if(this.onlineDataBase.isConnected()){
      return this.onlineDataBase.validateUser(userName,pwHash);
    }else {
      return this.offlineDataBase.validateUser(userName,pwHash);
    }
  }

  syncUserData():boolean{
    if(!this.onlineDataBase.isConnected()){
      console.log("offline")
      return false;
    }
    //TODO merge offline and online userdata
    //TODO sync with offline and online Database
    return true;
  }

}
