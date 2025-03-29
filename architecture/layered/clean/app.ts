import express from "express";
import recipeRoutes from "interfaces/routes/recipeRoutes";

const app = express();
app.use(express.json());
app.use("/api", recipeRoutes);

export default app;
