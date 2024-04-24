import { Roboto, Silkscreen, PT_Mono, Montserrat } from "next/font/google";

export const silkscreen_init = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const roboto_init = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const PT_Mono_init = PT_Mono({
  subsets: ["latin"],
  variable: "--font-ptmono",
  weight: ["400"],
});

export const montserrat_init = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const silkscreen = silkscreen_init.variable;
export const roboto = roboto_init.variable;
export const ptmono = PT_Mono_init.variable;
export const montserrat = montserrat_init.variable;
