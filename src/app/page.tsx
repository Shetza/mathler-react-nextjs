import { GameBoard } from "@/components/GameBoardV4";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mathler Clone</h1>
      <GameBoard />
    </div>
  );
}
