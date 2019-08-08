import { UserService } from './user.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "./user.model";
import { Subscription } from "rxjs";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private userService: UserService;
  private router: Router;
  private user: User = new User();


  public loginForm: FormGroup;


  constructor(userService: UserService, router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(this.user.username),
      password: new FormControl(this.user.password)
    });
    this.userService = userService;
    this.router = router;
  }

  ngOnInit() {
    // this.form.controls.username.valueș
  }

  public sendData() {
    this.user = this.loginForm.value;
    console.log(this.user);
    alert("Hello " + this.loginForm.controls.username.value);
      const subscription: Subscription = this.userService
      .login(this.user)
      .subscribe(
        (data: User) => {
          this.router.navigate(['/home']);
        },
        (error: any) => {
          alert("Doesn't exist user");
          console.log("Error!", error);
        }
      );

  }
}
