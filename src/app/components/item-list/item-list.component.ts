import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from '../../services/item.service';
export interface Item {
  data: any;
  selectedValue: any;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {

  @Input() data: any;

  enableDebug = false;

  foods: any[] = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  items: Item[] = [];

  constructor(private itemService: ItemService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  ngOnChanges(changes: any): void {
    if (changes.data.currentValue) {
      changes.data.currentValue.forEach(el => {
        this.items.push({
          data: el,
          selectedValue: null
        });
      });
    }
  }

  addToCart(data: any): void {
    this.itemService
      .addToCart(data)
      .subscribe(_ => this.openSnackBar(data));
  }

  private openSnackBar(data: any): void {
    this._snackBar.open(`'${data.name}' added to Cart`, 'Close', {
      duration: 2000,
    });
  }
}
