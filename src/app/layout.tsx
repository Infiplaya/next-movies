import "./globals.css";

import { Montserrat } from "@next/font/google";
import { Sidebar } from "./Sidebar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900 text-slate-100">
        <section className="flex gap-5">
          <Sidebar />
          {children}
        </section>
      </body>
    </html>
  );
}
