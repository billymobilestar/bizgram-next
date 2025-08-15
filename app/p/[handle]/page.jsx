import Image from "next/image";
import { absoluteUrl } from "@/lib/absolute-url";

async function getProfile(handle) {
  const url = absoluteUrl(`/api/profiles?q=${encodeURIComponent("@"+handle)}`);
  const r = await fetch(url, { cache: "no-store" });
  const { profiles } = await r.json();
  return profiles[0] || null;
}

export default async function ProfilePage({ params }) {
  const profile = await getProfile(params.handle);
  if (!profile) return <div className="p-8">Profile not found.</div>;
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="px-6 py-6 flex items-center gap-4">
          <Image src={profile.avatarUrl} width={96} height={96} alt={profile.handle} className="h-24 w-24 rounded-2xl object-cover shadow" />
          <div>
            <div className="text-xl font-semibold">{profile.handle}</div>
            <div className="text-sm text-neutral-500">{profile.profession}</div>
            <div className="mt-2 text-xs">{profile.city}, {profile.region}, {profile.country}</div>
          </div>
        </div>
      </div>
    </div>
  );
}