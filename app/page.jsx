// app/page.jsx
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import { absoluteUrl } from "@/lib/absolute-url";

async function getProfiles() {
  const r = await fetch(absoluteUrl("/api/profiles"), { cache: "no-store" });
  const { profiles } = await r.json();
  return profiles;
}

export default async function Page() {
  const profiles = await getProfiles();
  return (
    <div>
      <Header />
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6 lg:px-8">
        <main className="col-span-12 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {profiles.map((p) => (<ProfileCard key={p.id} profile={p} />))}
          </div>
        </main>
      </div>
    </div>
  );
}
