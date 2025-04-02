using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class Ingredient
{
    public int IngredientId { get; set; }

    public double? Protein { get; set; }

    public double? Fat { get; set; }

    public double? Carbohydrates { get; set; }

    public string? IngredientName { get; set; }

    public virtual ICollection<RecipeIngredient> RecipeIngredients { get; set; } = new List<RecipeIngredient>();
}
