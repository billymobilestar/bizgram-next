// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();  // default export, not a named export

// Protect only what you need (example)
export const config = {
  matcher: ["/profile/:path*", "/api/posts/like"],
};
