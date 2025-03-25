using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class RecipeIngredient
{
    public int RecipeId { get; set; }

    public int IngredientId { get; set; }

    public double? Quantity { get; set; }

    public string? Unit { get; set; }

    public virtual Ingredient Ingredient { get; set; } = null!;

    public virtual Recipe Recipe { get; set; } = null!;
}
