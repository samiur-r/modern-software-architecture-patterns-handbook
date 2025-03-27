// model/CurrencyModel.ts

export class CurrencyModel {
  async fetchRate(from: string, to: string): Promise<number> {
    const mockRates = {
      USD: { EUR: 0.91, INR: 83 },
      EUR: { USD: 1.1, INR: 90 },
      INR: { USD: 0.012, EUR: 0.011 },
    };
    return mockRates[from][to] || 1;
  }
}

// viewmodel/useCurrencyViewModel.ts

import { useState } from "react";
import { CurrencyModel } from "model/CurrencyModel";

export function useCurrencyViewModel() {
  const model = new CurrencyModel();

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const convert = async () => {
    try {
      const rate = await model.fetchRate(fromCurrency, toCurrency);
      setResult(amount * rate);
      setError("");
    } catch {
      setError("Failed to fetch rate");
    }
  };

  return {
    fromCurrency,
    toCurrency,
    amount,
    result,
    error,
    setFromCurrency,
    setToCurrency,
    setAmount,
    convert,
  };
}

// view/CurrencyConverterView.tsx

import React from "react";
import { useCurrencyViewModel } from "viewmodel/useCurrencyViewModel";

interface Props {
  onGoBack: () => void;
}

export const CurrencyConverterView: React.FC<Props> = ({ onGoBack }) => {
  const {
    fromCurrency,
    toCurrency,
    amount,
    result,
    error,
    setFromCurrency,
    setToCurrency,
    setAmount,
    convert,
  } = useCurrencyViewModel();

  return (
    <div style={{ padding: 20 }}>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>INR</option>
      </select>

      <span> ➡ </span>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>INR</option>
      </select>

      <button onClick={convert}>Convert</button>
      <button onClick={onGoBack} style={{ marginLeft: "10px" }}>
        Go Back
      </button>

      {result !== null && (
        <p>
          Result: {result.toFixed(2)} {toCurrency}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

// coordinator/AppCoordinator.tsx

import React, { useState } from "react";
import { HomeView } from "../view/HomeView";
import { CurrencyConverterView } from "../view/CurrencyConverterView";

type Screen = "home" | "converter";

export const AppCoordinator: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("home");

  switch (screen) {
    case "home":
      return <HomeView onStart={() => setScreen("converter")} />;
    case "converter":
      return <CurrencyConverterView onGoBack={() => setScreen("home")} />;
    default:
      return null;
  }
};

// App.tsx

import React from "react";
import { AppCoordinator } from "./coordinator/AppCoordinator";

function App() {
  return <AppCoordinator />;
}

export default App;
