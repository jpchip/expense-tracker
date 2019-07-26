import { Component, OnInit, Input, Output, SimpleChanges, SimpleChange, OnChanges, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-month-pagination',
  templateUrl: './month-pagination.component.html',
  styleUrls: ['./month-pagination.component.scss']
})
export class MonthPaginationComponent implements OnInit, OnChanges {

  @Input() initialDate: Date;

  @Output() dateChanged = new EventEmitter();

  date = new Date();

  currentMonth = 'July 2019';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const initialDateChange: SimpleChange = changes.initialDate;
    console.log('prev value: ', initialDateChange.previousValue);
    console.log('got name: ', initialDateChange.currentValue);
    this.date = new Date(initialDateChange.currentValue);
    this.setCurrentMonth(this.date);
  }

  ngOnInit() {

  }

  previous(event: Event) {
    event.preventDefault();
    const newDate = new Date(this.date.setMonth(this.date.getMonth() - 1));
    this.date = newDate;
    this.setCurrentMonth(this.date);
    this.dateChanged.emit(this.date.toDateString());
  }

  next(event: Event) {
    event.preventDefault();
    const newDate = new Date(this.date.setMonth(this.date.getMonth() + 1));
    this.date = newDate;
    this.setCurrentMonth(this.date);
    this.dateChanged.emit(this.date.toDateString());
  }

  setCurrentMonth(date: Date) {
    this.currentMonth = moment(date).format('MMM Y');
  }

}
