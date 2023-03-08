//HOOKS
import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";

export default function useAttackRateIndex( player ) {
  const playerFunctions = usePlayerStoreFunctions();
  const { setRateAttack } = playerFunctions;

  //HaNDLE FUNCTIONS
  const onChange = ( e ) => {
    setRateAttack( player, e.target.value )
  };

  return onChange;
};