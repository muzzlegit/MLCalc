import { useState, useEffect } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//IMAGES
import battlefieldsImgs from "../img/battlefields.webp";
//HOOKS
import useBattlefieldStorage from "modules/battlefield/store/useBattlefieldStorage";
import useRace from "components/selectors/raceSelector/hooks/useRace";
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
  const player = usePlayerContext;
  const { battlefield, structure } = useBattlefieldStorage();
  const { race } = useRace(player);

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