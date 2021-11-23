import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { 

  }

  save(user:User): Observable<User> {
    console.log("Save");
    return this.http.post<User>('http://localhost:3000/api/Alta/', user);
  }

}
