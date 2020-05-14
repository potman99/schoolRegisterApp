import { Component, OnInit } from '@angular/core';
import {TeacherComponent} from '../teacher/teacher.component';
import { Student } from '../student';

let s = new Student();

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.sass']
})
export class EditStudentComponent implements OnInit {

  //name = this.teacherComponent.selectedMyClass;


  constructor(
    private teacherComponent:TeacherComponent
  ) {
    s = teacherComponent.selectedMyClass;
    console.log(s.lastname);
    
   }

  ngOnInit(): void {
    console.log(s.lastname);
    
  }

  displayedColumns: string[] = [ 'name', 'grades'];
  dataSource = s.subjects;
}
