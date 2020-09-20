import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDataChange = new EventEmitter<any>();

  locationCtrl = new FormControl();
  dayOfWeekCtrl = new FormControl();
  hourOfDayCtrl = new FormControl();
  flightDelayLevelCtrl = new FormControl();
  demoVersionCtrl = new FormControl();

  flyByIdCtrl = new FormControl();
  zipCodeCtrl = new FormControl();

  daysOfWeekOptions: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  flightDelayLevelOptions: string[] = ['1', '2', '3'];
  demoVersionOptions: string[] = ['v1', 'v2', 'v3', 'v4', 'v5'];

  filteredDayOfWeek: Observable<string[]>;
  filteredDelayLevel: Observable<string[]>;
  filteredDemoVersion: Observable<string[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.filteredDayOfWeek = this.dayOfWeekCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.daysOfWeekOptions, value))
    );

    this.filteredDelayLevel = this.flightDelayLevelCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.flightDelayLevelOptions, value))
    );

    this.filteredDemoVersion = this.demoVersionCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(this.demoVersionOptions, value))
    );
  }

  onSearch(): void {
    this.itemService
      .getAllData()
      .subscribe(data => {
        this.onDataChange.emit(data);
      });
  }

  private _filter(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
