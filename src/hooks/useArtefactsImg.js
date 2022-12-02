import { useEffect, useState } from 'react';
//IMG
import artefactsAssets from '../img/common/ArtifactAssets.png';

export default function useArtefactsImg( index ) {
  const [ artefactImg, setArtefactImg ] = useState( `url(${ artefactsAssets }) ${ index }` )

  //USE EFFECT
  useEffect(() => {
    setArtefactImg( `url(${ artefactsAssets }) ${ index }` )
  }, [ index ]);

  return artefactImg;
}