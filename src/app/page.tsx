import { GameBoard } from "@/components/GameBoardV3";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Mathler Clone</h1>
      <GameBoard />
    </main>
  );
}
