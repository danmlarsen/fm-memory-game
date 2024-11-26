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
import { GiRadioactive } from "react-icons/gi";

export default function GameIcon({
  className,
  iconNum,
}: {
  className?: string;
  iconNum: number;
}) {
  const classes = `${className}`;

  const iconArr = [
    <GiAnarchy className={classes} aria-label="Anarchy" />,
    <GiAbstract047 className={classes} aria-label="Snowflake" />,
    <GiAbstract018 className={classes} aria-label="Mech" />,
    <GiAcid className={classes} aria-label="Acid" />,
    <GiAcorn className={classes} aria-label="Acorn" />,
    <GiAlienStare className={classes} aria-label="Alien" />,
    <GiAllSeeingEye className={classes} aria-label="Eye" />,
    <GiAnglerFish className={classes} aria-label="Fish" />,
    <GiAnvil className={classes} aria-label="Anvil" />,
    <GiAquarium className={classes} aria-label="Aquarium" />,
    <GiBalloonDog className={classes} aria-label="Balloon Dog" />,
    <GiBandit className={classes} aria-label="Bandit" />,
    <GiBeachBag className={classes} aria-label="Bag" />,
    <GiBiceps className={classes} aria-label="Biceps" />,
    <GiBubblingFlask className={classes} aria-label="Flask" />,
    <GiChiliPepper className={classes} aria-label="Chili" />,
    <GiWyvern className={classes} aria-label="Dragon" />,
    <GiRadioactive className={classes} aria-label="Radioactive" />,
  ];

  return iconArr[iconNum];
}
