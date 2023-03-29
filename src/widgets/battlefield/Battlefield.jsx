//COMPONENTS
import { BattlefieldSelector, BattlefieldPicture } from "components/selectors";
//STYLES
import { BattlefieldWrap } from "./styles/Battlefield.styled";

function Battlefield() {
  return (
    <BattlefieldWrap>
      <BattlefieldSelector />
      <BattlefieldPicture />
    </BattlefieldWrap>
  );
}

export default Battlefield;
