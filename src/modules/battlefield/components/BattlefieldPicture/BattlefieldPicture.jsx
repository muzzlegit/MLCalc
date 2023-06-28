//HOOKS
import useBattlefieldImages from "modules/battlefield/hooks/useBattlefieldImages";
//STORE
import useStore from "store/useStore";
//STYLES
import { BattlefieldBox, StructureBox } from "./styles/BattlefieldPicture.styled";

function BattlefieldPicture() {
  const battlefield = useStore(state => state.battlePlace.battlefield);
  const { battlefieldImg, structureImg } = useBattlefieldImages();

  return (
    <BattlefieldBox background={battlefieldImg}>
      {battlefield !== "mine" && <StructureBox background={structureImg}></StructureBox>}
    </BattlefieldBox>
  );
}

export default BattlefieldPicture;
