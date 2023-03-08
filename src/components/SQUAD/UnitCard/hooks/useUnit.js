import { useEffect, useState } from "react";
//HOOKS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";
//DATA
import UNITS from '../../../../data/Units.json';

export default function useUnit( player, unitName ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const [ level, setLevel ] = useState( 1 );
  const [ amount, setValue ] = useState( 0 );

  const {
    troops,
    race,
    attackRateIndex,
  } = playerData;

  const {
    setUnit
  } = playerFunctions;

  const onLevelClick = () => {
    level === 4 ? setLevel( 1 ) : setLevel( prev => prev + 1 );
  };

  const onAmountChange = ( e ) => {
    isNaN( Number( e.currentTarget.value )) || amount < 0 ?
      setValue( 0 ) : setValue( Number( e.currentTarget.value ));
  };

  //USE EFFECT
  useEffect( () => {
    setUnit( 
      player, 
      { 
      ...UNITS[ race ][ unitName ][ `level${ level }` ],
      attack: UNITS[ race ][ unitName ][ `level${ level }` ][ `attack${ attackRateIndex }` ],
      amount
      }
    );
  }, [ race, amount, player, unitName, level, attackRateIndex, setUnit ]);

return { amount, troops, onLevelClick, onAmountChange };
};