import { readdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const directory = path.join(process.cwd(), "public", "works");

    const files = await readdir(directory);

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file))
      .map((file) => `/works/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading works folder:", error);

    return NextResponse.json(
      { error: "Could not load images", images: [] },
      { status: 500 }
    );
  }
}