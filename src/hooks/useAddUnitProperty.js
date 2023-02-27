//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useAddUnitProperty() {
  const playerFunctions = usePlayerStoreFunctions();

  const { setUnitProperty } = playerFunctions;

  const addUnitProperty= ( player, buff ) => {
    if( buff.effect === "enemy" ) return;
    setUnitProperty( player, buff );
  }

  return addUnitProperty;
};