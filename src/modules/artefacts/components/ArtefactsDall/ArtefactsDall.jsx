//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
// import { AssetIconButton } from "..";
//HOOKS
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";
//STORE
import useStore from "store/useStore";
//CONSTS
import { DALL_CELLS } from "shared/utils/constants";
//STYLES
import {
  Container,
  ContainerItem,
  Cell,
  ArtefactBg,
  ArtefactImg,
  DeleteIcon,
  AncientIcon,
  PerfectIcon,
  RuneIcon,
  SharpeningIcon,
} from "./styles/ArtefactsDall.styled";

const ArtefactsDall = ({ handleSelectedArtefact, deleteArtefact }) => {
  const player = usePlayerContext();
  const artefacts = useStore(state => state[player].artefacts);
  const { getArtefactImage, getAssets } = useArtefactsImg();
  const { setArtefactType } = useArtefact();

  return (
    <Container>
      {DALL_CELLS.map(cell => {
        const { top, left, place } = cell;
        const artefact = artefacts[place];
        return (
          <ContainerItem key={cell.place} top={top} left={left}>
            <Cell
              isSet={artefacts.kit && "true"}
              background={getAssets("artCell")}
              onClick={() => {
                handleSelectedArtefact(place);
              }}
            >
              {artefacts[place] ? (
                <ArtefactBg
                  backgroundColor={
                    artefact.ancient === "none" || !artefact.ancient ? null : "orange"
                  }
                >
                  <ArtefactImg
                    background={getArtefactImage(artefact.name)}
                    filter={artefact.battle ? "none" : "80%"}
                  />
                </ArtefactBg>
              ) : null}
            </Cell>
            {artefact ? (
              <>
                <DeleteIcon
                  background={getAssets("deleteIcon")}
                  onClick={() => {
                    deleteArtefact(artefact);
                  }}
                />
                <AncientIcon
                  background={getAssets("ancientIcon")}
                  filter={artefact?.ancient === "none" || !artefact?.ancient ? "50%" : "none"}
                  onClick={() => {
                    setArtefactType(place, "ancient");
                  }}
                />
                <PerfectIcon
                  background={getAssets("perfectIcon")}
                  filter={artefact?.perfect ? "none" : "50%"}
                  onClick={() => {
                    setArtefactType(place, "perfect");
                  }}
                />
                {artefact?.runes.length ? <RuneIcon background={getAssets("runeIcon")} /> : null}
                {artefact?.sharpening.length ? (
                  <SharpeningIcon background={getAssets("sharpeningIcon")} />
                ) : null}
              </>
            ) : null}
          </ContainerItem>
        );
      })}
    </Container>
  );
};

export default ArtefactsDall;
