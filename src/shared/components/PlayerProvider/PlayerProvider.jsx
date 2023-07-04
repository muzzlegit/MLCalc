//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//PROVIDERS
import useBuffsToUnitProvider from "shared/hooks/useBuffsToUnitProvider";

const PlayerProvider = () => {
  const player = usePlayerContext();
  useBuffsToUnitProvider(player);

  return <></>;
};

export default PlayerProvider;
