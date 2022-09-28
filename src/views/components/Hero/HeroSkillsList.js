import { nanoid } from "nanoid";
//STYLES
import { Branch, SkillBox, Skill } from "./HeroSkillsList.tyled";
//IMAGES
import skills from '../../../img/common/heroSkills.png';
import commonHeroAssets from '../../../img/common/CommonHeroAssets.png';
//CONST
const branches = ['1','2','3','4','5','6','7'];


export default function HeroSkillsList({hero}) {
console.log(hero.checker)
  return(
    <>
      <Branch
        top={ '272px' }
        left={ '353px' }
      >
        { branches.map( item => {
          return (
            <SkillBox 
              background={`url(${commonHeroAssets}) -606px -6px `}
              key={nanoid()}>
              { hero.checker && hero.skillsBranch1 && <Skill
                  background={`url(${skills}) ${hero.skillsBranch1[item].icon} `}
                  filter = { hero.skillsBranch1[item].battle ? 'none' : `grayscale(100%) brightness(70%)` }
                ></Skill>
              }
            </SkillBox>
          )
        })}
      </Branch>
      <Branch
        top={ '272px' }
        left={ '440px' }
      >
        { branches.map( item => {
          return (
            <li key={nanoid()}>
              <SkillBox>
                { hero.checker && hero.skillsBranch2 && <Skill
                  ></Skill>
                }
              </SkillBox>
            </li>
          )
        })}
      </Branch>  
      <Branch
        top={ '272px' }
        left={ '527px' }     
      >
        { branches.map( item => {
          return (
            <li key={nanoid()}>
              <SkillBox>
              { hero.checker && hero.skillsBranch3 && <Skill
                  ></Skill>
                }
              </SkillBox>
            </li>
          )
        })}
    </Branch> 
  </>
  )
}