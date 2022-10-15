import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { RechercheComponent } from './recherche/recherche.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:'studentList',component:StudentListComponent},
  {path:'',redirectTo:'studentList',pathMatch:'full'},
  {path:'addStudent',component:AddStudentComponent},
  {path:'update/:id',component:UpdateStudentComponent},
  {path:'rechercher/:input',component:RechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
