import { useState, useEffect } from "react";
//HOOKS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";

export default function useTowerSelect ( player, defaultValue ) {
  const playerData = usePlayerStoreData( player );
  const { towers } = playerData;
  const [ isSelected, setIsSelected ] = useState( defaultValue );
  const [ isButtonActive, setIsButtonActive ] = useState( towers.length >= 2 || isSelected === 'fortification' ? true : false );
  
  //HANDLE FUCTIONS
  const onTowerClick = ( e ) => {
    setIsSelected( e.target.id );
    if( e.target.id === 'fortification' )
    {
      setIsButtonActive( false );
    } 
    else 
    {
      if( towers.length >= 2 ) {
        setIsButtonActive( true );
      } 
      else 
      {
        setIsButtonActive( false );
      }
    }
  };

  //USE EFFECTS
  useEffect(() => {
    if( isSelected === 'fortification' )
    {
      setIsButtonActive( false );
    } 
    else 
    {
      if( towers.length >= 2 ) 
      {
        setIsButtonActive( true );
      } 
      else 
      {
        setIsButtonActive( false );
      }
    }
  }, [ towers, isSelected ]);

  return [ isSelected, isButtonActive, onTowerClick ];
}