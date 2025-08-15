import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { profile: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  return NextResponse.json({ posts });
}