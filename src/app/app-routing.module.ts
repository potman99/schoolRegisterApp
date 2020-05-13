import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HeadmasterComponent } from './headmaster/headmaster.component';
import { NavigationComponent } from './navigation/navigation.component';



const routes: Routes = [
  {path: '',component:NavigationComponent},
  {path: 'navigation', component:NavigationComponent},
  {path: 'student' ,component: StudentComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'headmaster', component:HeadmasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent,TeacherComponent,HeadmasterComponent,NavigationComponent];