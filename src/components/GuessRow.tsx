// GuessRow.tsx
"use client";

type GuessRowProps = {
  value: string;
  maxLength: number;
};

export function GuessRow({ value, maxLength }: GuessRowProps) {
  const cells = [];

  for (let i = 0; i < maxLength; i++) {
    cells.push(
      <div
        key={i}
        className="w-12 h-12 border border-gray-500 rounded flex items-center justify-center text-2xl font-bold bg-gray-800 text-white"
      >
        {value[i] ?? ""}
      </div>
    );
  }

  return (
    <div className="flex gap-2 my-4">
      {cells}
    </div>
  );
}
