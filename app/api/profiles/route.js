import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {            // <-- must be GET
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const profession = searchParams.get("profession");
  const city = searchParams.get("city");
  const minRating = Number(searchParams.get("minRating") || 0);
  const availableOnly = searchParams.get("availableOnly") === "true";

  const where = {
    AND: [
      q ? {
        OR: [
          { handle: { contains: q, mode: "insensitive" } },
          { profession: { contains: q, mode: "insensitive" } },
          { city: { contains: q, mode: "insensitive" } },
          { country: { contains: q, mode: "insensitive" } },
          { tags: { hasSome: q.toLowerCase().split(/\s+/).filter(Boolean) } },
        ]
      } : {},
      profession ? { profession } : {},
      city ? { city } : {},
      minRating ? { rating: { gte: minRating } } : {},
      availableOnly ? { availability: { contains: "open", mode: "insensitive" } } : {},
    ],
  };

  const profiles = await prisma.profile.findMany({ where, orderBy: [{ rating: "desc" }], take: 50 });
  return NextResponse.json({ profiles });
}
