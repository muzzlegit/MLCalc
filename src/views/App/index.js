import { useState, useEffect } from 'react';
import { useStore } from '../../data/store/useStore';
import useMainAttaker from '../../data/store/useMainAttacker';
import useMainDefender from '../../data/store/useMainDefender';
import shallow from 'zustand/shallow'
import { AppBox } from './index.styled';
import isNativeLand from '../../helpers/isNativeLand';
import BattlefieldSelector from '../components/BattlefieldSelector/BattlefieldSelector';
import AttackRateSelector from '../components/AttackRateSelector/AttackRateSelector';
import ApostateChecker from '../components/ApostateChecker/ApostateChecker';
import RaceSelector from '../components/RaceSelector/RaceSelector';
import Squad from '../components/squad';
import TowersSelector from '../components/TowersSelector/TowersSelector';
import TowersCard from '../components/TowersCard/TowersCard';

function App() {
  const battlefield = useStore(state => state.battlefield);
  const setBattlefield = useStore(state => state.setBattlefield);
  //MAIN ATTACKER
  const mainAttacker = useMainAttaker();
  const mainAttackerRace = useMainAttaker(state => state.race);
  const mainAttackerRateAttack = useMainAttaker(state => state.attackRate);

  const setAttackerUnit = useMainAttaker(state => state.setUnit);
  const setMainAttackerRace = useMainAttaker(state => state.setRace);
  const setMainAttakerApostateValue = useMainAttaker(state => state.setApostateValue);
  const setMainAttackerHomeLand = useMainAttaker(state => state.setHomeLand);
  const setMainAttackerRateAttack = useMainAttaker(state => state.setRateAttack);
  const mainAttackerTowers = useMainAttaker(state => state.towers);
  const mainAttackerFortification = useMainAttaker(state => state.fortification);
  const setMainAttackerTowers = useMainAttaker(state => state.setTowers);
  const setMainAttackerFortification = useMainAttaker(state => state.setFortification);
  const addMainAttackerTowers = useMainAttaker(state => state.addTowers);
  const addMainAttackerFortification = useMainAttaker(state => state.addFortification);
  //MAIN DEFENDER
  const mainDefender =  useMainDefender();
  const mainDefenderRace = useMainDefender(state => state.race);
  const mainDefenderRateAttack = useMainDefender(state => state.attackRate);

  const setDefenderUnit = useMainDefender(state => state.setUnit);
  const setMainDefenderRace = useMainDefender(state => state.setRace);
  const setMainDefenderApostateValue = useMainDefender(state => state.setApostateValue);
  const setMainDefenderHomeLand = useMainDefender(state => state.setHomeLand);
  const setMainDefenderRateAttack = useMainDefender(state => state.setRateAttack);
  const mainDefenderTowers = useMainDefender(state => state.towers);
  const mainDefenderFortification = useMainDefender(state => state.fortification);
  const setMainDefenderTowers = useMainDefender(state => state.setTowers);
  const setMainDefenderFortification = useMainDefender(state => state.setFortification);
  const addMainDefenderTowers = useMainDefender(state => state.addTowers);
  const addMainDefenderFortification = useMainDefender(state => state.addFortification);


  const onClickAttackButton = () => {
    console.log('mainAttacker', mainAttacker);
    console.log('mainDefender', mainDefender.troops);
  }

  return (
    <AppBox>

      <RaceSelector 
        setRace = {setMainAttackerRace}
        setHomeLand = {setMainAttackerHomeLand}
      />
      <AttackRateSelector
        setAttackRate = {setMainAttackerRateAttack}
      />
      <ApostateChecker 
        setApostateValue = {setMainAttakerApostateValue}
      />
      <Squad
        player = {mainAttacker}
        setUnit = {setAttackerUnit}
        attackRate = {mainAttackerRateAttack}
      />
      <TowersCard
        race = {mainAttackerRace}
        towers = {mainAttackerTowers}
        fortifications = {mainAttackerFortification}
        setTowers = {setMainAttackerTowers}
        setFortification = {setMainAttackerFortification}
      />
      <TowersSelector
        towers = {mainAttackerTowers}
        fortifications = {mainAttackerFortification}
        addTowers = {addMainAttackerTowers}
        addFortification = {addMainAttackerFortification}
      />
      <RaceSelector 
        setRace = {setMainDefenderRace}
        setHomeLand = {setMainDefenderHomeLand}
      />
      <AttackRateSelector 
        setAttackRate = {setMainDefenderRateAttack}
      />
      <ApostateChecker 
        setApostateValue = {setMainDefenderApostateValue}
      />
      <Squad
        player = {mainDefender}
        setUnit = {setDefenderUnit}
        attackRate = {mainDefenderRateAttack}
      />
      <TowersCard
        race = {mainDefenderRace}
        towers = {mainDefenderTowers}
        fortifications = {mainDefenderFortification}
        setTowers = {setMainDefenderTowers}
        setFortification = {setMainDefenderFortification}
      />
      <TowersSelector
        towers = {mainDefenderTowers}
        fortifications = {mainDefenderFortification}
        addTowers = {addMainDefenderTowers}
        addFortification = {addMainDefenderFortification}
      />     
      <BattlefieldSelector/> 
      <button onClick={onClickAttackButton} style = {{color: 'white', backgroundColor: 'red', width: '690px' }} >В атаку</button>
    </AppBox>
    
  );
}

export default App;
