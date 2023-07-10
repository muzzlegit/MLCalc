//HOOKS
import { useArtefactsImg } from "modules/artefacts/hooks";

const AssetIcon = ({ id, iconName, isActive, handleFunction, styles }) => {
  const { getAssets } = useArtefactsImg();
  const { Container, Icon } = styles;

  return (
    <Container id={id} onClick={handleFunction}>
      <Icon background={getAssets(iconName)} filter={isActive ? "none" : "70%"} />
    </Container>
  );
};

export default AssetIcon;
