import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Data = {
  message: string;
};

export async function GET(req: NextApiRequest): Promise<NextResponse<Data>> {
  // res.status(200).json({ message: "bye" });
  return NextResponse.json({ message: "bye bye" });
}
