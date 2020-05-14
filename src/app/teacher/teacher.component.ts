import { Component, OnInit } from '@angular/core';


interface Student{
  lastname: string;
}

const DATA: Student[]=[
  {lastname:"SEMPER"},
  {lastname:"AAA"},
  {lastname:"BBB"},
  {lastname:"CCC"}

]

@Component({
  selector: 'app-teacher',
  templateUrl:'./teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  txt: string = "BYKU";
  selectedMyClass;
  selectedMyStudents;

  constructor() { }

  ngOnInit(): void {
  }



  onClick(txt:string):void {
    console.log(txt);
    
  }

  students = DATA;
}

