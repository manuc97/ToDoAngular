import { HttpService } from '../http.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpService : HttpService;
  private url: string = `http://localhost:4000`;
  private currentUser : User = new User();


  constructor(httpService : HttpService) {
    this.httpService  = httpService;
  }
  public login(user: User) {
    console.log("here i am ");
    const obs : Observable<any> = this.httpService.post(`${this.url}/login`, user);
    obs.subscribe(
      (data: User) => {
        this.currentUser = user;
      },
      (error: any) => {
        console.log("Error!");
      }
    );
    return obs;
  }
}
