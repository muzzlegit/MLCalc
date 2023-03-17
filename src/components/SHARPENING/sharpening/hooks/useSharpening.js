import { useEffect, useState } from "react";
//DATA
import SHARPENINGS from '../../../../data/Sharpening.json'
import usePlayerContext from "../../../../hooks/usePlayerContext";
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";

export default function useSharpening() {
  const player = usePlayerContext();
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ currentSharpening, setCurrentSharpening ] = useState( SHARPENINGS[ 0 ] );
  const [ value, setValue ] = useState("");

  const onValueChange = ( e ) => {
    if( isNaN( Number( e.currentTarget.value ) ) ) return;
    let currentValue = Number( e.currentTarget.value ) > Math.abs( currentSharpening.maxValue ) ? Math.abs( currentSharpening.maxValue ) : Number( e.currentTarget.value );
    setValue( currentValue );
  };
  const onSharpening = ( e ) => {
    const [ sharpening ] = SHARPENINGS.filter( item => item.id === e.currentTarget.value );
    setCurrentSharpening( { ...sharpening, source: player } );
    setValue("");
  };

  const addSharpeningsToArtefact = ( place, setArtefact, sharpeningsList  ) => {
    const  [ artefact ] = artefacts.filter( item => item.place === place )
    if( !artefact ) return;
    setArtefact( { ...artefact, sharpening: [ ...sharpeningsList ] } );
  };

  //useEFFECT
  useEffect(() => {
    let sharpening = currentSharpening;
    let currentValue = 0;
    value === "" ? currentValue = 0 : currentValue = value;
    sharpening = {...sharpening, value: currentValue };
    if( currentSharpening.maxValue < 0 ) sharpening.value = - sharpening.value;
    if( currentSharpening.measure === "%" ) sharpening.value = sharpening.value / 100;
    setCurrentSharpening( sharpening )
  }, [ currentSharpening, value ]);

  return { SHARPENINGS, currentSharpening, value, onSharpening, onValueChange, addSharpeningsToArtefact };
}