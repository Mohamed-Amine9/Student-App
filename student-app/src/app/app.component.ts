import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
  input:any;
  students:Student[]=[];
  constructor(private studentService:StudentService,private router:Router){}
 /* getStudents(){
    return this.studentService.recherche(this.input).subscribe(data=>{
      console.log(data);
      this.getAll();
    },
    error=>console.log(error))
  }
  public getAll(){
    return this.studentService.getList().subscribe(data=>{
      this.students=data;
    },
    error=>console.log(error));
  }*/
  search(){


      this.router.navigate(['rechercher',this.input])


  }
}
