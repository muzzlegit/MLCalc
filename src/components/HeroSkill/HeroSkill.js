import { nanoid } from "nanoid";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
import useCommonImg from "../../hooks/useCommonImg";
//IMG
import heroSkillsImg from '../../img/common/heroSkills.png';
//STYLES
import { SkillBox, Skill, LevelButton } from './HeroSkill.styled';


export default function HeroSkill({ player, branch, skillNumber }) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( player );
  const heroSpellIcon = useCommonImg( 'heroSpellIcon' );
  const heroSkillIcon = useCommonImg( 'heroSkillIcon' );
  
  //CONSTS
  const { hero } = playerData;
  const {
    setHeroSkillLevel,
  } = playerFunctions
  const skill = hero.checker ? hero[ branch ][ skillNumber ] : {};

  //HANDLE FUNCTIONS
  const onLevelButtonClick = () => {
    hero[ branch ][ skillNumber ].level >= 5 ?
    setHeroSkillLevel( branch, skillNumber, 1 ) :
    setHeroSkillLevel( branch, skillNumber, hero[ branch ][ skillNumber ].level + 1 );
  }

  return(
    <SkillBox 
      background = { skill.type=== 'spell' ? heroSpellIcon : heroSkillIcon }
      key = { nanoid() }
    >
      { hero.checker ?
        <Skill
          background = { `url(${ heroSkillsImg }) ${ skill.icon }` }
          filter = { skill.battle ? null : 'grayscale(100%) brightness(70%)' }
        >
        </Skill>
      : null }
      { hero.checker && skill.battle ?
        <LevelButton
          type = "button"
          background = { skill.level === 5 ? 'grey' : 'green' }
          onClick = { onLevelButtonClick }
        >
          { `${ skill.level }` }/5
        </LevelButton>        
      : null }
    </SkillBox> 
  )
}