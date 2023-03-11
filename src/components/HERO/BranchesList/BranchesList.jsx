
import { nanoid } from "nanoid";
//DATA
import commonAssets from '../../../data/CommonAssets.json';
//HOOKS
import useHero from "../hooks/useHero.js";
//IMG
import commonAssetsImg from '../../../img/common/CommonAssets.png';
import heroSkillsImg from '../../../img/common/heroSkills.png';
//STYLES
import { BranchesBox, BranchBox, SkillsBranch, SkillBox, Skill, ButtonAdd } from "./styles/BranchesList.styled";

export default function BranchesList({ player, branch, toggleModal }) {
  const { hero, heroesList, addHeroBranch } = useHero( player );

  const skillNumbers = ['1','2','3','4','5','6','7'];

  return (
    <BranchesBox>
      { heroesList.map( item => {
        if((item.id === hero.branchesId.skillsBranch1 
          || item.id === hero.branchesId.skillsBranch2
          || item.id === hero.branchesId.skillsBranch3 )) return  null;
        return (
          <BranchBox key={ item.id }>
            <p>{item.name}</p>
            <SkillsBranch>
              { skillNumbers.map(number => {
                return (
                  <SkillBox 
                    background={ `url(${ commonAssetsImg }) ${ item.skills[ number ].type=== 'spell' ? commonAssets.heroSpellIcon : commonAssets.heroSkillIcon }` }
                    key={ nanoid() }
                  >
                  { hero.checker ?
                    <Skill
                      background = { `url(${ heroSkillsImg }) ${ item.skills[ number ].icon }` }
                      filter = { item.skills[ number ].battle ? 'none' : 'grayscale(100%) brightness(70%)' }
                    >
                    </Skill>
                  : null }
                  </SkillBox> 
                )})
              }
            </SkillsBranch>
            <ButtonAdd
              id = { item.id }
              title = { 'Добавить' }
              type = 'button'
              onClick = { ( e ) => { addHeroBranch( branch, e.currentTarget.id); toggleModal() } }
            >
              Добавить
            </ButtonAdd>
          </BranchBox>
        )
      })
      }
    </BranchesBox>
  )
}