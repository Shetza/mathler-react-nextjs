import { NextRequest, NextResponse } from "next/server";
import { evaluateGuess } from "@/domain/evaluator";

const solutionOfTheDay = "11+2=3"; // provisoire, peut être dynamique plus tard

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const guess = data.guess as string;

    const result = evaluateGuess(guess, solutionOfTheDay);

    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
