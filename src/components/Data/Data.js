import Link from "next/link";
import neuefischeImage from "public/images/neuefischeImage.png";
import ventilImage from "public/images/ventilImage.png";
import secImage from "public/images/secImage.jpg";
import calculatorsImage from "public/images/calculatorsImage.png";
import FSOldVersionImage from "public/images/FSOldVersionImage.png";
import backgroundImage from "public/images/smallBackground.jpeg";
import capstoneImage from "public/images/capstoneImage.png";
import reduxShopImage from "public/images/reduxShop.png";
import sec2 from "public/images/SEC-2.png";
import nextauth from "public/images/nextauth.png";

export const projectData = [
  {
    id: 10,
    backgroundImage: nextauth,
    title: "NEXT.js 13.4 + NextAuth.js 4.2",
    time: "6/2023",
    description: (
      <Link target="_blank" href="https://next13-nextauth.vercel.app">
        NextAuth server and client side
      </Link>
    ),
  },
  {
    id: 9,
    backgroundImage: sec2,
    title: "Siyli endurance coaching",
    time: "5/2023",
    description: (
      <Link target="_blank" href="https://siyli-endurance-coaching.com">
        A React project
      </Link>
    ),
  },
  {
    id: 8,
    backgroundImage: reduxShopImage,
    title: "Redux Shop",
    time: "5/2023",
    description: (
      <Link target="_blank" href="https://cra-redux-shop.vercel.app">
        Fake Shop build with React, RTK and RTK Query
      </Link>
    ),
  },
  {
    id: 7,
    backgroundImage: capstoneImage,
    title: "Triathlon App",
    time: "3/4/2023-3/5/2023",
    description: (
      <Link
        target="_blank"
        href="https://github.com/FrankSiyli/capstone_triathlon_app"
      >
        my Capstone-Project at neueFische
      </Link>
    ),
  },
  {
    id: 6,
    backgroundImage: backgroundImage,
    title: "frank-siyli.com",
    time: "3/2023",
    description: "First one with React & NEXT",
  },
  {
    id: 1,
    backgroundImage: neuefischeImage,
    title: "Web Development Bootcamp",
    time: "2/2023 - 5/2023",
    description: (
      <Link target="_blank" href="https://www.neuefische.de">
        https://www.neuefische.de
      </Link>
    ),
  },
  {
    id: 2,
    backgroundImage: calculatorsImage,
    title: "autodidact",
    time: "2/2023",
    description: (
      <Link
        target="_blank"
        href="https://github.com/FrankSiyli/siyli-endurance-coaching.com/blob/main/calc.js"
      >
        https://Endurance-calculators-with-Javascript
      </Link>
    ),
  },
  {
    id: 3,
    backgroundImage: FSOldVersionImage,
    title: "autodidact (old version with HTML and CSS)",
    time: "1/2023",
    description: (
      <Link
        target="_blank"
        href="https://github.com/FrankSiyli/Frank-Siyli.com"
      >
        https://frank-siyli-old-version.com
      </Link>
    ),
  },
  {
    id: 4,
    backgroundImage: secImage,
    title: "autodidact (old version with HTML and CSS)",
    time: "1/2023",
    description: (
      <Link
        target="_blank"
        href="https://github.com/FrankSiyli/siyli-endurance-coaching.com"
      >
        siyli-endurance-coaching.com
      </Link>
    ),
  },
  {
    id: 5,
    backgroundImage: ventilImage,
    title: "17 years in the automotive industry",
    time: "2005 - 2022",
  },
];
