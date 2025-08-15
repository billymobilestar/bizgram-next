// app/api/profile/route.js
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId: clerkId } = auth();
  if (!clerkId) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const body = await req.json();
  const { handle, profession, city, region, country, avatarUrl } = body;

  // ensure user exists
  const user = await prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId, email: `${clerkId}@example.local` },
  });

  // create or update profile
  const profile = await prisma.profile.upsert({
    where: { userId: user.id },
    update: { handle, profession, city, region, country, avatarUrl },
    create: { userId: user.id, handle, profession, city, region, country, avatarUrl },
  });

  return NextResponse.json({ ok: true, profile });
}
