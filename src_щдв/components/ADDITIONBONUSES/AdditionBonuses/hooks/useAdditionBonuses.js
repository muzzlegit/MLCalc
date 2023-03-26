import { useState } from 'react';
//DATA
import BONUSES_DATA from '../../../../data/Bonuses.json';
//HOOKS
import usePlayerContext from '../../../../hooks/usePlayerContext';

const initialValue = {
  'player': "",
  'ally': "",
  'enemy': "",
}

export default function useAdditionBonuses() {
  const player = usePlayerContext();
  const BONUSES = BONUSES_DATA.filter( item => item.effect !== "player_ally" )
  const [ currentBonus, setCurrentBonus ] = useState( BONUSES[ 0 ] );
  const [ value, setValue ] = useState( initialValue );

  const onBonus = ( e ) => {
    const [ bonus ] = BONUSES.filter( item => item.id === e.currentTarget.value );
    setCurrentBonus( { ...bonus, source: player } );
    setValue("");
  };
  const onValueChange = ( e ) => {
    console.log(e.currentTarget.id )
    if( isNaN( Number( e.currentTarget.value ) ) ) return;
    setValue( { ...value, [ e.currentTarget.id ]: e.currentTarget.value } );
  };

  return { BONUSES, currentBonus, value,  onValueChange, onBonus };
}