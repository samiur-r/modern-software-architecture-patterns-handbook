import express from "express";
import { errorHandler } from "@/shared/middlewares/errorHandler";
import { env } from "@/config/env";
import { userRoutes } from "@/features/user";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use(errorHandler); // should be last

app.listen(env.PORT, () =>
  console.log(`🚀 Server running at http://localhost:${env.PORT}`)
);
