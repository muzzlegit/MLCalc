import { useState } from "react"
//STORE
import useStore from '../../data/store/useStore';

//COMPONENTS
import TestModal from './TestModal';
//STYLES
import {ButtonsBox} from './TestsPanel.styled';

export default function TestsPanel(){
  const [toggle, setToggle] = useState(false);

  const mainAttacker = useStore( ( state ) => state.mainAttacker );
  const mainDefender = useStore( ( state ) => state.mainDefender );
  const attackerAlly = useStore( ( state ) => state.attackerAlly );
  const firstDefenderAlly = useStore( ( state ) => state.firstDefenderAlly );
  const secondDefenderAlly = useStore( ( state ) => state.secondDefenderAlly );

  const onTestWindowButtonClick = () => {
    setToggle(!toggle);
  }
  const showMainFiles = () => {
    console.log('mainAttacker', mainAttacker);
    console.log('mainDefender', mainDefender);
    console.log('attackerAlly', attackerAlly);
    console.log('firstDefenderAlly', firstDefenderAlly);
    console.log('secondDefenderAlly', secondDefenderAlly);
  }

  return(
    <>
      <ButtonsBox>
        <button
          type="button"
          onClick={onTestWindowButtonClick}
        >
          Test Window
        </button>
        <button
          type="button"
          onClick={showMainFiles}
        >
          Show main file
        </button>
      </ButtonsBox>

      { toggle ?
        <TestModal
          setToggle={setToggle}
        />
        : null
      }
    </>
  )
}