import { Component, OnInit } from '@angular/core';
import ExpenseModel from '../../models/Expense';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  currentDate = new Date();

  currentTab = 'expenses';

  expenses: ExpenseModel[];

  constructor() { }

  ngOnInit() {
  }

  onDateChanged(newDate: string) {
    console.log(newDate);
  }

}
