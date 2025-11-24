"use client";

type KeyButtonProps = {
  label: string;
  onPress: (value: string) => void;
};

export function KeyButton({ label, onPress }: KeyButtonProps) {
  return (
    <button
      onClick={() => onPress(label)}
      className="bg-gray-700 text-white p-4 rounded text-xl hover:bg-gray-600 transition flex items-center justify-center"
    >
      {label}
    </button>
  );
}
