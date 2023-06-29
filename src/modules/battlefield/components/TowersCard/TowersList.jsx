import { nanoid } from "nanoid";
//HOOKS
import useTowers from "modules/battlefield/hooks/useTowers";
import useBattlefieldImages from "modules/battlefield/hooks/useBattlefieldImages";
//STYLES
import { TowerBox, ImgWrap, TowerImgBox, LevelLabel, Quantity } from "./styles/TowersCard.styled";

const TowersList = () => {
  const { towers, fortifications, gate, onTowerClick, onFortificationClick, onGateClick } =
    useTowers();
  const {
    tower: towerImg,
    magicTower: magicTowerImg,
    fortification: fortificationImg,
    getBattlefieldImage,
  } = useBattlefieldImages();

  return (
    <TowerBox>
      {towers.map(tower => {
        return (
          <ImgWrap key={nanoid()}>
            <TowerImgBox
              key={nanoid()}
              id={tower.id}
              background={tower.type === "tower" ? towerImg : magicTowerImg}
              onClick={() => {
                onTowerClick(tower.id);
              }}
            />
            <LevelLabel
              border={tower.level}
              background={tower.level === 8 ? getBattlefieldImage("perfectIcon") : null}
            >
              {tower.level === 8 ? null : tower.level}
            </LevelLabel>
          </ImgWrap>
        );
      })}
      {fortifications.map(fortification => {
        return (
          <ImgWrap key={nanoid()}>
            <TowerImgBox
              id={fortification.id}
              background={fortificationImg}
              onClick={() => {
                onFortificationClick(fortification.id);
              }}
            />
            <Quantity>x{fortification.quantity}</Quantity>
            <LevelLabel
              border={fortification.level}
              background={fortification.level === 8 ? getBattlefieldImage("perfectIcon") : null}
            >
              {fortification.level === 8 ? null : fortification.level}
            </LevelLabel>
          </ImgWrap>
        );
      })}
      {gate ? (
        <ImgWrap>
          <TowerImgBox
            id={gate.id}
            background={getBattlefieldImage("gate", "monsters")}
            onClick={onGateClick}
          />
          <LevelLabel border={gate.level}>{gate.level}</LevelLabel>
        </ImgWrap>
      ) : null}
    </TowerBox>
  );
};
export default TowersList;
