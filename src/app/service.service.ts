import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
BaseUrl="http://localhost:3000/api/login";
  constructor(public  http:HttpClient) { }
  login(data:any){
    return this.http.post(this.BaseUrl,data).pipe(map((res)=>{
      return res
    }),
  catchError((e)=>{
    return  e
  }))
  }
}
