import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../modal/employee.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  employeeArray: EmployeeInterface[] = [];
  ngOnInit() {
    const details = localStorage.getItem('employeeDetails');
    this.employeeArray = JSON.parse(details);
    console.log('Parsed Json');
    console.log(this.employeeArray);
  }
}
