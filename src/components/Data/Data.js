import Link from "next/link";
import neuefischeImage from "public/images/neuefischeImage.png";
import ventilImage from "public/images/ventilImage.png";
import secImage from "public/images/secImage.jpg";
import calculatorsImage from "public/images/calculatorsImage.png";
import FSOldVersionImage from "public/images/FSOldVersionImage.png";

export const projectData = [
  {
    id: 1,
    backgroundImage: neuefischeImage,
    title: "Web Development Bootcamp",
    time: "2/2023 - 5/2023",
    description: (
      <Link arget="_blank" href="www.neuefische.de">
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
        arget="_blank"
        href="https://siyli-endurance-coaching.com/calc.html"
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
      <Link arget="_blank" href="https://github.com/FrankSiyli/Frank-Siyli.com">
        https://frank-siyli-old-version.com
      </Link>
    ),
  },
  {
    id: 4,
    backgroundImage: secImage,
    title: "autodidact",
    time: "1/2023",
    description: (
      <Link arget="_blank" href="https://siyli-endurance-coaching.com">
        https://siyli-endurance-coaching.com
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
