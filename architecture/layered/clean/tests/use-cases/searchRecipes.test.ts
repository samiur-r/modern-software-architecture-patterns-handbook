import { searchRecipes } from "use-cases/searchRecipes";

test("searches for recipes", async () => {
  const search = jest
    .fn()
    .mockResolvedValue([{ id: "r1", title: "Pasta", ingredients: [] }]);
  const useCase = searchRecipes({ search });

  const result = await useCase("pasta");
  expect(result).toHaveLength(1);
  expect(search).toHaveBeenCalledWith("pasta");
});
