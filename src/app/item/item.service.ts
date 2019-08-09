import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
  private httpService : HttpService;
  private url: string = `http://localhost:4000`;
  httpClient: any;

  constructor(httpService : HttpService, httpClient: HttpClient) {
    this.httpService  = httpService;
    this.httpClient = httpClient;
   }

   public deleteItem(item: Item){
    const obs : Observable<any> = this.httpService.delete(`/delete/item/${item._id}`, item);
    obs.subscribe(
      (data: Item) => {

      },
      (error: any) => {
        console.log("Error!");
      }
    );
    return obs;
   }
   public updateItem(item: Item){
    return this.httpService.put(`/item/${item._id}`,item);
   }

   public getItems(){
     return this.httpService.get(`/items`);
   }

   public createItem(item: Item){
    return this.httpClient.post(`${this.url}/item`, item);
   }
}
