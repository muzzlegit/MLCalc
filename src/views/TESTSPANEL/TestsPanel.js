import { useState } from "react"
//COMPONENTS
import TestModal from './TestModal';
//STYLES
import {ButtonsBox} from './TestsPanel.styled';

export default function TestsPanel(){
  const [toggle, setToggle] = useState(false);

  const onTestWindowButtonClick = () => {
    setToggle(!toggle);
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