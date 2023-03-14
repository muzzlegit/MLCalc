import { useState } from "react";
//HOOKS
import useCommonImg from '../../../../hooks/useCommonImg';
//DATA
import runes from '../../../../data/Runes.json';
import usePlayerContext from "../../../../hooks/usePlayerContext";
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";

export default function useRunes( place ) {
  const player = usePlayerContext();
  const playerData = usePlayerStoreData( player );
  const { artefacts } = playerData;
  const [ input, setInput ] = useState( initialInput( getArtefactRunes( place, artefacts ) ));
  const artefactChecker = getArtefactChecker( place, artefacts );

  const runesImages = {
    'Фео': { active: useCommonImg( "Фео" ), disabled: useCommonImg( "Фео_gs" ) },
    'Ур': { active: useCommonImg( "Ур" ), disabled: useCommonImg( "Ур_gs" ) },
    'Торн': { active: useCommonImg( "Торн" ), disabled: useCommonImg( "Торн_gs" ) },
    'Ио': { active: useCommonImg( "Ио" ), disabled: useCommonImg( "Ио_gs" ) },
    'Рад': { active: useCommonImg( "Рад" ), disabled: useCommonImg( "Рад_gs" ) },
    'Тир': { active: useCommonImg( "Тир" ), disabled: useCommonImg( "Тир_gs" ) },
    'Гифу': { active: useCommonImg( "Гифу" ), disabled: useCommonImg( "Гифу_gs" ) },
    'Йар': { active: useCommonImg( "Йар" ), disabled: useCommonImg( "Йар_gs" ) },
    'Хегль': { active: useCommonImg( "Хегль" ), disabled: useCommonImg( "Хегль_gs" ) }
  };

  const onChange = ( e ) => {
    setInput( {
      ...input,
      [ e.currentTarget.id ]: isNaN( Number( e.currentTarget.value )) || Number( e.currentTarget.value ) > 60 
      ? 0 : Number( e.currentTarget.value )
    });
  };

  const addRunesToArtefact = ( place, setArtefact ) => {
    const  [ artefact ] = artefacts.filter( item => item.place === place )
    if( !artefact ) return;
    const filteredRunes = runes
    .filter( rune => input[ rune.name ])
    .map( rune => ({
        ...rune.value[ 0 ],
        value: rune.value[ 0 ].singleValue * input[ rune.name ],
        amount: input[ rune.name ]
    }));
    setArtefact( { ...artefact, runes: [ ...filteredRunes ] } );
  };

  const clearRunes = ( place, setArtefact ) => {
    const  [ artefact ] = artefacts.filter( item => item.place === place )
    if( !artefact ) return;
    setArtefact( { ...artefact, runes: [] } );
    setInput( initialInput([]) )
  };

  return { runes, runesImages, input, artefactChecker, onChange, addRunesToArtefact, clearRunes };
};
//
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
};
function getArtefactRunes( place, artefacts ) {
  const  [ artefact ] = artefacts.filter( item => item.place === place );
  return artefact ? artefact.runes : [];
};
function getArtefactChecker( place, artefacts ) {
  const  [ artefact ] = artefacts.filter( item => item.place === place );
  return artefact ? false : true;
};