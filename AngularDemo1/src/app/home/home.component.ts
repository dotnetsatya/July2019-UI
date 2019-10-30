import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeData: Employee [] = [];
  constructor() { }

  ngOnInit() {
    this.employeeData.push(new Employee(1,'satya', 'Dev', 1000));
    this.employeeData.push(new Employee(2,'John', 'QA', 1000));
    this.employeeData.push(new Employee(3,'Scott', 'SA', 1000));
    this.employeeData.push(new Employee(3,'Adam', 'SME', 1000));
    this.employeeData.push(new Employee(4,'Allan', 'Lead', 1000));
  }

}
