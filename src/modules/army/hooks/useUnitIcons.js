import { useState } from "react";
//IMAGES
import unitsIcons from "../img/unitsIcons.webp";
//CONSTS
const unitIcoPosition = {
  porter: "-1px -1px",
  swordsman: "-1px -24px",
  cavalier: "-1px -47px",
  flying: "-1px -70px",
  archer: "-24px -1px",
  healer: "-24px -24px",
  mercenary: "-24px -47px",
  mage: "-24px -70px",
  attackIco: "-47px -1px",
  defenseIco: "-47px -18px",
  healthIco: "-47px -35px",
  defenseLevelIco: "-47px -52px",
  capacityIco: "-64px -1px",
  resurrectionIco: "-64px -18px",
  towerSuppressionIco: "-64px -35px",
  persecutorIco: "-64px -52px",
  suppressionIco: "-64px -70px",
  amountIco: "-47px -70px",
};

function useUnitIcons(unitName) {
  const [unitIco] = useState(`url(${unitsIcons}) ${unitIcoPosition[unitName]}`);
  const attack = `url(${unitsIcons}) ${unitIcoPosition.attackIco}`;
  const defense = `url(${unitsIcons}) ${unitIcoPosition.defenseIco}`;
  const health = `url(${unitsIcons}) ${unitIcoPosition.healthIco}`;
  const defenseLevel = `url(${unitsIcons}) ${unitIcoPosition.defenseLevelIco}`;
  const capacity = `url(${unitsIcons}) ${unitIcoPosition.capacityIco}`;
  const resurrection = `url(${unitsIcons}) ${unitIcoPosition.resurrectionIco}`;
  const towersSuppression = `url(${unitsIcons}) ${unitIcoPosition.towerSuppressionIco}`;
  const persecution = `url(${unitsIcons}) ${unitIcoPosition.persecutorIco}`;
  const suppression = `url(${unitsIcons}) ${unitIcoPosition.suppressionIco}`;
  const amount = `url(${unitsIcons}) ${unitIcoPosition.amountIco}`;

  return {
    unitIco,
    attack,
    defense,
    health,
    defenseLevel,
    capacity,
    persecution,
    resurrection,
    towersSuppression,
    suppression,
    amount,
  };
}

export default useUnitIcons;
