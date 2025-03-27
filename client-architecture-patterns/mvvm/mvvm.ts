// Model

export interface Recipe {
  id: number;
  title: string;
  description: string;
}

export class RecipeModel {
  async fetchAll(): Promise<Recipe[]> {
    return fetch("/api/recipes").then((res) => res.json());
  }

  async add(title: string, description: string): Promise<Recipe> {
    return fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    }).then((res) => res.json());
  }
}

// ViewModel

import { useState, useEffect } from "react";
import { Recipe, RecipeModel } from "model/RecipeModel";

export function useRecipeViewModel() {
  const model = new RecipeModel();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRecipes = async () => {
    setLoading(true);
    try {
      const data = await model.fetchAll();
      setRecipes(data);
    } catch {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const addRecipe = async (title: string, description: string) => {
    try {
      await model.add(title, description);
      await loadRecipes();
    } catch {
      setError("Failed to add recipe");
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
    addRecipe,
  };
}

// View

import React, { useState } from "react";
import { useRecipeViewModel } from "viewmodel/useRecipeViewModel";

export const RecipeView: React.FC = () => {
  const { recipes, loading, error, addRecipe } = useRecipeViewModel();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addRecipe(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Recipes</h1>

      <form onSubmit={handleAdd}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button>Add</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <strong>{r.title}</strong>: {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
