import { Component, OnInit } from '@angular/core';

export class Student  {
  value: string;
  viewValue: string;
  subjects :Subject[]
}

export interface Subject {
  name: string;
  grades: number[];
}

const ELEMENT_DATA: Subject[] = [
  {name:"Fizyka",grades:[3,4] },
  {name:"Matematyka",grades:[3,4,3,1,2] },
  {name:"Poslski",grades:[3,4,4,4,4] },
  {name:"Angielski",grades:[3,4,5,5,5,5] },
  {name:"Historua",grades:[3,4,1,1] },
 
  
];

@Component({
  selector: 'student-root',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  selectedUser:string = 'BIERNOL';

  constructor() { }

  ngOnInit(): void {
  }

  students: Student[] = [
    {value: 'trajnos', viewValue: 'TRAJNOS',subjects: [
      {name:"PROGRAMOWANIE OBIEKTOWE", grades:[2,3,1,3,4,2,2]}
    ]},
    {value: 'biernol', viewValue: 'BIERNOL', subjects: ELEMENT_DATA},
    {value: 'puchala', viewValue: 'PUCHAŁA', subjects: ELEMENT_DATA}
  ];

  getSubjects(name):Subject[]{
    let s:Student;
    this.students.find((item)=>{
      if(item.viewValue == name){
        s = item;
      } 
    })
    return s.subjects;
  }

  selectChangeHandler(text:string){
    console.log("CHANGE");
    this.selectedUser = text;
  }

  displayedColumns: string[] = [ 'name', 'grades'];
  dataSource = this.getSubjects(this.selectedUser);
}

