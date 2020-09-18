import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  data: any;

  constructor(private itemService: ItemService) { }


  ngOnInit(): void {
    this.itemService
      .getAllData()
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
}
