import { useEffect, useState } from 'react';
//DATA
import commonImgData from '../data/CommonAssets.json'
//IMAGES
import commonImg from '../img/common/CommonAssets.png';


export default function useCommonImg( index ) {
  const [ img, setImg ] = useState( `url(${ commonImg }) ${ commonImgData[index] }` );

  //USE EFFECT
  useEffect(() => {
    setImg( `url( ${ commonImg } ) ${ commonImgData[ index ] }` )
  }, [ index ]);

  return img;
}