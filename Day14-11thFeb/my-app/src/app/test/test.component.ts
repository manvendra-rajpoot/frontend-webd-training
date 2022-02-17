import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myComments:any;
  myUsers:any;
  constructor(service: ProvideDataService) {
    service.getUsers().subscribe((users)=>{
      this.myUsers=users;
    });
    service.getComments().subscribe((comments)=> {
      this.myComments=comments;
    });
   }

  ngOnInit(): void {
  }
  showUsers(){
    console.log(this.myUsers);
  }
  showComments(){
    console.log(this.myComments);
  }
}
