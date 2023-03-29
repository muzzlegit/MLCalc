//HOOKS
import useBattlefieldImages from "./hooks/useBattlefieldImages";
import useBattlefield from "./hooks/useBattlefield";
//STYLES
import { ImagesBox, BattlefieldImg, StructureImg } from "./styles/BattlefieldPicture.styled";

function BattlefieldPicture() {
  const { battlefield } = useBattlefield();
  const { battlefieldImg, structureImg } = useBattlefieldImages();
  return (
    <ImagesBox>
      <BattlefieldImg background={battlefieldImg}></BattlefieldImg>
      {battlefield !== "mine" ? <StructureImg background={structureImg}></StructureImg> : null}
    </ImagesBox>
  );
}

export default BattlefieldPicture;
