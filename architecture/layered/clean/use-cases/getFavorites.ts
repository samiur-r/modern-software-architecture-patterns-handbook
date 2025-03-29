type Dependencies = {
  getFavoritesByUser: (userId: string) => Promise<Recipe[]>;
};

export const getFavorites =
  ({ getFavoritesByUser }: Dependencies) =>
  async (userId: string) => {
    return await getFavoritesByUser(userId);
  };
