import { LocalStorageService } from './../util/local-storage.service';
import { HttpService } from "../http.service";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  private httpService: HttpService;
  private url: string = `http://localhost:4000`;
  private currentUser: User;
  localStorageService: LocalStorageService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }
  public login(user: User) {
    console.log("here i am ");
    const obs: Observable<any> = this.httpService.post(
      `/login`,
      user
    );
    obs.subscribe(
      (data: User) => {
        this.currentUser = user;
        // this.localStorageService.setItem("userID", user);
      },
      (error: any) => {
        console.log("Error!");
      }
    );
    return obs;
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public getUser(id: string): Observable<User> {
    return this.httpService.get(`/user/${id}`);
  }

  public setCurrentUser(user: User): void {
    this.currentUser = user;
  }
}
