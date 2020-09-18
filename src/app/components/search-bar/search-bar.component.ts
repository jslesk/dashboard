import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('data');
    console.log(data);
  }

}
