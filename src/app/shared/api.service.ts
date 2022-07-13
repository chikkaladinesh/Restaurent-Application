import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  // Create restaurent using POST method
  postRestaurent(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Update restaurent using GET method
  getRestaurent() {
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res:any) =>{
      return res;
    }))
  }
  //  Update restaurent using PUT method
  updateRestaurent(data:any, id:number) {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // Delete restaurent with DELETE method
  deleteRestaurent(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/" +id).pipe(map((res:any)=> {
      return res;
    }))
  }
}