import { nanoid } from "nanoid";
//COMPONENTS
import HeroSkill from '../HeroSkill/HeroSkill';
//STYLES
import { Branch } from "./SkillsBranch.styled"

//CONST
const skillNumbers = ['1','2','3','4','5','6','7'];

export default function SkillsBranch({ branch, role }){

  return (
    <Branch
      key={ nanoid() }
    >
      {
        skillNumbers.map(skillNumber => {
          return (
            <HeroSkill
              key={ nanoid() }
              role={ role }
              branch={ branch }
              skillNumber={ skillNumber }
            >
            </HeroSkill>
          )
          
        })
      }
    </Branch>
  )
}