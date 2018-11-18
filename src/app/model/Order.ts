import {Info} from "./Info";
import {Part} from "./Part";

export class Order extends Info{
  private parts: Part[] = [];

  getPrice(): number {
    let price: number;
    for(let part of this.parts){
      price += part.getPrice();
    }
    return price;
  }

  getParts(): Part[] {
    return this.parts;
  }

  setParts(parts : Part[]){
    this.parts = parts;
  }

  addPart(part : Part){
    this.parts.push(part);
  }

  addParts(parts : Part[]){
    this.parts = this.parts.concat(parts);
  }
}
