import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  //get methods
  public getList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`/getAll`);
  }
  public getById(id :any):Observable<any>{
    return this.httpClient.get<any>(`/getById/${id}`);
  }
  //post method
  public addStudent(s:Student):Observable<object>{
    return this.httpClient.post<object>(`/add`,s);
  }
  //put methode
  public updateStudent(id:any,student:Student):Observable<any>{
    return this.httpClient.put<any>(`/updatestudent/${id}`,student);
  }
  //delete method
  public deleteStudent(id:any):Observable<any>{
    return this.httpClient.delete<any>(`/deleteStudent/${id}`);
  }
  //recherche
  public recherche(input:any):Observable<any>{
    return this.httpClient.get<any>(`/findAll/${input}`);
  }
}
