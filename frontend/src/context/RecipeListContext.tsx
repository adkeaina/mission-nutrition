import { createContext, ReactNode, useContext, useState } from "react";
import { Recipe } from "../types/Recipe";

interface RecipeListContextType {
    recipeList: Recipe[];
    addToRecipeList: (item: Recipe) => void;
}

const RecipeListContext = createContext<RecipeListContextType | undefined>(undefined);

export const RecipeListProvider = ({ children }: { children: ReactNode }) => {
    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    const addToRecipeList = (item: Recipe) => {
        const existingRecipe = recipeList.find((b) => b.recipeId === item.recipeId);
        if (!existingRecipe) {
            setRecipeList([...recipeList, item ]);
        }
    };

    return (
        <RecipeListContext.Provider value={{ recipeList, addToRecipeList }}>
            {children}
        </RecipeListContext.Provider>
    )
};

export const useRecipeList = () => {
    const context = useContext(RecipeListContext);
    if (!context) {
        throw new Error('useRecipeList must be used within a RecipeListProvider');
    }
    return context;
}