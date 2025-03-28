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

        // *************** MACRO TRACKER ENDPOINTS *****************
        [HttpGet("macro-tracker")]
        public async Task<ActionResult<IEnumerable<MacroTracker>>> GetMacroTracker()
        {
            return await _context.MacroTrackers.ToListAsync();
        }
        
    }
}
