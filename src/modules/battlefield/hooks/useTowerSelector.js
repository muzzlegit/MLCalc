import { useState, useEffect } from "react";
//HOOKS
import useBattlefield from "./useBattlefield";
//STORE
import useStore from "store/useStore";

export default function useTowerSelector() {
  const { towers } = useStore(state => state.battlePlace);
  const { isCastle } = useBattlefield();
  const { race } = useStore(state => state.mainDefender);
  const [level, setLevel] = useState(1);
  const [levelsArray, setLevelsArray] = useState(Array.from({ length: 8 }, (_, i) => i + 1));
  const [fortificationAmount, setFortificationAmount] = useState(0);
  const [isSelected, setIsSelected] = useState("magicTower");
  const [isButtonActive, setIsButtonActive] = useState(
    towers.length >= 2 || isSelected === "fortification" ? true : false,
  );
  const isSelectorActive = race === "monsters" ? null : "active";

  //HANDLE FUCTIONS
  const onLevelClick = e => {
    setLevel(Number(e.currentTarget.id));
  };

  const onfortificationAmountChange = e => {
    if (e.target.value === "") {
      e.target.value = 1;
    }
    isNaN(Number(e.currentTarget.value)) || fortificationAmount < 0
      ? setFortificationAmount(1)
      : setFortificationAmount(Number(e.currentTarget.value));
  };

  const onTowerClick = e => {
    setIsSelected(e.target.id);
    if (e.target.id === "fortification") {
      setIsButtonActive(false);
    } else {
      if (towers.length >= 2) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  };

  //USE EFFECTS
  useEffect(() => {
    if (isCastle && level === 8) {
      setLevel(7);
    }
    setLevelsArray(Array.from({ length: `${isCastle ? 7 : 8}` }, (_, i) => i + 1));
  }, [isCastle, level]);

  useEffect(() => {
    if (isSelected === "fortification") {
      setIsButtonActive(false);
    } else {
      if (towers.length >= 2) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  }, [towers, isSelected]);

  return {
    levelsArray,
    level,
    isSelected,
    isButtonActive,
    fortificationAmount,
    isSelectorActive,
    onTowerClick,
    onLevelClick,
    onfortificationAmountChange,
  };
}
