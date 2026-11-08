import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
export const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
