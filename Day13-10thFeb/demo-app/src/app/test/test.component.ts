import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  getGreet:any;
  employees:any;
 
  constructor(service: ProvideDataService) { 
    this.getGreet = service.greet();
    this.employees = service.sendEmployeesDetails();
  }
  
  ngOnInit(): void {
  }

}
