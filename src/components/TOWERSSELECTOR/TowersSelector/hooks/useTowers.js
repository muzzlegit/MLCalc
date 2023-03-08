import { nanoid } from 'nanoid';
//HOOKS
import { useEffect } from "react";
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";
//DATA
import towersData from '../../../../data/Towers.json';

//CONST
const BUFF = {
  id: "wRPzU5K430O0kKMkKYbaXA",
  name: 'fortifications',
  homeLand: "all",
  unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
  property: 'defenseArr',
  childProperty: 'defense'
}

export default function useTowers ( player, isSelected, level, value ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const { towers, fortifications } = playerData;
  const { addTowers, addFortification, setTowers, setFortification, addBuff, removeBuff } = playerFunctions;

  //HANDLES
  const onAddButtonClick = () => {
    if ( isSelected !== 'fortification' && towers.length < 2 )
    {
      addTowers( player, { ...towersData[ `${ isSelected }` ][ `level${ level }` ], type: `${ isSelected }`, id: nanoid() });
    } 
    else 
    {
      addFortification( player, { ...towersData[ `${ isSelected }` ][ `level${ level }` ], type: `${ isSelected }`, id: nanoid() }, value );
    }
  };

  const onRemoveButtonClick = () => {
    setTowers( player, [] );
    setFortification( player, [] );
  };

  //USE EFFECT
  useEffect(() => {
    if( fortifications.length === 0 )
    {
      removeBuff( player, BUFF );
    }
    else
    {
      let value = 0;
      fortifications.forEach(( fortification ) => {
        value = value + fortification.quantity * fortification.defense;
      });
      addBuff( player, {  ...BUFF, value: value } );
    }
  }, [ fortifications, addBuff, removeBuff, player ]);

  return [ onAddButtonClick, onRemoveButtonClick ];
}