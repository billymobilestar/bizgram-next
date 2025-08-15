// app/components/Header.jsx
"use client";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
// ...existing imports

export default function Header() {
  // ...existing state/effects/UI
  return (
    <div className="sticky top-0 ...">
      {/* ...left side */}
      <div className="flex items-center gap-2">
        {/* messages/create profile buttons can stay */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-2xl border px-3 py-2 text-sm hover:bg-neutral-50">Log in</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="rounded-2xl border bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">Sign up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
}
