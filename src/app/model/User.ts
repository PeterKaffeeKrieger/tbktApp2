import {Info} from "./Info";

export class User extends Info{

  constructor(name: string, private pwHash: string) {
    super(name);
  }

  validatePwHash(pwHash: string): boolean {
    return this.pwHash == pwHash;
  }
}
