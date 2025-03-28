import { Recipe } from './Recipe';
import { Ingredient } from './Ingredient';
import { RecipeStep } from './RecipeStep';

export interface FullRecipe {
    recipeID: number;
    recipe: Recipe;
    ingredients: Ingredient[];
    steps: RecipeStep[];
}