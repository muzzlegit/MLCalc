//CONTEXT
import PlayerContext from '../../helpers/context'

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
        < PlayerContext.Provider value = "mainAttacker" >
          <PlayerTitle>Атакующий</PlayerTitle>
          <SelectorsBox>
            <RaceSelector />
            <AttackRateSelector />
            <ApostateChecker />
          </SelectorsBox>
          <Squad />
        </PlayerContext.Provider>
      </PlayerBox>
      <PlayerBox>
        < PlayerContext.Provider value = "mainDefender" >
          <PlayerTitle>Защитник</PlayerTitle>
          <SelectorsBox>
            <RaceSelector />
            <AttackRateSelector />
            <ApostateChecker />
          </SelectorsBox>
          <SelectorsBox>
            <TowerSelector />
            <TowersCard />
          </SelectorsBox>
          <Squad />
        </PlayerContext.Provider>
      </PlayerBox>

    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
