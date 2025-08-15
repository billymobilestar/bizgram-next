// app/layout.jsx
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = { title: "BizGram" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
