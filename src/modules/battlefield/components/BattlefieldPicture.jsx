//HOOKS
import useBattlefieldImages from "modules/battlefield/hooks/useBattlefieldImages";
//STORE
import useStore from "store/useStore";

function BattlefieldPicture() {
  const battlefield = useStore(state => state.battlePlace.battlefield);
  const { battlefieldImg, structureImg } = useBattlefieldImages();

  return (
    <div>
      <div style={{ background: `${battlefieldImg}` }} className="relative w-[162px] h-[127px]">
        {battlefield !== "mine" && (
          <div
            style={{ background: `${structureImg}` }}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[100px]"
          ></div>
        )}
      </div>
    </div>
  );
}

export default BattlefieldPicture;
