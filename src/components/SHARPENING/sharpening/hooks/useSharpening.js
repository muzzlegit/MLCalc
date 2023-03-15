import { useEffect, useState } from "react";
//DATA
import SHARPENINGS from '../../../../data/Sharpening.json'

export default function useSharpening() {
  const [ currentSharpening, setCurrentSharpening ] = useState( SHARPENINGS[ 0 ] );
  const [ value, setValue ] = useState("");

  const onValueChange = ( e ) => {
    if( isNaN( Number( e.currentTarget.value ) ) ) return;
    let currentValue = Number( e.currentTarget.value ) > Math.abs(currentSharpening.maxValue) ? Math.abs(currentSharpening.maxValue) : Number( e.currentTarget.value );
    setValue( currentValue );
  };
  const onSharpening = ( e ) => {
    const [ sharpening ] = SHARPENINGS.filter( item => item.id === e.currentTarget.value );
    setCurrentSharpening( sharpening );
    setValue("");
  };

  const addSharpeningToArtefact = ( addToSharpeningsList ) => {
    let sharpening = currentSharpening;
    sharpening.value = value;
    if( currentSharpening.maxValue < 0 ) sharpening.value = - sharpening.value;
    if( currentSharpening.measure === "%" ) sharpening.value = sharpening.value / 100;
    addToSharpeningsList( sharpening );
  };
  //useEFFECT
  useEffect(() => {
    let sharpening = currentSharpening;
    sharpening.value = value;
    if( currentSharpening.maxValue < 0 ) sharpening.value = - sharpening.value;
    if( currentSharpening.measure === "%" ) sharpening.value = sharpening.value / 100;
  }, [ currentSharpening, value ]);

  return { SHARPENINGS, currentSharpening, value, onSharpening, onValueChange, addSharpeningToArtefact };
}