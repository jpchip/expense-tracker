using expense_tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace expense_tracker.Data
{
  public class ExpenseCategoryContext : DbContext
  {
    public ExpenseCategoryContext(DbContextOptions<JudgeMyTasteContext> options) : base(options)
    {
    }

    public DbSet<ExpenseCategory> ExpenseCategory { get; set; }
  }
}