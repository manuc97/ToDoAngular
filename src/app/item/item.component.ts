import { OnInit, Output, EventEmitter } from "@angular/core";
import { ItemService } from "./item.service";
import { Component, Input } from "@angular/core";
import { Item } from "./item.model";
import { Subscription } from "rxjs";

@Component({
  selector: "item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent {
  @Input() item: Item;
  @Output() delete: EventEmitter<Item> = new EventEmitter();
  @Output() update: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  public deleteItem() {
    this.delete.emit(this.item);
  }

  public updateItem() {
    this.update.emit(this.item);
  }
}
