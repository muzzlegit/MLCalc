//COMPONENTS
import { AssetIconButton, AssetIcon } from "..";
//HOOKS
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";

//STYLES
import {
  Container,
  ArtefactImg,
  ArtefactBg,
  ApplyBtn,
  AncientIcon,
} from "./styles/SelectedArtefact.styled";

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

const SelectedArtefact = ({
  artefact,
  isArtefactChanged,
  changeSelectedArtefact,
  apllySelectedArtefact,
}) => {
  const { getArtefactImage, getAssets } = useArtefactsImg();

  return (
    <Container>
      <ArtefactBg background={artefact?.ancient === "none" || !artefact?.ancient ? null : "orange"}>
        <ArtefactImg title={artefact?.name} background={getArtefactImage(artefact?.name)} />
        <AncientIcon
          id="ancient"
          disabled={artefact?.ancient === "none"}
          background={getAssets("ancientIcon")}
          filter={artefact?.ancient === "none" || !artefact?.ancient ? "50%" : "none"}
          onClick={() => {
            changeSelectedArtefact("ancient");
          }}
        />
        <AssetIconButton
          id="perfect"
          iconName="perfectIcon"
          isActive={artefact?.perfect}
          handleFunction={changeSelectedArtefact}
          styles={styles.perfectIcon}
        />
        <AssetIcon iconName="runeIcon" isActive={artefact?.runes.length} styles={styles.runeIcon} />
        <AssetIcon
          iconName="sharpeningIcon"
          isActive={artefact?.sharpening.length}
          styles={styles.sharpeningIcon}
        />
      </ArtefactBg>

      <ApplyBtn
        disabled={!isArtefactChanged}
        isActive={isArtefactChanged && "true"}
        onClick={() => {
          apllySelectedArtefact(artefact);
        }}
      >
        Применить
      </ApplyBtn>
    </Container>
  );
};

export default SelectedArtefact;
