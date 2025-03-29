import { Recipe } from "domain/entities/recipe";

type Dependencies = {
  saveFavorite: (userId: string, recipe: Recipe) => Promise<void>;
};

export const addFavorite =
  ({ saveFavorite }: Dependencies) =>
  async (userId: string, recipe: Recipe) => {
    if (!recipe?.id) throw new Error("Invalid recipe");
    return await saveFavorite(userId, recipe);
  };
