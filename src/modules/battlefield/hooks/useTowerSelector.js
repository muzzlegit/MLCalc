import { useState, useEffect } from "react";
//STORE
import useStore from "store/useStore";

export default function useTowerSelector() {
  const { towers, structure } = useStore(state => state.battlePlace);
  const { race } = useStore(state => state.mainDefender);
  const [level, setLevel] = useState(1);
  const [levelsArray, setLevelsArray] = useState(Array.from({ length: 8 }, (_, i) => i + 1));
  const [fortificationAmount, setFortificationAmount] = useState(0);
  const [isSelected, setIsSelected] = useState("magicTower");
  const [isButtonActive, setIsButtonActive] = useState(
    towers.length >= 2 || isSelected === "fortification" ? true : false,
  );
  const [isSelectorActive, setIsSelectorActive] = useState("active");

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
    setLevelsArray(Array.from({ length: `${structure === "castle" ? 7 : 8}` }, (_, i) => i + 1));
    race === "monsters" && structure !== "castle"
      ? setIsSelectorActive("disabled")
      : setIsSelectorActive("active");
  }, [race, structure]);

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
    structure,
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
