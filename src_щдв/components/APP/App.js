//CONTEXT
import PlayerContext from '../../helpers/context.js'
//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData.js';
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
import useAllies from '../../hooks/useAllies.js';



function App() {
  const { attackerAllyChecker, firstDefenderAllyChecker, secondDefenderAllyChecker, setChecker } = useAllies();

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
          <Squad 
            buttonChecker = { !attackerAllyChecker }
            setChecker = { setChecker } />
        </PlayerContext.Provider>
      </PlayerBox>
      {
        attackerAllyChecker &&
        <PlayerBox>
          < PlayerContext.Provider value = "attackerAlly" >
            <SelectorsBox>
              <RaceSelector />
              <AttackRateSelector /> 
              <ApostateChecker />
            </SelectorsBox>
            <Squad 
              buttonChecker = { true }
              setChecker = { setChecker }
            />
          </PlayerContext.Provider>
        </PlayerBox>
      }
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
          <Squad
            buttonChecker = { !secondDefenderAllyChecker }
            setChecker = { setChecker }
          />
        </PlayerContext.Provider>
      </PlayerBox>
      {
        firstDefenderAllyChecker &&
        <PlayerBox>
          < PlayerContext.Provider value = "firstDefenderAlly" >
            <SelectorsBox>
              <RaceSelector />
              <AttackRateSelector /> 
              <ApostateChecker />
            </SelectorsBox>
            <Squad
              buttonChecker = { true }
              setChecker = { setChecker }
            />
          </PlayerContext.Provider>
        </PlayerBox>
      }
      {
        secondDefenderAllyChecker &&
        <PlayerBox>
          < PlayerContext.Provider value = "secondDefenderAlly" >
            <SelectorsBox>
              <RaceSelector />
              <AttackRateSelector /> 
              <ApostateChecker />
            </SelectorsBox>
            <Squad
              buttonChecker = { true }
              setChecker = { setChecker }
            />
          </PlayerContext.Provider>
        </PlayerBox>
      }
    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
