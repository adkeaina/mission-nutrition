using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class PlannedMeal
{
    public int PlannedMealId { get; set; }

    public string Username { get; set; } = null!;

    public int MealDate { get; set; }

    public int? MealId { get; set; }

    public int RecipeId { get; set; }

    public virtual Recipe Recipe { get; set; } = null!;

    public virtual SignIn UsernameNavigation { get; set; } = null!;
}
