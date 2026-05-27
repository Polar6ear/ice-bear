import {
  Bagel_Fat_One,
  Bowlby_One_SC,
  Caveat,
  Chango,
  Fredoka,
  Lilita_One,
  Nunito,
  Paytone_One,
  Sniglet,
  Space_Mono,
} from "next/font/google";

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
  display: "swap",
});

export const bagel = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bagel",
  display: "swap",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const paytone = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-paytone",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const sniglet = Sniglet({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-sniglet",
  display: "swap",
});

export const chango = Chango({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chango",
  display: "swap",
});

export const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bowlby",
  display: "swap",
});

export const fontVariables = [
  fredoka.variable,
  lilita.variable,
  bagel.variable,
  spaceMono.variable,
  caveat.variable,
  paytone.variable,
  nunito.variable,
  sniglet.variable,
  chango.variable,
  bowlby.variable,
].join(" ");
