"use client";

import { useState } from "react";
import { GuessRow } from "./GuessRow";
import { Keypad } from "./Keypad";
import { useSolution } from "@/context/SolutionContext";
import { evaluateGuess } from "@/domain/evaluator";

export function GameBoard() {
  const maxLength = 6;
  const { solution } = useSolution();
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [results, setResults] = useState<string[][]>([]);

  function handleKeyPress(key: string) {
    if (!solution) return;

    if (key === "⌫") {
      setCurrentGuess(prev => prev.slice(0, -1));
      return;
    }

    if (key === "OK") {
      if (currentGuess.length !== maxLength) return;

      const r = evaluateGuess(currentGuess, solution);
      setGuesses(prev => [...prev, currentGuess]);
      setResults(prev => [...prev, r]);
      setCurrentGuess("");
      return;
    }

    if (currentGuess.length < maxLength) {
      setCurrentGuess(prev => prev + key);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {guesses.map((guess, i) => (
        <div key={i}>
          <GuessRow value={guess} maxLength={maxLength} />
          <div className="flex gap-2 mb-2">
            {results[i].map((status, j) => (
              <div
                key={j}
                className={`w-6 h-6 rounded ${
                  status === "correct" ? "bg-green-600" :
                  status === "present" ? "bg-yellow-500" :
                  "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      ))}

      <GuessRow value={currentGuess} maxLength={maxLength} />
      <Keypad onKeyPress={handleKeyPress} />
    </div>
  );
}
