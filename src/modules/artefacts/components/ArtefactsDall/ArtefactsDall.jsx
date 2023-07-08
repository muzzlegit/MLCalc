//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//COMPONENTS
import { AssetIconButton } from "..";
//HOOKS
import { useArtefactsImg } from "modules/artefacts/hooks";
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
                    filter={artefact.battle ? "none" : "70%"}
                  />
                </ArtefactBg>
              ) : null}
            </Cell>
            {artefact ? (
              <DeleteIcon
                background={getAssets("deleteIcon")}
                onClick={() => {
                  deleteArtefact(artefact);
                }}
              />
            ) : null}
            {/* <AncientIcon
              background={getAssets("ancientIcon")}
              filter={artefact?.ancient ? "none" : "50%"}
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
            <RuneIcon
              background={getAssets("runeIcon")}
              filter={artefact?.runes.length ? "none" : "50%"}
            />
            <SharpeningIcon
              background={getAssets("sharpeningIcon")}
              filter={artefact?.sharpening.length ? "none" : "50%"}
            /> */}
          </ContainerItem>
        );
      })}
    </Container>
  );
};

export default ArtefactsDall;