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
  
  //CONSTS
  const {
    hero
  } = playerData  
  const {
    setHeroSkillLevel,
    setUnitProperty
  } = playerFunctions
  const skill = hero.checker ? hero[branch][skillNumber] : {};

  //HANDLE FUNCTIONS
  const onLevelButtonClick = () => {

    // console.log('!!',hero[branch][skillNumber]);
    hero[branch][skillNumber].level >= 5 ? setHeroSkillLevel(branch, skillNumber, 1) : setHeroSkillLevel(branch, skillNumber, hero[branch][skillNumber].level + 1 )
    setUnitProperty(skill.value[skill.level - 1])
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
        </Skill>
      : null }
      { hero.checker && skill.battle ?
        <LevelButton
          type="button"
          background={ skill.level === 5 ? 'grey' : 'green' }
          onClick={ onLevelButtonClick }
        >
          {`${skill.level}`}/5
        </LevelButton>        
      : null }
    </SkillBox> 
  )
}