import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
export class ItemListComponent implements OnInit {

  data: any;

  foods: any[] = [
    { value: 'regular', viewValue: 'Regular' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  items: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService
      .getAllData()
      .subscribe(data => {

        this.data = data;

        data.forEach(d => {
          const item = {} as Item;
          item.data = d;
          item.formCtrl = new FormControl();
          this.items.push(item);
        });
      });
  }
}
