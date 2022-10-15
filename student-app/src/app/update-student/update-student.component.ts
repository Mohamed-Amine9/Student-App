import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id:any;
  student:Student=new Student();

  constructor(private studentService:StudentService,private router:Router,
    private route:ActivatedRoute) { }
//go back to the main page
goTo(){
  this.router.navigate(['']);
}


  saveStudent(id:any,student:Student){
    return this.studentService.updateStudent(id,student).subscribe(data=>{
      console.log('d5alna');
      console.log(data);
      this.goTo();
    },
    error=>console.log(error));
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getById(this.id).subscribe(data=>{
      this.student=data;
    })
  }
  onSubmit(){

    this.saveStudent(this.id,this.student);

  }

}
