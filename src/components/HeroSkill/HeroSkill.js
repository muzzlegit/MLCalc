import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//IMG
import commonAssetsImg from '../../img/common/CommonAssets.png';
import heroSkillsImg from '../../img/common/heroSkills.png';
//DATA
import commonAssets from '../../data/CommonAssets.json';
//STYLES
import { SkillBox, Skill, LevelButton } from './HeroSkill.styled';



export default function HeroSkill({ role, branch, skillNumber }) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [level, setLevel] = useState(1);
 
  //CONSTS
  const skill = playerData.hero[branch][skillNumber];
  const {
    hero
  } = playerData  
  const {
    setHeroSkillLevel
  } = playerFunctions

  //HANDLE FUNCTIONS
  const onLevelButtonClick = () => {
    level >= 5 ? setLevel(1) : setLevel( prev => prev += 1)
    setHeroSkillLevel(branch, skillNumber, level);
  }

  return(
    <SkillBox 
      background={ `url(${ commonAssetsImg }) ${ skill.type=== 'spell' ? commonAssets.heroSpellIcon : commonAssets.heroSkillIcon }` }
      key={ nanoid() }
    >
      { hero.checker ?
        <Skill
          background={ `url(${ heroSkillsImg }) ${ skill.icon }` }
          filter = { skill.battle ? 'none' : 'grayscale(100%) brightness(70%)' }
        >
          <LevelButton
            type="button"
            background={ skill.level === 5 ? 'grey' : 'green' }
            onClick={ onLevelButtonClick }
          >
            {`${skill.level}`}/5
          </LevelButton>
        </Skill>
      : null }
    </SkillBox> 
  )
}