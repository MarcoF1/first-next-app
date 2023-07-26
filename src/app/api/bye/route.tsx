import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest): Promise<NextResponse> {
  // res.status(200).json({ message: "bye" });
  return NextResponse.json({ message: "bye" });
}
