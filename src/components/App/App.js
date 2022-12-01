//COMPONENTS
import BattlefieldSelector from '../../components/BattlefieldSelector/BattlefieldSelector';
import RaceSelector from '../../components/RaceSelector';
import AttackRateSelector from '../../components/AttackRateSelector';
import ApostateChecker from '../../components/ApostateChecker';
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
          <RaceSelector player = { 'mainAttacker' } />
          <AttackRateSelector player = { 'mainAttacker' } />
          <ApostateChecker role = { 'mainAttacker' } />
        </SelectorsBox>
        <Squad player={ 'mainAttacker' } />
      </PlayerBox>
      <PlayerBox>
        <PlayerTitle>Защитник</PlayerTitle>
        <SelectorsBox>
          <RaceSelector player = { 'mainDefender' } />
          <AttackRateSelector player = { 'mainDefender' } />
          <ApostateChecker player = { 'mainDefender' } />
        </SelectorsBox>
        {/* <SelectorsBox>
          <TowerSelector player = { 'mainDefender' } />
          <TowersCard player = { 'mainDefender' } />
        </SelectorsBox> */}
        <Squad player = { 'mainDefender' } />
      </PlayerBox>

    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
