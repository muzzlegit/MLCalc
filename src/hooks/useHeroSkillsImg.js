import { useEffect, useState } from 'react';
//IMG
import heroSkillsImg from '../img/common/heroSkills.png';

export default function useHeroSkillsImg ( index ) {
  const [ skillImg, setSkillImg ] = useState( `url(${ heroSkillsImg }) ${ index }`);

  useEffect(() => {
    setSkillImg( `url(${ heroSkillsImg }) ${ index }` )
  }, [ index ]);

    return skillImg;
};