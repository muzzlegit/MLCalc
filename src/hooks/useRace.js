//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";
//HELPERS
import raceLand from "../helpers/raceLands";

export default function useRace( player ) {
  const playerFunctions = usePlayerStoreFunctions();

  const { setRace, setHomeLand } = playerFunctions;

   //HaNDLE FUNCTIONS
  const onChange = ( e ) => {
    setRace( player, e.currentTarget.value );
    setHomeLand( player, raceLand( e.currentTarget.value ));
  };

  return onChange;
};