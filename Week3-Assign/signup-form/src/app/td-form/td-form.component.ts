import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  firstName:string="";
  lastName:string="";
  emailAddress:string="";
  password:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(logIn:any){
    console.log("TemplateDrivenForm >> ", logIn);
    alert("{ firstName: "+ this.firstName + ", lastName: "+ this.lastName+", emailAddress: "+ this.emailAddress+", password: "+this.password + " }");
  }

}
