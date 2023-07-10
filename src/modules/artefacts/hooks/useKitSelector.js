import { useCallback, useState } from "react";
//CONTETX
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";

const useKitSelector = () => {
  const player = usePlayerContext();
  const { kit } = useStore(state => state[player].artefacts);
  const [isKitAncient, setKitIsAncient] = useState(false);
  const [isKitPerfect, setIsKitPerfect] = useState(false);

  const handleKitType = useCallback(typeKey => {
    switch (typeKey) {
      case "ancient":
        setKitIsAncient(prev => !prev);
        break;
      case "perfect":
        setIsKitPerfect(prev => !prev);
        break;
      default:
        break;
    }
  }, []);

  return { kit, isKitAncient, isKitPerfect, handleKitType };
};

export default useKitSelector;
