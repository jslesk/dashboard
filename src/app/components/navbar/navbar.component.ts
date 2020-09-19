import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shoppingCartItems: any[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.shoppingCart.subscribe(items => {
      this.shoppingCartItems = items;
      console.log(this.shoppingCartItems);
    });
  }

}
