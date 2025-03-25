export interface Recipe {
    recipeId: number;
    name: string;
    time: number;
    timeDescription: string;
    ingredients: string[];
    steps: string[];
    images: string[];
    video: string;
}