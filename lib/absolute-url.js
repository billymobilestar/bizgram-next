// lib/absolute-url.js
import { headers } from "next/headers";

/** Build an absolute URL to this deployment (works local + on Vercel) */
export async function absoluteUrl(path = "") {
  const h = await headers();                // <-- await now
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${proto}://${host}${p}`;
}
