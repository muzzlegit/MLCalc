//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useAddUnitProperty() {
  const playerFunctions = usePlayerStoreFunctions();

  const { setUnitProperty } = playerFunctions;

  const addUnitProperty= ( player, buff ) => {
    setUnitProperty( player, buff );
  }

  return addUnitProperty;
};