using Microsoft.EntityFrameworkCore;
using expense_tracker.Models;

namespace expense_tracker
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    { }

    public DbSet<ExpenseCategory> ExpenseCategories { get; set; }
  }
}