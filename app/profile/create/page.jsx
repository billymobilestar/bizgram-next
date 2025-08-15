"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProfilePage() {
  const [handle, setHandle] = useState("@mybrand");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const r = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ handle, profession, city, region, country, avatarUrl }),
    });
    if (!r.ok) { alert("Save failed"); return; }
    const { profile } = await r.json();
    router.push(`/p/${profile.handle.replace("@", "")}`);
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      {/* form fields ... */}
      <form onSubmit={onSubmit} className="space-y-3">{/* inputs */}</form>
    </div>
  );
}
