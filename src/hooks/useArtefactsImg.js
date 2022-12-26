import { useEffect, useState } from 'react';
//IMG
import artefactsAssets from '../img/common/ArtifactAssets.webp';

export default function useArtefactsImg( index ) {
  const [ artefactImg, setArtefactImg ] = useState( index )

  const getArtefactImg = ( index ) => {
    const img = `url(${ artefactsAssets }) ${ index }`;
    return img;
  };
  
  //USE EFFECTS
  useEffect( () => {
    setArtefactImg( `url(${ artefactsAssets }) ${ index }` )
  }, [ index ]);

  return [ artefactImg, getArtefactImg ];
}