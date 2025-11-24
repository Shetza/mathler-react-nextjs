"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type SolutionContextType = { solution: string | null };
const SolutionContext = createContext<SolutionContextType>({ solution: null });

export function SolutionProvider({ children }: { children: ReactNode }) {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/solution")
      .then(res => res.json())
      .then(data => setSolution(data.solution));
  }, []);

  return (
    <SolutionContext.Provider value={{ solution }}>
      {children}
    </SolutionContext.Provider>
  );
}

export const useSolution = () => useContext(SolutionContext);
