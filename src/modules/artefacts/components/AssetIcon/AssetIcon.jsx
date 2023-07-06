//HOOKS
import { useArtefactsImg } from "modules/artefacts/hooks";
//STYLES
import { Container, Icon } from "./styles/AssetIcon.styled";

const AssetIcon = ({ iconName, isActive, styles }) => {
  const { getAssets } = useArtefactsImg();

  return (
    <Container
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

export default AssetIcon;
