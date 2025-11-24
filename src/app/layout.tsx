import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mathler Clone",
  description: "Jeu de calcul mental style Mathler",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white min-h-screen">
        <header className="p-4 bg-gray-800 flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/rules" className="hover:underline">Rules</Link>
          <Link href="/history" className="hover:underline">History</Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
