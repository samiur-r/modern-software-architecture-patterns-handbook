import express from "express";
import { PrismaUserRepository } from "infrastructure/prisma/PrismaUserRepository";
import { UserService } from "application/user/UserService";

const router = express.Router();
const userRepo = new PrismaUserRepository();
const userService = new UserService(userRepo);

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await userService.registerUser(name, email);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
