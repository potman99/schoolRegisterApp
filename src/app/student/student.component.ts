import { Component, OnInit } from '@angular/core';

interface Student {
  value: string;
  viewValue: string;
}

export interface Subject {
  name: string;
  grade: number;
}

const ELEMENT_DATA: Subject[] = [
  {name:"Fizyka",grade: 5},
  {name:"Chemia",grade: 5},
  {name:"Matma",grade: 5},
  {name:"ADSD",grade: 5},
  {name:"DAADSAD",grade: 5},
  
];

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students: Student[] = [
    {value: 'trajnos', viewValue: 'TRAJNOS'},
    {value: 'biernol', viewValue: 'BIERNOL'},
    {value: 'puchala', viewValue: 'PUCHAŁA'}
  ];

  displayedColumns: string[] = [ 'name', 'grade'];
  dataSource = ELEMENT_DATA;
}

