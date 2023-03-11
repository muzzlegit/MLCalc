import { nanoid } from "nanoid";
//HOOKS
import useHero from "../../../HERO/hooks/useHero.js";
import useCommonImg from "../../../../hooks/useCommonImg.js";
import useHeroSkillsImg from "../../hooks/useHeroSkillsImg.js";
//STYLES
import { SkillBox, Skill, LevelButton } from './styles/HeroSkill.styled';


export default function HeroSkill({ player, branch, skillNumber }) {
  const { hero, setSkillLevel } = useHero( player );
  const skill = hero.checker ? hero[ branch ][ skillNumber ] : {};

  const heroSpellIcon = useCommonImg( 'heroSpellIcon' );
  const heroSkillIcon = useCommonImg( 'heroSkillIcon' );
  const skillImg = useHeroSkillsImg( skill.icon );
  

  return(
    <SkillBox 
      background = { skill.type=== 'spell' ? heroSpellIcon : heroSkillIcon }
      key = { nanoid() }
    >
      { hero.checker ?
        <Skill
          background = { skillImg }
          filter = { skill.battle ? null : 'grayscale(100%) brightness(70%)' }
        >
        </Skill>
      : null }
      { hero.checker && skill.battle ?
        <LevelButton
          type = "button"
          background = { skill.level === 5 ? 'wheat' : 'green' }
          onClick = { () => { setSkillLevel( branch, skillNumber ) } }
        >
          { `${ skill.level }` }/5
        </LevelButton>        
      : null }
    </SkillBox> 
  )
}