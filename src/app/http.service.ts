import { Item } from "./item.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { User } from "./login/user.model";

@Injectable()
export class HttpService {
  private httpClient: HttpClient;

  private url: string = `http://localhost:4000`;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public get(url) {
    return this.httpClient.get(url);
  }

  public delete(url){
    return this.httpClient.delete(url);
  }

  public put(url,data){
    return this.httpClient.put(url,data);
  }

  public post(url,data) {
    return this.httpClient.post(url, data);
  }

}
