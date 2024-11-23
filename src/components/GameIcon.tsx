import { GiAnarchy } from "react-icons/gi";
import { GiAbstract047 } from "react-icons/gi";
import { GiAbstract018 } from "react-icons/gi";
import { GiAcid } from "react-icons/gi";
import { GiAcorn } from "react-icons/gi";
import { GiAlienStare } from "react-icons/gi";
import { GiAllSeeingEye } from "react-icons/gi";
import { GiAnglerFish } from "react-icons/gi";
import { GiAnvil } from "react-icons/gi";
import { GiAquarium } from "react-icons/gi";
import { GiBalloonDog } from "react-icons/gi";
import { GiBandit } from "react-icons/gi";
import { GiBeachBag } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { GiBubblingFlask } from "react-icons/gi";
import { GiChiliPepper } from "react-icons/gi";
import { GiWyvern } from "react-icons/gi";

export default function GameIcon({
  className,
  iconNum,
}: {
  className?: string;
  iconNum: number;
}) {
  const classes = `${className}`;

  const iconArr = [
    <GiAnarchy className={classes} />,
    <GiAbstract047 className={classes} />,
    <GiAbstract018 className={classes} />,
    <GiAcid className={classes} />,
    <GiAcorn className={classes} />,
    <GiAlienStare className={classes} />,
    <GiAllSeeingEye className={classes} />,
    <GiAnglerFish className={classes} />,
    <GiAnvil className={classes} />,
    <GiAquarium className={classes} />,
    <GiBalloonDog className={classes} />,
    <GiBandit className={classes} />,
    <GiBeachBag className={classes} />,
    <GiBiceps className={classes} />,
    <GiBubblingFlask className={classes} />,
    <GiChiliPepper className={classes} />,
    <GiWyvern className={classes} />,
    <GiWyvern className={classes} />,
  ];

  return iconArr[iconNum];
}
