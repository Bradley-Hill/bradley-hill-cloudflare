import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/i18nProvider";
import Navbar from "./components/nav/Navbar";

export const metadata: Metadata = {
  title: "Bradley Hill",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
