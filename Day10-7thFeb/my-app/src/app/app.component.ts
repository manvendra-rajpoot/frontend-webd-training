import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "Johnny";
  counter:number=0;
  flag:boolean=false;
  inputField = document.getElementById("#inputF");
  greet(){
    return this.name;
  }
  getName() {
    alert(this.name);
  }
  incrementCounter(){
    this.counter++;
  }
  decrementCounter(){
    this.counter++;
  }
  readOnly(){
    this.flag = true;
  }

}
