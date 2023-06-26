import { useState, useEffect } from "react";
//STORE
import useStore from "store/useStore";
//IMAGES
import battlefieldsImgs from "modules/battlefield/img/battlefields.webp";
import battlefieldsPositios from "modules/battlefield/img/maps/battlefields.map";

export default function useBattlefieldImages() {
  const { battlefield, structure } = useStore(state => state.battlePlace);
  const mainDefenderRace = useStore(state => state.mainDefender.race);

  const [battlefieldImg, setBattlefieldImg] = useState(getBattlefieldImage(battlefield));
  const [structureImg, setStructureImg] = useState(
    getBattlefieldImage(structure, mainDefenderRace),
  );
  const [tower, setTower] = useState(getBattlefieldImage("tower", mainDefenderRace));
  const [magicTower, setMagicTower] = useState(getBattlefieldImage("magicTower", mainDefenderRace));
  const [fortification, setFortification] = useState(
    getBattlefieldImage("fortification", mainDefenderRace),
  );

  function getBattlefieldImage(imageName, race) {
    if (race) return `url(${battlefieldsImgs}) ${battlefieldsPositios[imageName][race]}`;
    return `url(${battlefieldsImgs}) ${battlefieldsPositios[imageName]}`;
  }
  //USE EFFECTS
  useEffect(() => {
    setBattlefieldImg(getBattlefieldImage(battlefield));
    setStructureImg(
      structure !== "town"
        ? getBattlefieldImage(structure)
        : getBattlefieldImage(structure, mainDefenderRace),
    );
    setTower(getBattlefieldImage("tower", structure === "castle" ? "monsters" : mainDefenderRace));
    setMagicTower(
      getBattlefieldImage("magicTower", structure === "castle" ? "monsters" : mainDefenderRace),
    );
    setFortification(
      getBattlefieldImage("fortification", structure === "castle" ? "monsters" : mainDefenderRace),
    );
  }, [battlefield, mainDefenderRace, structure]);

  return { battlefieldImg, structureImg, tower, magicTower, fortification, getBattlefieldImage };
}
