//CONTEXT
import PlayerContext from '../../helpers/context.js'

//COMPONENTS
import BattlefieldSelector from '../MAINSELECTORS/BattlefieldSelector';
import RaceSelector from '../MAINSELECTORS/RaceSelector';
import AttackRateSelector from '../MAINSELECTORS/AttackRateSelector';
import ApostateChecker from '../MAINSELECTORS/ApostateChecker';
import TowerSelector from '../TOWERSSELECTOR/TowersSelector';
import TowersCard from '../TOWERSSELECTOR/TowersCard';
import Squad from '../SQUAD';
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
