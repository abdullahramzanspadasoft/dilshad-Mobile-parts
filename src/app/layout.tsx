import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop Management",
  description: "Inventory, sales, customer khata, and shop management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
