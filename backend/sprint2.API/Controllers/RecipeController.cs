using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sprint2.API.Data;

namespace sprint2.API.Controllers
{
    
    [Route("[controller]")]
    [ApiController]
    
    public class RecipeController : ControllerBase
    {
        private RecipesContext _recipesContext;

        public RecipeController(RecipesContext recipesContext)
        {
            _recipesContext = recipesContext;
        }

        [HttpGet(Name = "GetRecipes")]
        public IEnumerable<Recipe> Get()
        {

            var recipesList = _recipesContext.Recipes;
            
            return (recipesList);
        }
    
    }
}