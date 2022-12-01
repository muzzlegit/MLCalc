//HOOKS
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
//STYLES
import { CheckerBox, CheckerLabel } from "./ApostateChecker.styled";

export default function ApostateChecker({ player }) {
  const playerFunctions = usePlayerStoreFunctions( player );

  //HaNDLE FUNCTIONS
  const onClick = () => {
    playerFunctions.setApostateValue();
  }

  return (
    <CheckerBox>
      <CheckerLabel>Отступник</CheckerLabel>
      <input 
        type="checkbox"
        onClick={ onClick }
      />
    </CheckerBox>
  )
}