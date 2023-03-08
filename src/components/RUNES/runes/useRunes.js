import { useState } from "react";
//HOOKS
import useCommonImg from '../../../hooks/useCommonImg';
//DATA
import runes from '../../../data/Runes.json';

export default function useRunes( player, artefactRunes ) {
  const [ input, setInput ] = useState( initialInput( []  ));

  const runesImages = {
    'Фео': useCommonImg( "Фео" ),
    'Ур': useCommonImg( "Ур" ),
    'Торн': useCommonImg( "Торн" ),
    'Ио': useCommonImg( "Ио" ),
    'Рад': useCommonImg( "Рад" ),
    'Тир': useCommonImg( "Тир" ),
    'Гифу': useCommonImg( "Гифу" ),
    'Йар': useCommonImg( "Йар" ),
    'Хегль': useCommonImg( "Хегль" )
  }


  const onChange = ( e ) => {
    setInput( {
      ...input,
      [ e.currentTarget.id ]: isNaN( Number( e.currentTarget.value )) || Number( e.currentTarget.value ) > 60 
      ? 0 : Number( e.currentTarget.value )
    });
  };

  const addRunesToArtefact = ( artefact, setArtefact ) => {
    if( !artefact.runes ) return;
    let newArtefact = artefact;
    let artefactRunes = runes.filter( rune => input[ rune.name ] );
    artefactRunes.forEach( rune => rune.value[ 0 ] = { ...rune.value[ 0 ] , value: rune.value[ 0 ].value * input[ rune.name ], amount: input[ rune.name ] })

    newArtefact = { ...newArtefact, runes: artefactRunes };
    console.log(newArtefact)
    setArtefact( newArtefact );
  }

  return { runes, runesImages, input, onChange, addRunesToArtefact };
}
function initialInput( runes ) {
  let inputRunes = 
  { 
    "Фео": 0,
    "Ур": 0,
    "Торн": 0,
    "Ио": 0,
    "Рад": 0,
    "Тир": 0,
    "Гифу": 0,
    "Йар'": 0,
    "Хегль": 0
  };
  if( !runes.length ) return inputRunes;
  runes.forEach( rune => inputRunes[ rune.name ] = rune.amount );
  return inputRunes
}