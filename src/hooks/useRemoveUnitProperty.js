//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";


export default function useRemoveUnitProperty() {
  const playerFunctions = usePlayerStoreFunctions();

  const { setUnitProperty } = playerFunctions;

  const removeUnitProperty= ( player, buff ) => {
    if( buff.effect === "enemy" ) return;
    setUnitProperty( player, { ...buff, value: 0 } );
  };

  return removeUnitProperty;
};