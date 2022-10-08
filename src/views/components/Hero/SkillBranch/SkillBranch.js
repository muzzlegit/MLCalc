import { nanoid } from "nanoid";
//STORE
import useMainAttacker from "../../../../data/store/useMainAttacker";
//STYLES
import { Branch, SkillBox, Skill, LevelButton } from "./SkillBranch.styled"
//IMAGES
import skills from '../../../../img/common/heroSkills.png';
import commonHeroAssets from '../../../../img/common/CommonHeroAssets.png';

//CONST
const skillNumbers = ['1','2','3','4','5','6','7'];

export default function SkillBranch({
  branch,
  branchName,
  LevelButtonChecker,
  skillChecker,
  setHeroSkillLevel
}){

  return (
    <Branch>
      {
        skillNumbers.map(skillNumber => {
          return (
            <SkillBox 
              background={`url(${commonHeroAssets}) ${branch && branch[skillNumber].type=== 'spell' ? '-606px -391px' : '-606px -6px'}  `}
              key={nanoid()}
            >
              { skillChecker &&
                <Skill
                  background={`url(${skills}) ${branch[skillNumber].icon} `}
                  filter = { branch[skillNumber].battle ? 'none' : 'grayscale(100%) brightness(70%)' }
                >
                  { LevelButtonChecker && branch[skillNumber].battle &&
                    <LevelButton
                      type="button"
                      background={ branch[skillNumber].level === 5 ? 'grey' : 'green' }
                      onClick={() => {
                        setHeroSkillLevel(branchName,`${skillNumber}`)}}
                    >
                      {`${branch[skillNumber].level}`}/5
                    </LevelButton>
                  }
                </Skill>
              }
            </SkillBox>
          )
        })
      }
    </Branch>
  )
}