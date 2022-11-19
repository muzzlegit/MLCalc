//COMPONENTS
import BattlefieldSelector from '../../components/BattlefieldSelector/BattlefieldSelector';
import RaceSelector from '../../components/RaceSelector/RaceSelector';
import AttackRateSelector from '../../components/AttackRateSelector/AttackRateSelector';
import ApostateChecker from '../../components/ApostateChecker/ApostateChecker';
import TowerSelector from '../../components/TowersSelector/TowersSelector';
import TowersCard from '../../components/TowersCard/TowersCard';
import Squad from '../Squad/Squad';
import TestsPanel from '../TESTSPANEL/TestsPanel';

//STYLES
import { AppBox, PlayerBox, PlayerTitle, SelectorsBox } from './App.styled';


function App() {

  return (
  <> 
    <AppBox>
      <BattlefieldSelector/>
      <PlayerBox>
        <PlayerTitle>Атакующий</PlayerTitle>
        <SelectorsBox>
          <RaceSelector
            role={'mainAttacker'}
          />
          <AttackRateSelector
            role={'mainAttacker'}
          />
          <ApostateChecker
            role={'mainAttacker'}
          />
        </SelectorsBox>
        <Squad
          role={'mainAttacker'}
        />
      </PlayerBox>
      <PlayerBox>
        <PlayerTitle>Защитник</PlayerTitle>
        <SelectorsBox>
          <RaceSelector
            role={'mainDefender'}
          />
          <AttackRateSelector
            role={'mainDefender'}
          />
          <ApostateChecker
            role={'mainDefender'}
          />
        </SelectorsBox>
        <SelectorsBox>
          <TowerSelector/>
          <TowersCard
            role={'mainAttacker'}
          />
        </SelectorsBox>
        <Squad
          role={'mainDefender'}
        />
      </PlayerBox>

    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
