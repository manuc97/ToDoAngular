import { Component, OnInit, Input } from "@angular/core";
import { Item } from "./item.model";
import { HttpService } from "./http.service";
import { Subscription, Observable } from "rxjs";
import { NgForOf } from "@angular/common";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {


}
