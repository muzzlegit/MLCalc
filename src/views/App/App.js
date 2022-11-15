//COMPONENTS
import BattlefieldSelector from '../../components/BattlefieldSelector/BattlefieldSelector';
import RaceSelector from '../../components/RaceSelector/RaceSelector';
import AttackRateSelector from '../../components/AttackRateSelector/AttackRateSelector';
import ApostateChecker from '../../components/ApostateChecker/ApostateChecker';
import Squad from '../Squad/Squad';
import TestsPanel from '../TESTSPANEL/TestsPanel';

//STYLES
import { AppBox, SelectorsBox } from './App.styled';

function App() {

  return (
  <> 
    <AppBox>
      <BattlefieldSelector/>
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
      <Squad
        role={'mainDefender'}
      />
    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
