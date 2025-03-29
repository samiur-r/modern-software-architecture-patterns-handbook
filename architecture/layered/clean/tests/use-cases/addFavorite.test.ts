import { addFavorite } from "use-cases/addFavorite";

test("adds favorite successfully", async () => {
  const saveFavorite = jest.fn();
  const useCase = addFavorite({ saveFavorite });

  await useCase("user-1", { id: "r1", title: "Pasta", ingredients: [] });
  expect(saveFavorite).toHaveBeenCalledWith("user-1", {
    id: "r1",
    title: "Pasta",
    ingredients: [],
  });
});
