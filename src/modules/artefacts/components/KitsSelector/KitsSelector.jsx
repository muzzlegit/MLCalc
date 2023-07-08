//CONTETX
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import { useArtefact } from "modules/artefacts/hooks";
//STORE
import useStore from "store/useStore";

//DATA
import ARTEFACTS from "shared/data/ARTEFACTS.json";
//HELPERS
import { getKitsList } from "shared/helpers";

//STYLES
import { Container, Select, Option } from "./styles/KitsSelector.styled";

const KitsSelector = () => {
  const player = usePlayerContext();
  const { kit } = useStore(state => state[player].artefacts);
  const { handleArtefactsKit } = useArtefact();
  console.log(kit);
  return (
    <Container>
      <Select
        value={kit ? kit?.setName : ""}
        onChange={e => {
          handleArtefactsKit(e.target.value);
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
    </Container>
  );
};

export default KitsSelector;
