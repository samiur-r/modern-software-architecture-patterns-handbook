import express from "express";
import { registerUser } from "@/application/user/user.service";
import { prismaUserRepository } from "@/infrastructure/prisma/user.prisma";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await registerUser(req.body, prismaUserRepository);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
