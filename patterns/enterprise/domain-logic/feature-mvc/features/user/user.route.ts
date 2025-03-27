import express from "express";
import {
  registerUserController,
  getUserByEmailController,
} from "./user.controller";

const router = express.Router();

router.post("/", registerUserController);
router.get("/:email", getUserByEmailController);

export default router;
