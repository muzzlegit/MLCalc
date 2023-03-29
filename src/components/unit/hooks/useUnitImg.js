import { useState, useEffect } from "react";
import PropTypes from "prop-types";
//IMAGES
import UndeadUnitsCard from "../img/UndeadCards.png";
import DemonUnitsCard from "../img/DemonCards.png";
import DrowUnitsCard from "../img/DrowCards.png";
import ElfUnitsCard from "../img/ElfCards.png";
import HumanUnitsCard from "../img/HumanCards.png";
import MonstersCard from "../img/MonsterCards.png";
import UnitsFrames from "../img/unitsFrames.png";
//HOOKS
import useRace from "components/selectors/raceSelector/hooks/useRace";
//CONSTS
const unitPosition = {
  porter: ["-1px -1px", "-1px -84px", "-1px -167px", "-1px -167px"],
  swordsman: ["-70px -1px", "-70px -84px", "-70px -167px", "-70px -167px"],
  cavalier: ["-139px -1px", "-139px -84px", "-139px -167px", "-139px -167px"],
  flying: ["-208px -1px", "-208px -84px", "-208px -167px", "-208px -167px"],
  archer: ["-277px -1px", "-277px -84px", "-277px -167px", "-277px -167px"],
  healer: ["-346px -1px", "-346px -84px", "-346px -167px", "-346px -167px"],
  mercenary: ["-415px -1px", "-415px -84px", "-415px -167px", "-415px -167px"],
  mage: ["-484px -1px", "-484px -84px", "-484px -167px", "-484px -167px"],
};
export default function useUnitImg(unitName, unitLevel) {
  const [unitImg, setUnitImg] = useState(`url(${UndeadUnitsCard}) ${unitPosition[unitName][0]}`);
  const [unitRaceFrame, setUnitRaceFrame] = useState(`url(${UnitsFrames}) ${"-75px 0px"}`);
  const { race } = useRace();
  const unitFrame = `url(${UnitsFrames}) ${"0px 0px"}`;

  //USE EFFECTS
  useEffect(() => {
    switch (race) {
      case "undead":
        setUnitImg(`url(${UndeadUnitsCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${UnitsFrames}) ${"-75px 0px"}`);
        break;
      case "demon":
        setUnitImg(`url(${DemonUnitsCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${UnitsFrames}) ${"-150px 0px"}`);
        break;
      case "drow":
        setUnitImg(`url(${DrowUnitsCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${UnitsFrames}) ${"-225px 0px"}`);
        break;
      case "human":
        setUnitImg(`url(${HumanUnitsCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${UnitsFrames}) ${"-300px 0px"}`);
        break;
      case "elf":
        setUnitImg(`url(${ElfUnitsCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${UnitsFrames}) ${"-375px 0px"}`);
        break;
      case "monsters":
        setUnitImg(`url(${MonstersCard}) ${unitPosition[unitName][unitLevel - 1]}`);
        setUnitRaceFrame(`url(${MonstersCard}) ${"-375px 0px"}`);
        break;
      default:
        break;
    }
  }, [race, unitName, unitLevel]);
  return { unitImg, unitFrame, unitRaceFrame };
}

useUnitImg.propTypes = {
  race: PropTypes.string.isRequired,
  unitName: PropTypes.string.isRequired,
  unitLevel: PropTypes.number.isRequired,
};
