import { evaluateGuess } from "@/domain/evaluator";

describe("evaluateGuess", () => {
  test("returns all correct when guess matches solution", () => {
    const result = evaluateGuess("1+2=3", "1+2=3");
    expect(result).toEqual(["correct","correct","correct","correct","correct"]);
  });

  test("marks correct and present letters", () => {
    const result = evaluateGuess("1+4=5", "1+2=3");
    expect(result).toEqual([
      "correct",  // 1
      "correct",  // +
      "absent",   // 3
      "correct",  // =
      "absent",   // 2
    ]);
  });

  test("handles duplicate characters properly", () => {
    const result = evaluateGuess("11+22", "12+12");
    expect(result).toEqual([
      "correct",
      "present",
      "correct",
      "present",
      "correct"
    ]);
  });

  test("throws error if lengths differ", () => {
    expect(() => evaluateGuess("1+2", "1+2=3")).toThrow();
  });
});
