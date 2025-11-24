"use client";

type GuessRowProps = {
  value: string;
  maxLength: number;
};

export function GuessRow({ value, maxLength }: GuessRowProps) {
  const cells = Array.from({ length: maxLength }, (_, i) => (
    <div
      key={i}
      className="w-12 h-12 border border-gray-500 rounded flex items-center justify-center text-2xl font-bold bg-gray-800 text-white"
    >
      {value[i] ?? ""}
    </div>
  ));

  return <div className="flex gap-2 my-2">{cells}</div>;
}
