using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class Recipe
{
    public int RecipeId { get; set; }

    public string RecipeName { get; set; } = null!;

    public int? TimeToPrepare { get; set; }

    public double? StarRating { get; set; }

    public int? Servings { get; set; }

    public string? MealOfTheDay { get; set; }

    public virtual ICollection<PlannedMeal> PlannedMeals { get; set; } = new List<PlannedMeal>();

    public virtual ICollection<RecipeIngredient> RecipeIngredients { get; set; } = new List<RecipeIngredient>();

    public virtual ICollection<RecipeStep> RecipeSteps { get; set; } = new List<RecipeStep>();
}
