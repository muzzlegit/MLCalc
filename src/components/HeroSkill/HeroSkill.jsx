import { nanoid } from "nanoid";
import { useContext } from "react";
//CONTEXT
import PlayerContext from '../../helpers/context';
//HOOKS
import useHeroSkillLevel from "../../hooks/useHeroSkillLevel";
import useCommonImg from "../../hooks/useCommonImg";
import useHeroSkillsImg from "../../hooks/useHeroSkillsImg";
//STYLES
import { SkillBox, Skill, LevelButton } from './HeroSkill.styled';


export default function HeroSkill({ branch, skillNumber }) {
  const player = useContext( PlayerContext );
  const [ skill, heroChecker, onLevelButtonClick ] = useHeroSkillLevel( player, branch, skillNumber );
  const heroSpellIcon = useCommonImg( 'heroSpellIcon' );
  const heroSkillIcon = useCommonImg( 'heroSkillIcon' );
  const skillImg = useHeroSkillsImg( skill.icon );
  
  return(
    <SkillBox 
      background = { skill.type=== 'spell' ? heroSpellIcon : heroSkillIcon }
      key = { nanoid() }
    >
      { heroChecker ?
        <Skill
          background = { skillImg }
          filter = { skill.battle ? null : 'grayscale(100%) brightness(70%)' }
        >
        </Skill>
      : null }
      { heroChecker && skill.battle ?
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