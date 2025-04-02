using System;
using System.Collections.Generic;

namespace sprint2.API.Data;

public partial class Macro
{
    public int MacroId { get; set; }

    public double? Protein { get; set; }

    public double? Fat { get; set; }

    public double? Carbohydrates { get; set; }
}
