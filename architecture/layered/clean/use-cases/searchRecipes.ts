type Dependencies = {
  search: (query: string) => Promise<Recipe[]>;
};

export const searchRecipes =
  ({ search }: Dependencies) =>
  async (query: string) => {
    if (!query) throw new Error("Search query required");
    return await search(query);
  };
