import {Customer} from "./Customer";
import {User} from "./User";
import {Appointment} from "./Appointment";
import {Note} from "./Note";
import {Task} from "./Task";
import {Device} from "./Device";
import {Order} from "./Order";
import {Part} from "./Part";

export class UserData {

  constructor(private user: User){

  }

  getUser() : User{
    return this.user;
  }

  private customers: Customer[] = [];
  getCustomers(){
    return this.customers;
  }

  setCustomers(customers: Customer[]){
    this.customers = customers;
  }

  addCustomer(customer: Customer){
    this.customers.push(customer);
  }

  addCustomers(customers: Customer[]){
    this.customers = this.customers.concat(customers);
  }

  private appointments: Appointment[] = [];
  getAppointments(){
    return this.appointments;
  }

  setAppointments(appointments: Appointment[]){
    this.appointments = appointments;
  }

  addAppointment(appointment: Appointment){
    this.appointments.push(appointment);
  }

  addAppointments(appointments: Appointment[]){
    this.appointments = this.appointments.concat(appointments);
  }

  private notes: Note[] = [];
  getNotes(){
    return this.notes;
  }

  setNotes(notes: Note[]){
    this.notes = notes;
  }

  addNote(note: Note){
    this.notes.push(note);
  }

  addNotes(notes: Note[]){
    this.notes = this.notes.concat(notes);
  }

  private tasks: Task[] = [];
  getTasks(){
    return this.tasks;
  }

  setTasks(tasks: Task[]){
    this.tasks = tasks;
  }

  addTask(task: Task){
    this.tasks.push(task);
  }

  addTasks(tasks: Task[]){
    this.tasks = this.tasks.concat(tasks);
  }

  private devices: Device[] = [];
  getDevices(){
    return this.devices;
  }

  setDevices(devices: Device[]){
    this.devices = devices;
  }

  addDevice(device: Device){
    this.devices.push(device);
  }

  addDevices(devices: Device[]){
    this.devices = this.devices.concat(devices);
  }

  private orders: Order[] = [];
  getOrders(){
    return this.orders;
  }

  setOrders(orders: Order[]){
    this.orders = orders;
  }

  addOrder(order: Order){
    this.orders.push(order);
  }

  addOrders(orders: Order[]){
    this.orders = this.orders.concat(orders);
  }

  private parts: Part[] = [];
  getParts(){
    return this.parts;
  }

  setParts(parts: Part[]){
    this.parts = parts;
  }

  addPart(part: Part){
    this.parts.push(part);
  }

  addParts(parts: Part[]){
    this.parts = this.parts.concat(parts);
  }

}
