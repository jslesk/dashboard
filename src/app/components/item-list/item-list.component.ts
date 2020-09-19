import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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

  foods: any[] = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  items: Item[] = [];
  constructor() { }

  ngOnInit(): void {

  }

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
}
