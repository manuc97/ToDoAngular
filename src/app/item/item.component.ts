import { ItemService } from './item.service';
import { Component, Input } from '@angular/core';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item : Item;

  private itemService : ItemService;
  public items: Array<Item>;

  constructor(ItemService: ItemService) {
    this.itemService = ItemService;
   }

  public deleteItem(item: Item) {
    const subscription: Subscription = this.itemService
      .deleteItem(item)
      .subscribe(
        (data: Item) => {
          console.log("----",data);
          for (let i: number = 0; i < this.items.length; i++) {
            if (this.items[i]._id === item._id) {
              this.items.splice(i, 1);
              break;
            }
          }
        },
        (error: any) => {
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
