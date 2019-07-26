export interface IExpense {
  id: number | null;
  date: string;
  amount: number;
  description: string;
  expenseCategoryId: number;
}

export default class ExpenseModel implements IExpense {
  public id: number | null;
  public date: string;
  public amount: number;
  public description: string;
  public expenseCategoryId: number;

  constructor(data?: IExpense | null) {
    if (data) {
      this.setProperties(data);
    }

  }

  public setProperties(data: IExpense) {
    if (data.id) { this.id = data.id; }
    if (data.date) { this.date = data.date; }
    if (data.amount) { this.amount = data.amount; }
    if (data.description) { this.description = data.description; }
    if (data.expenseCategoryId) { this.expenseCategoryId = data.expenseCategoryId; }
  }
}
