import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shoppingCartMap: Map<number, any>;
  shoppingCartLength: number;
  Object = Object;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.shoppingCart.subscribe(shoppingCartMap => {
      this.shoppingCartLength = 0;
      this.shoppingCartMap = shoppingCartMap;
      Object.values(shoppingCartMap).forEach(el => this.shoppingCartLength += el.count);
    });
  }
}
