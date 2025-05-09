import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

//Give me a long better description of the app
export const metadata: Metadata = {
  title: "Sommaire - AI-Powered PDF Summarizer",
  description:
    "Sommaire is an app for summarizing PDF. Using AI, it can extract the most important information from a document and present it in a concise format. This makes it easier to understand the main points of a document without having to read through the entire thing. Sommaire is perfect for students, professionals, and anyone who needs to quickly digest large amounts of information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            className="bg-amber-300 "
            toastOptions={{
              classNames: {
                description: "text-sm text-gray-900",
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
