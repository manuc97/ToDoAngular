import { Item } from "./item/item.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { User } from "./login/user.model";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  private httpClient: HttpClient;

  private baseURl: string = `http://localhost:4000`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseURl}${url}`);
  }

  public post(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.baseURl}${url}`, data);
  }

  public put(url: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseURl}${url}`, data);
  }

  public delete(url: string, data: any): Observable<any> {
    return this.httpClient.delete(`${this.baseURl}${url}`, data);
  }
}
