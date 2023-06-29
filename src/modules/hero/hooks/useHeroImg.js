import { useState, useEffect, useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//IMAGES
import heroImgs from "modules/hero/img/HeroAssets.webp";
import heroImgsMap from "modules/hero/img/maps/heroAssets.map";
//STORE
import useStore from "store/useStore";

function useHeroImg() {
  const player = usePlayerContext();
  const race = useStore(state => state[player].race);
  const [heroImg, setHeroImg] = useState(`url(${heroImgs}) ${heroImgsMap.attacker}`);
  const [backgroundImg, setbackgroundImg] = useState(
    `url(${heroImgs}) ${heroImgsMap.backgrounds.undead}`,
  );

  const getHeroImage = useCallback(imageName => {
    return `url(${heroImgs}) ${heroImgsMap[imageName]}`;
  }, []);

  //USE EFFECTS
  useEffect(() => {
    switch (player) {
      case "mainAttacker":
        race === "monsters"
          ? setHeroImg(`url(${heroImgs}) ${heroImgsMap.monster}`)
          : setHeroImg(`url(${heroImgs}) ${heroImgsMap.attacker}`);
        break;
      case "attackerAlly" || "attackerSecondAlly":
        race === "monsters"
          ? setHeroImg(`url(${heroImgs}) ${heroImgsMap.monsterAlly}`)
          : setHeroImg(`url(${heroImgs}) ${heroImgsMap.attackerAlly}`);
        break;
      case "mainDefender":
        race === "monsters"
          ? setHeroImg(`url(${heroImgs}) ${heroImgsMap.monster}`)
          : setHeroImg(`url(${heroImgs}) ${heroImgsMap.defender}`);
        break;
      case "firstDefenderAlly" || "secondDefenderAlly":
        race === "monsters"
          ? setHeroImg(`url(${heroImgs}) ${heroImgsMap.monsterAlly}`)
          : setHeroImg(`url(${heroImgs}) ${heroImgsMap.defenderAlly}`);
        break;
      default:
        break;
    }
    setbackgroundImg(`url(${heroImgs}) ${heroImgsMap.backgrounds[race]}`);
  }, [race, player]);

  return { heroImg, backgroundImg, getHeroImage };
}

export default useHeroImg;
