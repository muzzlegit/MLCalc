import { nanoid } from "nanoid";
import { useCallback, useEffect } from "react";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//STORE
import useStore from "store/useStore";
//DATA
import TOWERS from "shared/data/TOWERS.json";

//CONST
const fortificationBuff = {
  id: "wRPzU5K430O0kKMkKYbaXA",
  source: "fortifications",
  character: "fortification",
  target: "player",
  appliedOn: "all",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defense",
  description: ["Защита укреплений"],
  index: 0,
  value: [0],
};

const useTowers = (isSelected, level, value) => {
  const mainDefenderRace = useStore(state => state.mainDefender.race);
  const { structure, towers, fortifications, gate } = useStore(state => state.battlePlace);
  const { setTowers, setFortfications, setGate } = useStore(state => state.functions);
  const { applyBuffs, removeBuff } = useBuffsProvider();

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
      if (!value) return;
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
      removeBuff([
        {
          ...fortificationBuff,
          player: "mainDefender",
        },
      ]);
      setGate(null);
    }
  }, [mainDefenderRace, setFortfications, setTowers, setGate, removeBuff]);

  useEffect(() => {
    setTowers([]);
    setFortfications([]);
    setGate(null);
    removeBuff([
      {
        ...fortificationBuff,
        player: "battlePlace",
      },
    ]);
    removeBuff([
      {
        ...fortificationBuff,
        player: "mainDefender",
      },
    ]);
  }, [removeBuff, setFortfications, setGate, setTowers, structure]);

  useEffect(() => {
    const defence = fortifications.reduce((acc, { quantity, defense }) => {
      acc = acc + quantity * defense;
      return acc;
    }, 0);
    applyBuffs([
      {
        ...fortificationBuff,
        player: structure === "castle" ? "battlePlace" : "mainDefender",
        value: [defence],
      },
    ]);
  }, [applyBuffs, fortifications, removeBuff, structure]);

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
