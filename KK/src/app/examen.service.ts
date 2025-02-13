import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})
export class ExamenService {


 constructor(private http: HttpClient) { }
 private apiurl=`https://qapi.vercel.app/api/random`;


 try(){
   return this.http.get(this.apiurl);
 }


}
