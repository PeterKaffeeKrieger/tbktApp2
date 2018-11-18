import {Info} from "./Info";

export class Part extends Info{
  private price: number;

  getPrice(): number {
    return this.price;
  }

  setPrice(price : number){
    this.price = price;
  }
}
