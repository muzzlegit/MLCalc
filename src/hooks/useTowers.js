import { nanoid } from 'nanoid';
import { useEffect } from "react";
//DATA
import towersData from '../data/Towers.json';
//HOOKS
import usePlayerStoreData from "./usePlayerStoreData";
import usePlayerStoreFunctions from "./usePlayerStoreFunctions";

export default function useTowers ( player, isSelected, level, value ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();

  const { towers, fortifications } = playerData;
  const { addTowers, addFortification, setTowers, setFortification, setUnitProperty } = playerFunctions;

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
      setUnitProperty(
        player,
        {
          name: 'fortifications',
          unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
          property: 'defenseArr',
          childProperty: 'defense',
          value: 0
        }
      );
    }
    else
    {
      let value = 0;
      fortifications.forEach(( fortification ) => {
        value = value + fortification.quantity * fortification.defense;
      });
      setUnitProperty(
        player,
        {
          name: 'fortifications',
          unit: [ 'porter', 'swordsman', 'cavalier', 'flying', 'archer', 'healer', 'mercenary', 'mage' ],
          property: 'defenseArr',
          childProperty: 'defense',
          value: value
        }
      );
    }
  }, [ fortifications, setUnitProperty, player]);

  return [ onAddButtonClick, onRemoveButtonClick ];
}