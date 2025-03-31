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
        
        
        [HttpGet("get-time")]
        public IActionResult GetTime(int pageSize = 5, int pageNum = 1, [FromQuery] List<string>? selectedTime = null)
        {
            if (pageSize <= 0) pageSize = 5;
            if (pageNum < 1) pageNum = 1;
        
            var query = _context.Recipes.AsQueryable();
        
            if (selectedTime != null && selectedTime.Any())
            {
                query = query.Where(b => b.TimeToPrepare.HasValue);
        
                var filteredQuery = query.Where(b =>
                    (selectedTime.Contains("<15 minutes") && b.TimeToPrepare <= 15) ||
                    (selectedTime.Contains("16-30 minutes") && b.TimeToPrepare >= 16 && b.TimeToPrepare <= 30) ||
                    (selectedTime.Contains("31+ minutes") && b.TimeToPrepare > 30)
                );
        
                query = filteredQuery;
            }
        
            var totalNumRecipes = query.Count();
        
            var recipeList = query
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();
        
            return Ok(new
            {
                Recipes = recipeList,
                TotalNumRecipes = totalNumRecipes
            });
        }
        
        [HttpGet("AllRecipes")]
        public IActionResult GetAllRecipes([FromQuery] string userName, [FromQuery] int mealDate)
        {
            if (string.IsNullOrEmpty(userName))
            {
                return BadRequest("Username is required.");
            }
        
            var query = _context.PlannedMeals
                .Where(pm => pm.Username == userName && pm.MealDate == mealDate)
                .Select(pm => pm.Recipe)
                .ToList();
        
            return Ok(new
            {
                Recipes = query,
                TotalRecipes = query.Count
            });
        }
        
        [HttpGet("users-other")]
        public async Task<ActionResult<IEnumerable<SignIn>>> GetUsers([FromQuery] string? username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                return await _context.SignIns
                    .Where(u => u.Username.Contains(username))
                    .ToListAsync();
            }
        
            return await _context.SignIns.ToListAsync();
        }
        
        [HttpGet("GetRecipe")]
        public IActionResult GetRecipeById([FromQuery] int recipeId)
        {
            if (recipeId <= 0)
            {
                return BadRequest("Invalid recipeId.");
            }

            var recipe = _context.Recipes
                .Include(r => r.RecipeIngredients)
                .ThenInclude(ri => ri.Ingredient)
                .Include(r => r.RecipeSteps)
                .FirstOrDefault(r => r.RecipeId == recipeId);

            if (recipe == null)
            {
                return NotFound("Recipe not found.");
            }

            return Ok(new
            {
                recipeID = recipe.RecipeId,
                recipeName = recipe.RecipeName,
                timeToPrepare = recipe.TimeToPrepare,
                starRating = recipe.StarRating,
                servings = recipe.Servings,
                mealOfTheDay = recipe.MealOfTheDay,
                ingredients = recipe.RecipeIngredients.Select(ri => new
                {
                    ingredientId = ri.Ingredient.IngredientId, // No ingredient name
                    quantity = ri.Quantity,
                    unit = ri.Unit,
                    protein = ri.Ingredient.Protein,
                    fat = ri.Ingredient.Fat,
                    carbohydrates = ri.Ingredient.Carbohydrates
                }).ToList(),
                steps = recipe.RecipeSteps.Select(s => new
                {
                    stepNumber = s.StepNumber,
                    stepText = s.StepText
                }).ToList()
            });
        }








        

        
    }
}
