import { useState } from "react";
//HOOKS
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useAllies() {
  const playerFunctions = usePlayerStoreFunctions();
  const [ attackerAllyChecker, setAttackerAllyChecker ] = useState( false );
  const [ firstDefenderAllyChecker, setFirstDefenderAllyChecker ] = useState( false );
  const [ secondDefenderAllyChecker, setSecondDefenderAllyChecker ] = useState( false );
  const { setAlliesChecker } = playerFunctions;

  const setChecker = ( player ) => {
    switch ( player ) {
      case "mainAttacker":
        setAttackerAllyChecker( true );
        setAlliesChecker( "attackerAlly" );
        break;
      case "mainDefender":
        if( firstDefenderAllyChecker && !secondDefenderAllyChecker )
        {
          setAlliesChecker( "secondDefenderAlly" );
          setSecondDefenderAllyChecker( true )
        } 
        else
        {
          setAlliesChecker( "firstDefenderAlly" ); 
          setFirstDefenderAllyChecker( true );
        } 
        break;  
      case "attackerAlly":
        setAttackerAllyChecker( false );
        setAlliesChecker( "attackerAlly" );
        break;
      case "firstDefenderAlly":
        setFirstDefenderAllyChecker( false );
        setAlliesChecker( "firstDefenderAlly" );
        break;
      case "secondDefenderAlly":
        setSecondDefenderAllyChecker( false );
        setAlliesChecker( "secondDefenderAlly" );
        break;       
      default:
        break;
    }
  }

  return { attackerAllyChecker, firstDefenderAllyChecker, secondDefenderAllyChecker, setChecker };
}