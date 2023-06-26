import { nanoid } from "nanoid";
import { useCallback, useEffect } from "react";
//STORE
import useStore from "store/useStore";
//DATA
import TOWERS from "shared/data/TOWERS.json";

//CONST
const BUFF = {
  id: "wRPzU5K430O0kKMkKYbaXA",
  name: "fortifications",
  effect: "player",
  homeLand: "all",
  unit: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defense",
};

const useTowers = (isSelected, level, value) => {
  const mainDefenderRace = useStore(state => state.mainDefender.race);
  const { structure, towers, fortifications, gate } = useStore(state => state.battlePlace);
  const { setTowers, setFortfications, setGate } = useStore(state => state.functions);

  const getTowersData = useCallback((name, level, structure) => {
    return structure === "castle"
      ? TOWERS[`monsters_${name}`][`level${level}`]
      : TOWERS[`${name}`][`level${level}`];
  }, []);

  const onAddButtonClick = () => {
    if ((isSelected === "tower" || isSelected === "magicTower") && towers.length < 2) {
      setTowers([
        ...towers,
        {
          ...getTowersData(isSelected, level, structure),
          type: `${isSelected}`,
          id: nanoid(),
        },
      ]);
    }
    if (isSelected === "fortification") {
      let isAdd = false;
      if (!fortifications.length) {
        setFortfications([
          {
            ...getTowersData(isSelected, level, structure),
            type: `${isSelected}`,
            quantity: value,
            id: nanoid(),
          },
        ]);
      } else {
        const newFortArray = fortifications.map(fortification => {
          if (fortification.level === level) {
            isAdd = true;
            return { ...fortification, quantity: fortification.quantity + value };
          }
          return fortification;
        });
        isAdd
          ? setFortfications(newFortArray)
          : setFortfications([
              ...newFortArray,
              {
                ...getTowersData(isSelected, level, structure),
                type: `${isSelected}`,
                quantity: value,
                id: nanoid(),
              },
            ]);
      }
    }
    if (isSelected === "gate") {
      setGate({
        ...getTowersData(isSelected, level, structure),
        type: `${isSelected}`,
        id: nanoid(),
      });
    }
  };

  const onRemoveButtonClick = () => {
    setTowers([]);
    setFortfications([]);
    setGate(null);
  };

  const onTowerClick = useCallback(
    id => {
      setTowers(towers.filter(tower => tower.id !== id));
    },
    [setTowers, towers],
  );

  const onGateClick = useCallback(() => {
    setGate(null);
  }, [setGate]);

  const onFortificationClick = useCallback(
    id => {
      setFortfications(fortifications.filter(fortification => fortification.id !== id));
    },
    [fortifications, setFortfications],
  );

  //USE EFFECT
  useEffect(() => {
    if (mainDefenderRace === "monsters") {
      setTowers([]);
      setFortfications([]);
      setGate(null);
    }
  }, [mainDefenderRace, setFortfications, setTowers, setGate]);

  useEffect(() => {
    setTowers([]);
    setFortfications([]);
    setGate(null);
  }, [setFortfications, setGate, setTowers, structure]);

  return {
    towers,
    fortifications,
    gate,
    onTowerClick,
    onFortificationClick,
    onGateClick,
    onAddButtonClick,
    onRemoveButtonClick,
  };
};

export default useTowers;
