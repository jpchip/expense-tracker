using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using expense_tracker.Models;

namespace expense_tracker.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseCategoriesController : ControllerBase
    {

        private ApplicationDbContext _context;

        public ExpenseCategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseCategory>>> Get()
        {
            return await _context.ExpenseCategories.ToListAsync();
        }

 
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
