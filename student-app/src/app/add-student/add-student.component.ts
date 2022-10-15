import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student=new Student();
  constructor(private studentService:StudentService,
    private router:Router) { }


    saveStudent(student:Student){
      return this.studentService.addStudent(student).subscribe(data=>{
        console.log(data);
        this.goTo();
      },
      error=>console.log(error));
    }

    goTo(){
       this.router.navigate(['']);
    }

    onSubmit(){
      this.saveStudent(this.student);
  }
  ngOnInit(): void {
  }

}
