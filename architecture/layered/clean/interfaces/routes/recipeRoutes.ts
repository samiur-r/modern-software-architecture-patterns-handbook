import { Router } from "express";
import {
  handleSearch,
  handleAddFavorite,
  handleGetFavorites,
} from "../controllers/recipeController";

const router = Router();

router.get("/recipes/search", handleSearch);
router.post("/recipes/favorite", handleAddFavorite);
router.get("/recipes/favorites", handleGetFavorites);

export default router;
