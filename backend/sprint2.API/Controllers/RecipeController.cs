using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sprint2.API.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sprint2.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatabaseController : ControllerBase
    {
        private readonly RecipesContext _context;

        public DatabaseController(RecipesContext context)
        {
            _context = context;
        }

        // *************** RECIPES ENDPOINTS *****************
        [HttpGet("recipes")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            return await _context.Recipes.ToListAsync();
        }

        // *************** INGREDIENTS ENDPOINTS *****************
        [HttpGet("ingredients")]
        public async Task<ActionResult<IEnumerable<Ingredient>>> GetIngredients()
        {
            return await _context.Ingredients.ToListAsync();
        }
        
        // *************** RECIPE INGREDIENTS ENDPOINTS *****************
        [HttpGet("recipe-ingredients")]
        public async Task<ActionResult<IEnumerable<RecipeIngredient>>> GetRecipeIngredients()
        {
            return await _context.RecipeIngredients.ToListAsync();
        }

        // *************** MACROS ENDPOINTS *****************
        [HttpGet("macros")]
        public async Task<ActionResult<IEnumerable<Macro>>> GetMacros()
        {
            return await _context.Macros.ToListAsync();
        }
        
        // *************** MEAL DESCRIPTION ENDPOINTS *****************
        [HttpGet("meal-descriptions")]
        public async Task<ActionResult<IEnumerable<MealDescription>>> GetMealDescriptions()
        {
            return await _context.MealDescriptions.ToListAsync();
        }

        // *************** PLANNED MEALS ENDPOINTS *****************
        [HttpGet("planned-meals")]
        public async Task<ActionResult<IEnumerable<PlannedMeal>>> GetPlannedMeals()
        {
            return await _context.PlannedMeals.ToListAsync();
        }

        // *************** SIGN-IN ENDPOINTS *****************
        [HttpGet("users")]
        public async Task<ActionResult<IEnumerable<SignIn>>> GetUsers()
        {
            return await _context.SignIns.ToListAsync();
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult<SignIn>> GetUserById(int id)
        {
            var user = await _context.SignIns.FindAsync(id);
            if (user == null) return NotFound();
            return user;
        }

        [HttpPut("user/{id}")]
        public async Task<IActionResult> UpdateUser(int id, SignIn updatedUser)
        {
            if (id != updatedUser.Id) return BadRequest();

            _context.Entry(updatedUser).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.SignIns.Any(e => e.Id == id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        [HttpDelete("user/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.SignIns.FindAsync(id);
            if (user == null) return NotFound();

            _context.SignIns.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /*
         * [HttpGet("user/{username}")]
public async Task<ActionResult<SignIn>> GetUserByUsername(string username)
{
    var user = await _context.SignIns.FindAsync(username);
    if (user == null) return NotFound();
    return user;
}

[HttpPut("user/{username}")]
public async Task<IActionResult> UpdateUser(string username, SignIn updatedUser)
{
    if (username != updatedUser.Username) return BadRequest();

    _context.Entry(updatedUser).State = EntityState.Modified;
    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!_context.SignIns.Any(e => e.Username == username)) return NotFound();
        throw;
    }

    return NoContent();
}

[HttpDelete("user/{username}")]
public async Task<IActionResult> DeleteUser(string username)
{
    var user = await _context.SignIns.FindAsync(username);
    if (user == null) return NotFound();

    _context.SignIns.Remove(user);
    await _context.SaveChangesAsync();

    return NoContent();
}
*/

        // *************** MACRO TRACKER ENDPOINTS *****************
        [HttpGet("macro-tracker")]
        public async Task<ActionResult<IEnumerable<MacroTracker>>> GetMacroTracker()
        {
            return await _context.MacroTrackers.ToListAsync();
        }
        
    }
}
