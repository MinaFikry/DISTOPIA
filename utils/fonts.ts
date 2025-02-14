import { Squada_One, Junge } from "next/font/google";

const SquadaOne = Squada_One({
  variable: "--font-Squada_One",
  weight: ["400"],
  subsets: ["latin"],
});

const Junge_Font = Junge({
  variable: "--font-Junge",
  weight: ["400"],
  subsets: ["latin"],
});

export const SquadaOneFont = SquadaOne.className;
export const JungeFont = Junge_Font.className;
