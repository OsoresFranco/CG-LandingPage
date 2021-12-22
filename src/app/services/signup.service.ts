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
    return this.http.post<User>('api/Alta/', user);
  }

}
