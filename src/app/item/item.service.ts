import { Item } from './../item.model';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private httpService : HttpService;
  private url: string = `http://localhost:4000`;
  httpClient: any;

  constructor(httpService : HttpService, httpClient: HttpClient) {
    this.httpService  = httpService;
    this.httpClient = httpClient;
   }

   public deleteItem(item: Item){
     console.log("delete" , item);
     return this.httpService.delete(`${this.url}/delete/item/${item._id}`, item);
    // const obs : Observable<any> = this.httpService.delete(`${this.url}/delete/item/${item._id}`, item);
    // obs.subscribe(
    //   (data: Item) => {
    //   },
    //   (error: any) => {
    //     console.log("Error!");
    //   }
   }
   public updateItem(item: Item){
    return this.httpService.put(`${this.url}/item/${item._id}`,item);
   }

   public getItems(){
     return this.httpService.get(`${this.url}/items`);
   }

   public createItem(item: Item){
    return this.httpClient.post(`${this.url}/item`, item);
   }
}
