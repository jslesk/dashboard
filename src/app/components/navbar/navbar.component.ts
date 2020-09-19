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
    this.itemService.shoppingCart.subscribe(shoppingCartMap => {
      console.log('------------------------------');

      for (const [key, value] of Object.entries(shoppingCartMap)) {
        this.shoppingCartItems.push({ count: value.count, data: value.data });
      }

      if (this.shoppingCartItems.length) {
        // console.log(this.shoppingCartItems.length);
        // console.log(this.shoppingCartItems);
      }
      console.log('------------------------------');
    });
  }

}
