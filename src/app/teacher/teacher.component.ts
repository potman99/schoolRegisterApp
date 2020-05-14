import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { Student } from '../student';

const randStudents: Student[]=[
  {firstname: 'trajnos', lastname: 'S1',subjects: [
    {name:"PROGRAMOWANIE ESSA", grades:[2,3,1,3,4,2,2]}
  ]},
  {firstname: 'biernol', lastname: 'S2', subjects: [
    {name:"PROGRAMOWANIE OBsadsadsadasd", grades:[2,2,2,2,2,2,2,2,2,2,1,3,4,2,2]}
  ]},
  {firstname: 'puchala', lastname: 'S3', subjects: [
    {name:"PROGRAMOWANIE OBIEKTOWE", grades:[2,3,1,3,4,2,2]}
  ]}
];



const teachers: Teacher[]=[
  {firstname:"TRAJ",lastname:"TRAJNOS",myClass:randStudents,myStudents:randStudents},
  {firstname:"JANUSZ",lastname:"BIERNOL",myClass:randStudents,myStudents:randStudents},
  {firstname:"AAA", lastname:"BBB",myClass:randStudents,myStudents:randStudents}
  

]

@Component({
  selector: 'app-teacher',
  templateUrl:'./teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  txt: string = "BYKU";
  selectedMyClass:Student;
  selectedMyStudents:Student;
  selectedTeacher:Teacher;

  constructor() { }

  ngOnInit(): void {
  }


  onClick(s:Student):void {
    console.log(s.lastname);
    
  }

  students = teachers[0].myClass;
  teachers = teachers;
}

