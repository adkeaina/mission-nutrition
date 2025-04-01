using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class RecipeStep
{
    public int RecipeId { get; set; }

    public int StepNumber { get; set; }

    public string? StepText { get; set; }

    public virtual Recipe Recipe { get; set; } = null!;
}
