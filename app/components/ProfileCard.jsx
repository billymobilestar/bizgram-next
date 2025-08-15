"use client";
import Image from "next/image";
import Link from "next/link";
import { Users, Star, Briefcase, Globe2 } from "lucide-react";

export default function ProfileCard({ profile }) {
  const slug = profile.handle.replace("@", "");
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="h-28 w-full bg-neutral-100" />
      <div className="-mt-8 px-4">
        <Image src={profile.avatarUrl} alt={profile.handle} width={64} height={64} className="h-16 w-16 rounded-2xl border-4 border-white object-cover shadow -mb-2" />
      </div>
      <div className="px-4 pb-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{profile.handle}</div>
            <div className="text-xs text-neutral-500">{profile.profession}</div>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <div className="flex items-center gap-1"><Users size={14}/> {new Intl.NumberFormat().format(3000)}</div>
            <div className="flex items-center gap-1"><Star size={14}/> {profile.rating}</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1"><Briefcase size={12}/> {profile.profession}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1"><Globe2 size={12}/> {profile.city}, {profile.region}</span>
          {profile.tags.map((t) => (<span key={t} className="rounded-full bg-neutral-100 px-2 py-1">#{t}</span>))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-emerald-700">{profile.availability}</span>
          <Link href={`/p/${slug}`} className="rounded-xl border px-3 py-1.5 text-xs font-medium hover:bg-neutral-50">View</Link>
        </div>
      </div>
    </div>
  );
}