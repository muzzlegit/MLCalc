//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useApostateChecker( player ) {
  const playerFunctions = usePlayerStoreFunctions();

  const { setApostateValue } = playerFunctions;

   //HaNDLE FUNCTIONS
  const onChange = ( e ) => {
    setApostateValue( player, e.target.value )
  };

  return onChange;
};