export type LetterStatus = "correct" | "present" | "absent";

export function evaluateGuess(guess: string, solution: string): LetterStatus[] {
  if (guess.length !== solution.length) {
    throw new Error("Guess and solution must have the same length");
  }

  const result: LetterStatus[] = Array(guess.length).fill("absent");

  // Marquage des lettres correctes
  const solutionChars = solution.split("");
  const used = Array(solution.length).fill(false);

  // 1) Check des exact matches
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === solution[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }

  // 2) Check des lettres présentes mais mal placées
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "correct") continue;

    for (let j = 0; j < solution.length; j++) {
      if (!used[j] && guess[i] === solution[j]) {
        result[i] = "present";
        used[j] = true;
        break;
      }
    }
  }

  return result;
}
