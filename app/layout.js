// app/layout.jsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const metadata = { title: "BizGram" };

export default function RootLayout({ children }) {
  const app = <html lang="en"><body>{children}</body></html>;
  // If no key (e.g., local or misconfigured env), render app without Clerk
  if (!pk) return app;
  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey={pk}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
