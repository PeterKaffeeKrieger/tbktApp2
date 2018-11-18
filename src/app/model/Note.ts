import {Info} from "./Info";

export class Note extends Info{
  private text: string;

  getText(): string {
    return this.text;
  }

  setText(text : string){
    this.text = text;
  }
}
