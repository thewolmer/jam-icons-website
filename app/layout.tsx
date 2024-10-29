import "./globals.css";
import { Grotesk, dm } from "@/components/fonts";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { generateSeo } from "@/utils/generateSeo";

export const generateMetadata = () =>
  generateSeo({
    title: "Jam Icons React",
    description: "Jam icons for react. npm install @wolmer/jam-icons",
    url: "/",
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(dm.variable, "relative")}>
        <NavBar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
