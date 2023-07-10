//CONTETX
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useKitSelector from "modules/artefacts/hooks/useKitSelector";
import { useArtefact, useArtefactsImg } from "modules/artefacts/hooks";
//STORE
import useStore from "store/useStore";

//DATA
import ARTEFACTS from "shared/data/ARTEFACTS.json";
//HELPERS
import { getKitsList } from "shared/helpers";

//STYLES
import { Container, Select, Option, AncientIcon, PerfectIcon } from "./styles/KitsSelector.styled";

const KitsSelector = () => {
  const { kit, isKitAncient, isKitPerfect, handleKitType } = useKitSelector();
  console.log("🚀 ~ isKitPerfect:", isKitPerfect);
  console.log("🚀 ~ isKitAncient:", isKitAncient);
  const { handleArtefactsKit } = useArtefact();
  const { getAssets } = useArtefactsImg();

  return (
    <Container>
      <Select
        value={kit ? kit?.setName : ""}
        onChange={e => {
          handleArtefactsKit(e.target.value, isKitAncient, isKitPerfect);
        }}
      >
        <Option value="">{kit ? "Снять сет" : "- Одеть cет -"}</Option>
        {getKitsList(ARTEFACTS).map(item => {
          return (
            <Option key={item} value={item}>
              {item}
            </Option>
          );
        })}
      </Select>
      <AncientIcon
        background={getAssets("ancientIcon")}
        filter={isKitAncient ? "none" : "50%"}
        onClick={() => {
          handleKitType("ancient");
        }}
      />
      <PerfectIcon
        background={getAssets("perfectIcon")}
        filter={isKitPerfect ? "none" : "50%"}
        onClick={() => {
          handleKitType("perfect");
        }}
      />
    </Container>
  );
};

export default KitsSelector;
