//HOOKS
import useBattlefieldImages from "./hooks/useBattlefieldImages";
import useBattlefieldStorage from "modules/battlefield/store/useBattlefieldStorage";
//STYLES
import { ImagesBox, BattlefieldImg, StructureImg } from "./styles/BattlefieldPicture.styled";

function BattlefieldPicture() {
  const { battlefield } = useBattlefieldStorage();
  const { battlefieldImg, structureImg } = useBattlefieldImages();
  return (
    <ImagesBox>
      <BattlefieldImg background={battlefieldImg}></BattlefieldImg>
      {battlefield !== "mine" ? <StructureImg background={structureImg}></StructureImg> : null}
    </ImagesBox>
  );
}

export default BattlefieldPicture;
