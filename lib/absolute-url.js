// lib/absolute-url.js
import { headers } from "next/headers";

/** Build an absolute URL to this deployment (works local + Vercel) */
export function absoluteUrl(path = "") {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${proto}://${host}${p}`;
}
