import { Component, OnInit } from '@angular/core';
import {TeacherComponent} from '../teacher/teacher.component';
import { Subject } from '../student/student.component';

const DATA: Subject[]=[
  {name:"Fizyka",grades:[4,4,4,4,4]}
];

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.sass']
})
export class EditStudentComponent implements OnInit {

  //name = this.teacherComponent.selectedMyClass;
  name = "BOHDAN";

  constructor(
    private teacherComponent:TeacherComponent
  ) {
    this.name = teacherComponent.selectedMyClass;
    console.log(this.name);
    
   }

  ngOnInit(): void {
    console.log(name);
    
  }

  displayedColumns: string[] = [ 'name', 'grades'];
  dataSource = DATA;
}
