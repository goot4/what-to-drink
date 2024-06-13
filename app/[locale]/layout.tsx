import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MainNav from "@/components/mainNav";
import { getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Can be imported from a shared config
const locales = ['cn', 'en'];
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale:string}
}>) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className={"mx-auto md:w-1/2"}>
            <MainNav/>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
