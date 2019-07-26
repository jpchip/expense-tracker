using System;
using System.ComponentModel.DataAnnotations;

namespace expense_tracker.Models
{
  public class ExpenseCategory
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime CreatedOn { get; set; }
  }
}