import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dm = DM_Sans({
  subsets: ["latin"],
  display: "auto",
  weight: ["400", "600", "800"],
  variable: "--font-dm",
});

export const Grotesk = localFont({
  src: "./local/BDOGrotesk.woff2",
  variable: "--font-grotesk",
});
