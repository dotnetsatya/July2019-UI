import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  query: string = "simple text";
  names: string [] = ["satya", "john", "james"];
  arr : any [] =[{id:1, name:'satya'}, {id:2, name:'john'}, {id: 3, name: 'allan'}]
  constructor() { }

  ngOnInit() {
  }

}
