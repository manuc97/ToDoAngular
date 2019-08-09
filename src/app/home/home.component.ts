import { Component, OnInit } from "@angular/core";
import { Item } from "../item/item.model";
import { HttpService } from "../http.service";
import { Subscription, Observable } from "rxjs";
import { NgForOf } from "@angular/common";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { ItemService } from "../item/item.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private itemService: ItemService;

  public item: Item = new Item();
  public items: Array<Item>;

  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  ngOnInit() {
    console.log('HOMEEE');

    /* get all items */
    this.getItems();
  }

  private getItems() {
    const subscription: Subscription = this.itemService.getItems().subscribe(
      (data: Array<Item>) => {
        this.items = data;
      },
      (error: any) => {
        console.log("Error!");
      }
    );
  }

  public createItem() {
    console.log(this.item);
    if (this.item.name !== undefined) {
      const subscription: Subscription = this.itemService
        .createItem(this.item)
        .subscribe(
          (data: Item) => {
            this.items.push(data);
            this.item = new Item();
          },
          (error: any) => {
            console.log("Error!");
          }
        );
    }
  }

  public deleteItem(item: Item) {
    console.log(item);
    const subscription: Subscription = this.itemService
      .deleteItem(item)
      .subscribe(
        (data: Item) => {
          for (let i: number = 0; i < this.items.length; i++) {
            if (this.items[i]._id === item._id) {
              this.items.splice(i, 1);
              break;
            }
          }
          subscription.unsubscribe();
        },
        (error: any) => {
          subscription.unsubscribe();
          console.log("Error!");
        }
      );
  }

  public updateItem(item: Item) {
    console.log(item);
    const subscription: Subscription = this.itemService
      .updateItem(item)
      .subscribe(
        (data: Item) => {
          console.log(data);
        },
        (error: any) => {
          console.log("Error!");
        }
      );
  }
}
