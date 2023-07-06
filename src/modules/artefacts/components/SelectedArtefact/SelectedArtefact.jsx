//COMPONENTS
import { AssetIconButton, AssetIcon } from "..";
//HOOKS
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";

//STYLES
import { Container, ArtefactImg, ArtefactBg, ApplyBtn } from "./styles/SelectedArtefact.styled";

const styles = {
  ancientIcon: {
    size: "30px",
    top: "8px",
    left: "8px",
    width: "21px",
    height: "21px",
  },
  perfectIcon: {
    size: "30px",
    top: "8px",
    right: "8px",
    width: "21px",
    height: "24px",
  },
  runeIcon: {
    size: "30px",
    bottom: "8px",
    left: "8px",
    width: "16px",
    height: "23px",
  },
  sharpeningIcon: {
    size: "30px",
    bottom: "8px",
    right: "8px",
    width: "21px",
    height: "25px",
  },
};

const SelectedArtefact = ({ artefact, changeSelectedArtefact }) => {
  const { getArtefactImage } = useArtefactsImg();
  const { addArtefact } = useArtefact();
  return (
    <Container>
      {artefact ? (
        <ArtefactBg background={artefact.ancient ? "orange" : null}>
          <ArtefactImg
            title={artefact.name}
            background={getArtefactImage(artefact.name)}
            ancient={artefact.ancient ? "orange" : null}
          />
          <AssetIconButton
            id="ancient"
            iconName="ancientIcon"
            isActive={artefact?.ancient}
            handleFunction={changeSelectedArtefact}
            styles={styles.ancientIcon}
          />
          <AssetIconButton
            id="perfect"
            iconName="perfectIcon"
            isActive={artefact?.perfect}
            handleFunction={changeSelectedArtefact}
            styles={styles.perfectIcon}
          />
          <AssetIcon
            iconName="runeIcon"
            isActive={artefact?.runes.length}
            styles={styles.runeIcon}
          />
          <AssetIcon
            iconName="sharpeningIcon"
            isActive={artefact?.sharpening.length}
            styles={styles.sharpeningIcon}
          />
        </ArtefactBg>
      ) : null}
      <ApplyBtn
        onClick={() => {
          addArtefact(artefact);
        }}
      >
        Применить
      </ApplyBtn>
    </Container>
  );
};

export default SelectedArtefact;
