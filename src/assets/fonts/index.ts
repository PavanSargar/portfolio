import { Fira_Code, Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const firaCode = Fira_Code({ subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
