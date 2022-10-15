import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];

  constructor(private service:StudentService,
   private router:Router) { }

  ngOnInit(): void {
    this.getAll();
    //this.students=[{id:1,nom:"med",prenom:"hayouni",age:24,moyenne:11}]
  }

  public getAll(){
    return this.service.getList().subscribe(data=>{
      this.students=data;
    },
    error=>console.log(error));
  }
  updateStudentButton(id:any){
    console.log('d5alna');
    this.router.navigate(['update',id])
  }

  delete(id:any){
    return this.service.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    },error=>console.log(error))
  }
}
