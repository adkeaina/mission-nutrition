using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace sprint2.API.Data;

public partial class RecipesContext : DbContext
{
    public RecipesContext()
    {
    }

    public RecipesContext(DbContextOptions<RecipesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ingredient> Ingredients { get; set; }

    public virtual DbSet<Macro> Macros { get; set; }

    public virtual DbSet<MacroTracker> MacroTrackers { get; set; }

    public virtual DbSet<MealDescription> MealDescriptions { get; set; }

    public virtual DbSet<PlannedMeal> PlannedMeals { get; set; }

    public virtual DbSet<Recipe> Recipes { get; set; }

    public virtual DbSet<RecipeIngredient> RecipeIngredients { get; set; }

    public virtual DbSet<RecipeStep> RecipeSteps { get; set; }

    public virtual DbSet<SignIn> SignIns { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=recipes.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ingredient>(entity =>
        {
            entity.Property(e => e.IngredientId).HasColumnName("IngredientID");
            entity.Property(e => e.Carbohydrates).HasColumnType("FLOAT");
            entity.Property(e => e.Fat).HasColumnType("FLOAT");
            entity.Property(e => e.Protein).HasColumnType("FLOAT");
        });

        modelBuilder.Entity<Macro>(entity =>
        {
            entity.Property(e => e.MacroId).HasColumnName("MacroID");
            entity.Property(e => e.Carbohydrates).HasColumnType("FLOAT");
            entity.Property(e => e.Fat).HasColumnType("FLOAT");
            entity.Property(e => e.Protein).HasColumnType("FLOAT");
        });

        modelBuilder.Entity<MacroTracker>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("MacroTracker");

            entity.Property(e => e.Date).HasColumnType("DATE");
            entity.Property(e => e.HealthDescription).HasColumnName("Health_Description");
            entity.Property(e => e.MacroId).HasColumnName("MacroID");
            entity.Property(e => e.Quantity).HasColumnType("FLOAT");
            entity.Property(e => e.WeekNum).HasColumnName("Week_Num");

            entity.HasOne(d => d.Macro).WithMany().HasForeignKey(d => d.MacroId);
        });

        modelBuilder.Entity<MealDescription>(entity =>
        {
            entity.HasKey(e => e.MealId);

            entity.ToTable("Meal_Description");

            entity.Property(e => e.MealId).HasColumnName("MealID");
        });

        modelBuilder.Entity<PlannedMeal>(entity =>
        {
            entity.ToTable("PlannedMeal");

            entity.HasIndex(e => e.PlannedMealId, "IX_PlannedMeal_PlannedMealID").IsUnique();

            entity.Property(e => e.PlannedMealId).HasColumnName("PlannedMealID");
            entity.Property(e => e.MealId).HasColumnName("MealID");
            entity.Property(e => e.RecipeId).HasColumnName("RecipeID");

            entity.HasOne(d => d.Recipe).WithMany(p => p.PlannedMeals)
                .HasForeignKey(d => d.RecipeId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.UsernameNavigation).WithMany(p => p.PlannedMeals)
                .HasForeignKey(d => d.Username)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Recipe>(entity =>
        {
            entity.Property(e => e.RecipeId).HasColumnName("RecipeID");
            entity.Property(e => e.StarRating).HasColumnType("FLOAT");
        });

        modelBuilder.Entity<RecipeIngredient>(entity =>
        {
            entity.HasKey(e => new { e.RecipeId, e.IngredientId });

            entity.ToTable("Recipe_Ingredients");

            entity.Property(e => e.RecipeId).HasColumnName("RecipeID");
            entity.Property(e => e.IngredientId).HasColumnName("IngredientID");
            entity.Property(e => e.Quantity).HasColumnType("FLOAT");

            entity.HasOne(d => d.Ingredient).WithMany(p => p.RecipeIngredients).HasForeignKey(d => d.IngredientId);

            entity.HasOne(d => d.Recipe).WithMany(p => p.RecipeIngredients).HasForeignKey(d => d.RecipeId);
        });

        modelBuilder.Entity<RecipeStep>(entity =>
        {
            entity.HasKey(e => new { e.RecipeId, e.StepNumber });

            entity.ToTable("Recipe_Steps");

            entity.Property(e => e.RecipeId).HasColumnName("RecipeID");

            entity.HasOne(d => d.Recipe).WithMany(p => p.RecipeSteps).HasForeignKey(d => d.RecipeId);
        });

        modelBuilder.Entity<SignIn>(entity =>
        {
            entity.HasKey(e => e.Username);

            entity.ToTable("SignIn");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
