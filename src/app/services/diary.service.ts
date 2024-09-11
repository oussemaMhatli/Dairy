import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http:HttpClient) { }
  //consome api add diary
  addDiary(data:any):Observable<any>{
    return this.http.post<any>('localhost:8000/api/dairy', data);
  }
  //consome api update diary
  EditDiary(data:any,id:string){
    return this.http.put(`${'localhost:8000/api/dairy'}/${id}`,data)
  }
  getAllDiary(){
    return this.http.get('localhost:8000/api/dairy')
  }
}
