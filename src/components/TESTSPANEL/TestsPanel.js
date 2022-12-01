import { useState } from "react"
//STORE
import useMainAttaker from '../../data/store/useMainAttacker';
import useMainDefender from '../../data/store/useMainDefender';
//COMPONENTS
import TestModal from './TestModal';
//STYLES
import {ButtonsBox} from './TestsPanel.styled';

export default function TestsPanel(){
  const [toggle, setToggle] = useState(false);

  const mainAttacker =  useMainAttaker();
  const mainDefender =  useMainDefender();

  const onTestWindowButtonClick = () => {
    setToggle(!toggle);
  }
  const showMainFiles = () => {
    console.log('mainDefender', mainDefender.player);
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