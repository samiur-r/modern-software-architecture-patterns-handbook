// model/RecipeModel.ts

export interface Recipe {
  id: number;
  title: string;
  description: string;
}

export class RecipeModel {
  async getAll(q?: string): Promise<Recipe[]> {
    const res = await fetch(`/api/recipes${q ? `?q=${q}` : ""}`);
    return res.json();
  }

  async add(title: string, description: string): Promise<Recipe> {
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    return res.json();
  }
}

// presenter/RecipePresenter.ts

import { RecipeModel, Recipe } from "model/RecipeModel";

export interface RecipeViewInterface {
  displayRecipes(recipes: Recipe[]): void;
  clearForm(): void;
  showError(message: string): void;
}

export class RecipePresenter {
  constructor(private view: RecipeViewInterface, private model: RecipeModel) {}

  async loadRecipes(query?: string) {
    try {
      const recipes = await this.model.getAll(query);
      this.view.displayRecipes(recipes);
    } catch {
      this.view.showError("Failed to load recipes");
    }
  }

  async addRecipe(title: string, description: string) {
    if (!title || !description)
      return this.view.showError("All fields required");
    try {
      await this.model.add(title, description);
      this.view.clearForm();
      this.loadRecipes(); // refresh
    } catch {
      this.view.showError("Failed to add recipe");
    }
  }
}

// view/RecipeView.tsx

import React, { useState, useEffect } from "react";
import { RecipeModel, Recipe } from "model/RecipeModel";
import { RecipePresenter } from "presenter/RecipePresenter";

export const RecipeView: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const presenter = new RecipePresenter(
    {
      displayRecipes: setRecipes,
      clearForm: () => {
        setTitle("");
        setDescription("");
        setError("");
      },
      showError: setError,
    },
    new RecipeModel()
  );

  useEffect(() => {
    presenter.loadRecipes();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    presenter.loadRecipes(query);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    presenter.addRecipe(title, description);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🍽️ Recipe Finder</h1>

      <form onSubmit={handleSearch}>
        <input
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <form onSubmit={handleAdd} style={{ marginTop: 20 }}>
        <input
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>Add Recipe</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ marginTop: 30 }}>
        {recipes.map((r) => (
          <li key={r.id}>
            <strong>{r.title}</strong>: {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

// App.tsx

import React from "react";
import { RecipeView } from "./view/RecipeView";

function App() {
  return <RecipeView />;
}

export default App;
