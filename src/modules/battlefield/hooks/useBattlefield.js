import { useEffect, useCallback } from "react";
//STORE
import useBattleFieldStore from "modules/battlefield/store/useBattleFieldStore";
import useUnitStore from "modules/army/store/useUnitsStore";
//HELPERS
import getPlayerHomeland from "../helpers/getPlayerHomeland";
import useBuffsProvider from "shared/hooks/useBuffsProvider";
import useBuffsToUnitProvider from "shared/hooks/useBuffsToUnitProvider";
//CONSTS
const homeLandBuff = {
  id: "2B0eBD4m",
  source: "battlefield",
  character: "default",
  player: "",
  target: "player",
  appliedOn: "homeLand",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defense",
  value: 25,
  description: "Защита родной земли",
};
function useBattlefield() {
  const battlefield = useBattleFieldStore(state => state.battlefield);
  useBuffsToUnitProvider("mainAttacker");
  useBuffsToUnitProvider("mainDefender");
  const { applyBuffs, removeBuff } = useBuffsProvider();
  const {
    apostate: mainAttackerApostate,
    race: mainAttackerRace,
    fraction: mainAttackerFraction,
  } = useUnitStore(state => state.mainAttacker);
  const {
    apostate: mainDefenderApostate,
    race: mainDefenderRace,
    fraction: mainDefenderFraction,
  } = useUnitStore(state => state.mainDefender);

  //--------------------------MAIN ATTACKER
  useEffect(() => {
    if (
      getPlayerHomeland(mainAttackerRace) === battlefield &&
      !mainAttackerApostate &&
      (mainAttackerRace !== mainDefenderRace || mainDefenderApostate)
    ) {
      applyBuffs([{ ...homeLandBuff, player: "mainAttacker" }]);
    } else {
      removeBuff([{ ...homeLandBuff, player: "mainAttacker" }]);
    }
  }, [
    battlefield,
    mainAttackerRace,
    mainAttackerApostate,
    mainDefenderApostate,
    mainDefenderRace,
    applyBuffs,
    removeBuff,
  ]);
  useEffect(() => {
    if (
      getPlayerHomeland(mainAttackerRace) === battlefield &&
      !mainAttackerApostate &&
      (mainAttackerRace !== mainDefenderRace || mainDefenderApostate)
    ) {
      applyBuffs([{ ...homeLandBuff, player: "mainAttacker" }]);
    } else {
      removeBuff([{ ...homeLandBuff, player: "mainAttacker" }]);
    }
  }, [
    battlefield,
    mainAttackerRace,
    mainAttackerApostate,
    mainDefenderApostate,
    mainDefenderRace,
    applyBuffs,
    removeBuff,
  ]);
  //--------------------------MAIN DEFENDER
  useEffect(() => {
    if (getPlayerHomeland(mainDefenderRace) === battlefield && !mainDefenderApostate) {
      applyBuffs([{ ...homeLandBuff, player: "mainDefender" }]);
    } else {
      removeBuff([{ ...homeLandBuff, player: "mainDefender" }]);
    }
  }, [
    battlefield,
    mainAttackerRace,
    mainAttackerApostate,
    mainDefenderApostate,
    mainDefenderRace,
    applyBuffs,
    removeBuff,
  ]);
  //USE EFFECTS
  //mainAttacker
  // useEffect(() => {
  //   // addHomeLandDefense("mainAttacker", mainAttackerRace, mainAttackerApostate);
  //   // if (mainAttackerHomeLand === battlefield && mainDefenderApostate) {
  //   //   addBuffValues("mainAttacker", BUFF, addBuff);
  //   // }
  //   // for (const unit in troops) {
  //   //   if (troops[unit].homeLand === battlefield) {
  //   //     addBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].homeLand, unit: [unit], value: 0.5 }],
  //   //       addBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].alienLand === battlefield) {
  //   //     addBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].alienLand, unit: [unit], value: -0.5 }],
  //   //       addBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].alienLand !== battlefield) {
  //   //     removeBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].alienLand }],
  //   //       removeBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].homeLand !== battlefield) {
  //   //     removeBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].homeLand }],
  //   //       removeBuff,
  //   //     );
  //   //   }
  //   // }
  // }, [mainAttackerRace, mainAttackerApostate, addHomeLandDefense]);
  //mainDefender
  // useEffect(() => {
  //   addHomeLandDefense("mainDefender", mainDefenderRace, mainDefenderApostate);
  //   // if (mainAttackerHomeLand === battlefield && mainDefenderApostate) {
  //   //   addBuffValues("mainAttacker", BUFF, addBuff);
  //   // }
  //   // for (const unit in troops) {
  //   //   if (troops[unit].homeLand === battlefield) {
  //   //     addBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].homeLand, unit: [unit], value: 0.5 }],
  //   //       addBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].alienLand === battlefield) {
  //   //     addBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].alienLand, unit: [unit], value: -0.5 }],
  //   //       addBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].alienLand !== battlefield) {
  //   //     removeBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].alienLand }],
  //   //       removeBuff,
  //   //     );
  //   //   }
  //   //   if (troops[unit].homeLand !== battlefield) {
  //   //     removeBuffValues(
  //   //       "mainAttacker",
  //   //       [{ ...homeLandAttack, id: unit + troops[unit].homeLand }],
  //   //       removeBuff,
  //   //     );
  //   //   }
  //   // }
  // }, [mainDefenderRace, mainDefenderApostate, addHomeLandDefense]);
}

export default useBattlefield;
