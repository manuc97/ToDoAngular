import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
