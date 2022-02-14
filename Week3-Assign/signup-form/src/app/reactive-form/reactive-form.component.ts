import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.logIn=new FormGroup({
      "firstName": new FormControl("", [Validators.minLength(3), Validators.required]),
      "lastName": new FormControl("", [Validators.minLength(3), Validators.required]),
      "emailAddress": new FormControl("", [Validators.email, Validators.required]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6),]),
    });
  }

  get firstName(): any { 
    return this.logIn.get("firstName"); 
  }
  get lastName(): any { 
    return this.logIn.get("lastName"); 
  }
  get emailAddress(): any { 
    return this.logIn.get("emailAddress"); 
  }
  get password(): any { 
    return this.logIn.get("password"); 
  }

  onSubmit(){
    console.log("ReactiveForm >> ", this.logIn);
    alert("{ firstName: "+ this.logIn.value.firstName + ", lastName: "+ this.logIn.value.lastName +", emailAddress: "+ this.logIn.value.emailAddress +", password: "+ this.logIn.value.password + " }");
  }

}
