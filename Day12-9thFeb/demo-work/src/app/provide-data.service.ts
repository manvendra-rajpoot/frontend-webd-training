import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {
  employees = [
    {
      "fName": "Raghav", 
      "lName": "Raman", 
      "age":30
    }, 
    {
      "fName": "Devesh", 
      "lName": "Singh", 
      "age":22
    }, 
    {
      "fName": "Vishesh", 
      "lName": "Sharma", 
      "age":20
    }, 
    {
      "fName": "Manish", 
      "lName": "Kumar", 
      "age":19
    }];
  constructor() { }
  greet(){
    return "MG";
  }
  sendEmployeesDetails(){
    return this.employees;
  }
}
