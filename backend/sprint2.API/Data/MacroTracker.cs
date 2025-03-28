using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class MacroTracker
{
    public string? Username { get; set; }

    public DateOnly? Date { get; set; }

    public int? WeekNum { get; set; }

    public string? HealthDescription { get; set; }

    public int? MacroId { get; set; }

    public double? Quantity { get; set; }

    public virtual Macro? Macro { get; set; }
}
