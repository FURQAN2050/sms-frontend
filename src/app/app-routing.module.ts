import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentMainComponent } from './sms/Students/student-main/student-main.component';


const routes: Routes = [
  {path:'students',component:StudentMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
