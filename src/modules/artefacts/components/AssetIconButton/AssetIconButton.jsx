//HOOKS
import { useArtefactsImg } from "modules/artefacts/hooks";
//STYLES
import { Container, Icon } from "./styles/AssetIconButton.styled";

const AssetIconButton = ({ id, iconName, isActive, handleFunction, styles }) => {
  const { getAssets } = useArtefactsImg();

  return (
    <Container
      id={id}
      onClick={e => {
        handleFunction(e.currentTarget.id);
      }}
      width={styles.size}
      height={styles.size}
      top={styles?.top}
      bottom={styles?.bottom}
      left={styles?.left}
      right={styles?.right}
    >
      <Icon
        background={getAssets(iconName)}
        filter={isActive ? "none" : "70%"}
        width={styles.width}
        height={styles.height}
      />
    </Container>
  );
};

export default AssetIconButton;
