import { NextRequest, NextResponse } from "next/server";

const solutionOfTheDay = "11+2=3"; // provisoire, peut être dynamique plus tard

export async function GET(req: NextRequest) {
  return NextResponse.json({ solution: solutionOfTheDay });
}
