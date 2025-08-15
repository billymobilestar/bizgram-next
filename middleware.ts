// middleware.ts
export { default as authMiddleware } from "@clerk/nextjs/server";
export const config = { matcher: ["/profile/:path*", "/api/posts/like"] };
