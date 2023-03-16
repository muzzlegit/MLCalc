import { useEffect, useState } from "react";

export default function useSharpeningsList( currentSharpenings ) {
  const [ sharpeningsList, setSharpeningsList ] = useState( currentSharpenings );

  const addToSharpeningsList = ( sharpening ) => {
    if( !sharpening.value ) return;
    const newList = sharpeningsList.filter( item => item.id !== sharpening.id );
    setSharpeningsList([ ...newList, sharpening ]);
  };
  const removeFromSharpeningsList = ( e ) => {
    const newList = sharpeningsList.filter( item => item.id !== e.currentTarget.id );
    setSharpeningsList( prev => prev = [ ...newList] );
  };
  const clearSharpeningsList = () => {
   if( sharpeningsList.length ) setSharpeningsList([]);
  };
  //USE EFFECT
  useEffect(() => {
    if( !currentSharpenings.length ) setSharpeningsList([]);
  }, [ currentSharpenings ]);
  
  return { sharpeningsList, addToSharpeningsList, removeFromSharpeningsList, clearSharpeningsList };
}