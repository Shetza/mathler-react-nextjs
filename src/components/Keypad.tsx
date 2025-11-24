"use client";

import { KeyButton } from "./KeyButton";

type KeypadProps = {
  onKeyPress: (key: string) => void;
};

export function Keypad({ onKeyPress }: KeypadProps) {
  const keys = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","=","⌫","OK"];

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {keys.map(k => (
        <KeyButton key={k} label={k} onPress={onKeyPress} />
      ))}
    </div>
  );
}
