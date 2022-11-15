//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STYLES
import { CheckerBox, CheckerLabel } from "./ApostateChecker.styled";

export default function ApostateChecker({role}) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);

  //HaNDLE FUNCTIONS
  const onClick = (e) => {
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