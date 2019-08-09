import { LocalStorageService } from "./local-storage.service";
import { UserService } from "./../login/user.service";
import { User } from "./../login/user.model";
import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  private currentUser: User;
  private userService: UserService;
  private localStorageService: LocalStorageService;
  private router: Router;

  constructor(
    userService: UserService,
    localStorageService: LocalStorageService,
    router: Router
  ) {
    this.userService = userService;
    this.localStorageService = localStorageService;
    this.router = router;
  }

  canActivate() {
    // this.localStorageService.setItem("userID", "5d4be8478bfa932b3448f471");
    this.currentUser = this.userService.getCurrentUser();

    if (this.currentUser === undefined) {
      if (this.localStorageService.getItem("userID") === undefined) {
        this.router.navigate(["login"]);
        return false;
      } else {
        const subject: Subject<boolean> = new Subject<boolean>();
        const obs: Observable<boolean> = subject.asObservable();
        this.userService
          .getUser(this.localStorageService.getItem("userID"))
          .subscribe((data: User) => {
            if (data === undefined) {
              this.router.navigate(["login"]);
              subject.next(false);
            } else {
              this.userService.setCurrentUser(data);
              subject.next(true);
            }
          });
        return obs;
      }
    } else {
      return true;
    }
  }
}
