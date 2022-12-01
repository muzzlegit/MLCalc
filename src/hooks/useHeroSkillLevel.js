import { useEffect } from "react";
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useHeroSkillLevel( player, level, branch, skillNumber ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( player );
  const { hero } = playerData;
  const { setHeroSkillLevel } =playerFunctions;

  //USE EFFECT
  useEffect(() => {
    setHeroSkillLevel( branch, skillNumber, hero[ branch ][ skillNumber ].level = level  );
  }, [level, branch, skillNumber, hero, setHeroSkillLevel ]);
    

}