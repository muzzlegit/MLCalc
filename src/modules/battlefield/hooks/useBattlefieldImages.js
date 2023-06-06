import { useState, useEffect } from "react";
//IMAGES
import battlefieldsImgs from "../img/battlefields.webp";
//HOOKS
import useBattleFieldStore from "../store/useBattleFieldStore";
import useUnitStore from "modules/army/store/useUnitsStore";
//CONSTS
const battlefieldsPositios = {
  cursedForest: "-164px -129px",
  deadLand: "-164px -1px",
  hollyLand: "-164px -257px",
  magicForest: "-164px -385px",
  mountain: "-1px -1px",
  desert: "-1px -257px",
  forest: "-1px -129px",
  steppe: "-1px -385px",
  mine: "-327px -1px",
  undead: "-327px -432px",
  demon: "-327px -230px",
  drow: "-408px -230px",
  human: "-327px -129px",
  elf: "-408px -129px",
  monsters: "-408px -432px",
  castle: "-327px -331px",
  puddle: "-408px -331px",
};

export default function useBattlefieldImages() {
  const battlefield = useBattleFieldStore(state => state.battlefield);
  const structure = useBattleFieldStore(state => state.structure);
  const race = useUnitStore(state => state.mainDefender.race);

  const [battlefieldImg, setBattlefieldImg] = useState(
    `url(${battlefieldsImgs}) ${battlefieldsPositios[battlefield]}`,
  );
  const [structureImg, setStructureImg] = useState(
    `url(${battlefieldsImgs}) ${battlefieldsPositios[race]}`,
  );

  //USE EFFECTS
  useEffect(() => {
    setStructureImg(`url(${battlefieldsImgs}) ${battlefieldsPositios[race]}`);
    setBattlefieldImg(`url(${battlefieldsImgs}) ${battlefieldsPositios[battlefield]}`);
    setStructureImg(
      `url(${battlefieldsImgs}) ${battlefieldsPositios[structure !== "town" ? structure : race]}`,
    );
  }, [battlefield, race, structure]);

  return { battlefieldImg, structureImg };
}
