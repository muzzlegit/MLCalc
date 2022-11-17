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
import { AppBox, CenterBox, LeftBox } from './App.styled';


function App() {

  return (
  <> 
    <AppBox>

        <BattlefieldSelector/>
          <CenterBox>
            <RaceSelector
              role={'mainAttacker'}
            />
            <AttackRateSelector
              role={'mainAttacker'}
            />
            <ApostateChecker
              role={'mainAttacker'}
            />
          </CenterBox>
          <CenterBox>
            <TowerSelector/>
            <TowersCard
                role={'mainAttacker'}
              />
          </CenterBox>
      <Squad
        role={'mainAttacker'}
      />
      <CenterBox>
        <RaceSelector
          role={'mainDefender'}
        />
        <AttackRateSelector
          role={'mainDefender'}
        />
        <ApostateChecker
          role={'mainDefender'}
        />
      </CenterBox>
      <Squad
        role={'mainDefender'}
      />
    </AppBox>
    <TestsPanel/>
  </>  
  );
}

export default App;
