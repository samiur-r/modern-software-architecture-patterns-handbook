import { prisma } from "lib/prisma";

export const search = async (query: string) => {
  return prisma.recipe.findMany({
    where: {
      title: { contains: query, mode: "insensitive" },
    },
  });
};

export const saveFavorite = async (userId: string, recipe: { id: string }) => {
  await prisma.favorite.create({
    data: {
      userId,
      recipeId: recipe.id,
    },
  });
};

export const getFavoritesByUser = async (userId: string) => {
  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: { recipe: true },
  });
  return favorites.map((fav) => fav.recipe);
};
