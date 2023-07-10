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
  PerfectIcon,
  RuneIcon,
  SharpeningIcon,
} from "./styles/SelectedArtefact.styled";
import * as ancientIconStyles from "modules/artefacts/components/AssetIcon/styles/AncientIcon.styled";

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
          disabled={artefact?.ancient === "none"}
          background={getAssets("ancientIcon")}
          filter={artefact?.ancient === "none" || !artefact?.ancient ? "50%" : "none"}
          onClick={() => {
            changeSelectedArtefact("ancient");
          }}
        />
        <PerfectIcon
          background={getAssets("perfectIcon")}
          filter={artefact?.perfect ? "none" : "50%"}
          onClick={() => {
            changeSelectedArtefact("perfect");
          }}
        />
        <RuneIcon
          background={getAssets("runeIcon")}
          filter={artefact?.runes.length ? "none" : "50%"}
        />
        <SharpeningIcon
          background={getAssets("sharpeningIcon")}
          filter={artefact?.sharpening.length ? "none" : "50%"}
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
