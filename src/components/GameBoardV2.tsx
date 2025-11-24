// GameBoard.tsx
"use client";

import { useState } from "react";
import { GuessRow } from "@/components/GuessRow";
import { Keypad } from "@/components/Keypad";
import { evaluateGuess } from "@/domain/evaluator";


export function GameBoard() {
  const maxLength = 6;

  const [currentGuess, setCurrentGuess] = useState("");

  function handleKeyPress(key: string) {
    if (key === "⌫") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "OK") {
      const solution = "1+2=3"; // provisoire
      const r = evaluateGuess(currentGuess, solution);
      console.log("Eval:", r);
      return;
    }

    // Ajouter nouvelle touche (si pas trop long)
    if (currentGuess.length < maxLength) {
      setCurrentGuess((prev) => prev + key);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <GuessRow value={currentGuess} maxLength={maxLength} />
      <Keypad onKeyPress={handleKeyPress} />
    </div>
  );
}
