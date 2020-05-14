import { Component, OnInit } from '@angular/core';
import { Student } from '../student';


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
    {firstname: 'trajnos', lastname: 'TRAJNOS',subjects: [
      {name:"PROGRAMOWANIE ESSA", grades:[2,3,1,3,4,2,2]}
    ]},
    {firstname: 'biernol', lastname: 'BIERNOL', subjects: [
      {name:"PROGRAMOWANIE OBsadsadsadasd", grades:[2,2,2,2,2,2,2,2,2,2,1,3,4,2,2]}
    ]},
    {firstname: 'puchala', lastname: 'PUCHAŁA', subjects: [
      {name:"PROGRAMOWANIE OBIEKTOWE", grades:[2,3,1,3,4,2,2]}
    ]}
  ];

  
/*
  getSubjects(name):Subject[]{
    let s:Student;
    this.students.find((item)=>{
      if(item.viewValue == name){
        s = item;
      } 
    })
    return s.subjects;
  }
*/
  selectChangeHandler(text:string){
    console.log("CHANGE");
  }

  display(text:string){
    console.log(text);
  }

  displayedColumns: string[] = [ 'name', 'grades'];
  selectedStudent:Student = this.students[1];
  dataSource = this.selectedStudent.subjects;
}

