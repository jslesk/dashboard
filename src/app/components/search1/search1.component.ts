import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDataChange = new EventEmitter<any>();

  locationCtrl = new FormControl();
  dayOfWeekCtrl = new FormControl();
  hourOfDayCtrl = new FormControl();
  flightDelayLevel = new FormControl();
  demoVersionCtrl = new FormControl();

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.filteredOptions = this.locationCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onSearch() {
    this.itemService
      .getAllData()
      .subscribe(data => {
        this.onDataChange.emit(data);
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}