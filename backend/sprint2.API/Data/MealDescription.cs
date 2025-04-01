using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class MealDescription
{
    public int MealId { get; set; }

    public string Description { get; set; } = null!;
}
