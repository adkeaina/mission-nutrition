using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class SignIn
{
    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public virtual ICollection<PlannedMeal> PlannedMeals { get; set; } = new List<PlannedMeal>();
}
