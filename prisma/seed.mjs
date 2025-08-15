import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const ava = await prisma.user.upsert({
    where: { email: "ava@demo.com" },
    update: {},
    create: {
      email: "ava@demo.com",
      name: "Ava Nguyen",
      profile: {
        create: {
          handle: "@ava.designs",
          profession: "Graphic Designer",
          city: "Vancouver",
          region: "BC",
          country: "Canada",
          rating: 4.8,
          availability: "Open to work",
          avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
          bannerUrl: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
          tags: ["Brand Identity","Packaging","Posters"],
          posts: {
            create: [
              { imageUrl: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a12?q=80&w=1000&auto=format&fit=crop", caption: "Brand identity exploration — serif vs sans ✨ #branding" }
            ]
          }
        }
      }
    }
  });

  const jas = await prisma.user.upsert({
    where: { email: "jas@demo.com" },
    update: {},
    create: {
      email: "jas@demo.com",
      name: "Jaspreet Singh",
      profile: {
        create: {
          handle: "@jas.mov",
          profession: "Videographer",
          city: "Surrey",
          region: "BC",
          country: "Canada",
          rating: 4.6,
          availability: "Booking next month",
          avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
          bannerUrl: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1600&auto=format&fit=crop",
          tags: ["Product","Docu","Reels"],
          posts: {
            create: [
              { imageUrl: "https://images.unsplash.com/photo-1526178612403-cf54a3cdf400?q=80&w=1000&auto=format&fit=crop", caption: "Product reel BTS for a coffee brand ☕️ #product #reels" }
            ]
          }
        }
      }
    }
  });

  console.log("Seeded:", { ava: ava.id, jas: jas.id });
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });