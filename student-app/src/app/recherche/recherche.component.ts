import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  input:any;
  students:Student[]=[];

  constructor(private studentService:StudentService,private router:Router,
    private route:ActivatedRoute) { }

    getStudents(){
      return this.studentService.recherche(this.input).subscribe(data=>{
        console.log(data);

      },
      error=>console.log(error))
    }

  ngOnInit(): void {
    this.input=this.route.snapshot.params['input'];
    console.log(this.input+" haw 5edmet ay");
    this.getStudents();
  }

}
