"use client";

import { useState, useEffect } from "react";
import { GuessRow } from "./GuessRow";
import { Keypad } from "./Keypad";

export function GameBoard() {
  const maxLength = 6;
  const [currentGuess, setCurrentGuess] = useState("");
  const [solution, setSolution] = useState<string | null>(null);

  // Récupère la solution depuis l'API
  useEffect(() => {
    fetch("/api/solution")
      .then(res => res.json())
      .then(data => setSolution(data.solution));
  }, []);

  async function handleKeyPress(key: string) {
    if (!solution) return; // attendre la solution

    if (key === "⌫") {
      setCurrentGuess(prev => prev.slice(0, -1));
      return;
    }

    if (key === "OK") {
      // Appel API pour validation
      try {
        const res = await fetch("/api/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guess: currentGuess })
        });
        const data = await res.json();
        console.log("Eval result:", data.result);
      } catch (err) {
        console.error(err);
      }
      return;
    }

    if (currentGuess.length < maxLength) {
      setCurrentGuess(prev => prev + key);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <GuessRow value={currentGuess} maxLength={maxLength} />
      <Keypad onKeyPress={handleKeyPress} />
    </div>
  );
}
