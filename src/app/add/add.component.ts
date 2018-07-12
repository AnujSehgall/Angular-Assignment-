import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../modal/employee.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: string;
  country: string;
  gender: string;
 // employeeArray: Array<IEmployee> = new Array<IEmployee>();
  employeeArray: EmployeeInterface[] = [{"name": "Anuj", "country": "India", "gender": "male"}];
  
  ngOnInit() {
    const details = localStorage.getItem('employeeDetails');
    this.employeeArray = JSON.parse(details) || [];
  }

  add() {
    const employee: EmployeeInterface = { 'name': this.name, 'country': this.country, 'gender': this.gender };
    localStorage.setItem("name",this.name);
    localStorage.setItem("age",this.country);
    localStorage.setItem("gender",this.gender);
    console.log(employee);
    console.log(this.employeeArray);
    this.employeeArray.push(employee);
    console.log(this.employeeArray);
    console.log('Stringified Model is');
    console.log(JSON.stringify(this.employeeArray));
    // Update the object into storage
    localStorage.setItem('employeeDetails', JSON.stringify(this.employeeArray));
  }


}