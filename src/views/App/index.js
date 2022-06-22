import { useState, useEffect } from 'react';
import { useStore } from '../../data/store/useStore';
import { AppBox } from './index.styled';
import AttackRateSelector from '../components/AttackRateSelector/AttackRateSelector';
import ApostateChecker from '../components/ApostateChecker/ApostateChecker';
import RaceSelector from '../components/RaceSelector/RaceSelector';
import Squad from '../components/squad';
import TowersSelector from '../components/TowersSelector/TowersSelector';
import TowersCard from '../components/TowersCard/TowersCard';

function App() {

  const mainAttackerRace = useStore(state => state.mainAttacker.race);
  const mainDefenderRace = useStore(state => state.mainDefender.race);

  const mainAttackerRateAttack = useStore(state => state.mainAttacker.attackRate);
  const mainDefenderRateAttack = useStore(state => state.mainDefender.attackRate);

  const mainAttackerHomeLand = useStore(state => state.mainAttacker.homeLand);
  const mainDefenderHomeLand = useStore(state => state.mainDefender.homeLand);

  const mainAttackerApostateValue = useStore(state => state.mainAttacker.apostate);
  const mainDefenderApostateValue = useStore(state => state.mainDefender.apostate);

  const mainAttackerTroops = useStore(state => state.mainAttacker.troops);
  const mainDefenderTroops =  useStore(state => state.mainDefender.troops);

  const setMainAttackerRace = useStore(state => state.setMainAttackerRace);
  const setMainDefenderRace = useStore(state => state.setMainDefenderRace);
  const setAttackerUnit = useStore(state => state.setAttackerUnit);
  const setDefenderUnit = useStore(state => state.setDefenderUnit);
  const setMainAttackerRateAttack = useStore(state => state.setMainAttackerRateAttack);
  const setMainDefenderRateAttack = useStore(state => state.setMainDefenderRateAttack);

  const mainAttackerTowers = useStore(state => state.mainAttacker.towers);
  const mainAttackerFortification = useStore(state => state.mainAttacker.fortification);
  const setMainAttackerTowers = useStore(state => state.setMainAttackerTowers);
  const setMainAttackerFortification = useStore(state => state.setMainAttackerFortification);

  const mainDefenderTowers = useStore(state => state.mainDefender.towers);
  const mainDefenderFortification = useStore(state => state.mainDefender.fortification);
  const setMainDefenderTowers = useStore(state => state.setMainDefenderTowers);
  const setMainDefenderFortification = useStore(state => state.setMainDefenderFortification);

  const addMainAttackerTowers = useStore(state => state.addMainAttackerTowers);
  const addMainAttackerFortification = useStore(state => state.addMainAttackerFortification);
  const addMainDefenderTowers = useStore(state => state.addMainDefenderTowers);
  const addMainDefenderFortification = useStore(state => state.addMainDefenderFortification);

  const setMainAttackerHomeLand = useStore(state => state.setMainAttakerHomeLand);
  const setMainDefenderHomeLand = useStore(state => state.setMainDefenderHomeLand);

  const setMainAttakerApostateValue = useStore(state => state.setMainAttakerApostateValue);
  const setMainDefenderApostateValue = useStore(state => state.setMainDefenderApostateValue);

  const onClickAttackButton = () => {
    console.log('mainAttackerTroops', mainAttackerApostateValue);
    console.log('mainAttackerTroops', mainDefenderApostateValue);
  }

  return (
    <AppBox>
      {/* <button onClick={onClickButton}>Чпуньк</button> */}
      <RaceSelector 
        setRace = {setMainAttackerRace}
        setHomeLand = {setMainAttackerHomeLand}
      />
      <AttackRateSelector setAttackRate = {setMainAttackerRateAttack}/>
      <ApostateChecker setApostateValue = {setMainAttakerApostateValue}/>
      <Squad
        race = {mainAttackerRace}
        setUnit = {setAttackerUnit}
        troops = {mainAttackerTroops}
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
      <AttackRateSelector setAttackRate = {setMainDefenderRateAttack}/>
      <ApostateChecker setApostateValue = {setMainDefenderApostateValue}/>
      <Squad
        race = {mainDefenderRace}
        setUnit = {setDefenderUnit}
        troops = {mainDefenderTroops}
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
      <button onClick={onClickAttackButton} style = {{color: 'white', backgroundColor: 'red', width: '690px' }} >В атаку</button>
    </AppBox>
    
  );
}

export default App;
