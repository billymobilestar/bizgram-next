// app/api/posts/like/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId: clerkId } = auth();
  if (!clerkId) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const { postId } = await req.json();

  // Ensure we have a Prisma user for this Clerk user
  const user = await prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId, email: `${clerkId}@example.local` }, // replace with real email later
  });

  await prisma.like.upsert({
    where: { postId_userId: { postId, userId: user.id } },
    update: {},
    create: { postId, userId: user.id },
  });

  const likes = await prisma.like.count({ where: { postId } });
  return NextResponse.json({ ok: true, likes });
}
