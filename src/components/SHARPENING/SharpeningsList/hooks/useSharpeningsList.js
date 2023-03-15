import { useState } from "react";


export default function useSharpeningsList() {
  const [ sharpeningsList, setSharpeningsList ] = useState([]);

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

  return { sharpeningsList, addToSharpeningsList, removeFromSharpeningsList, clearSharpeningsList };
}