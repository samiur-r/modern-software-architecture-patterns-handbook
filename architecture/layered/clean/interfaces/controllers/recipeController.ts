import { Request, Response } from "express";
import * as RecipeRepo from "infrastructure/prisma/recipeRepository";
import { searchRecipes } from "use-cases/searchRecipes";
import { addFavorite } from "use-cases/addFavorite";
import { getFavorites } from "use-cases/getFavorites";

export const handleSearch = async (req: Request, res: Response) => {
  const useCase = searchRecipes({ search: RecipeRepo.search });
  const recipes = await useCase(req.query.q as string);
  res.json(recipes);
};

export const handleAddFavorite = async (req: Request, res: Response) => {
  const userId = req.user?.id || "user-1"; // simulate auth
  const useCase = addFavorite({ saveFavorite: RecipeRepo.saveFavorite });
  await useCase(userId, req.body);
  res.status(200).json({ message: "Favorite added" });
};

export const handleGetFavorites = async (req: Request, res: Response) => {
  const userId = req.user?.id || "user-1";
  const useCase = getFavorites({
    getFavoritesByUser: RecipeRepo.getFavoritesByUser,
  });
  const favorites = await useCase(userId);
  res.json(favorites);
};
