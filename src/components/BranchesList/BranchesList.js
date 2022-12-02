
import { nanoid } from "nanoid";

//DATA
import heroesData from '../../data/Heroes.json';
import commonAssets from '../../data/CommonAssets.json';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";
//IMG
import commonAssetsImg from '../../img/common/CommonAssets.png';
import heroSkillsImg from '../../img/common/heroSkills.png';
//STYLES
import { BranchesBox, BranchBox, SkillsBranch, SkillBox, Skill, ButtonAdd } from "./BranchesList.styled";


export default function BranchesList({ player, branch, toggleModal }) {
    const playerData = usePlayerStoreData( player );
    const playerFunctions = usePlayerStoreFunctions( player );
  //CONSTS
  const {
    hero
  } = playerData;
  const {
    setHeroBranchesId,
    setHeroSkillsBranch
  } = playerFunctions;
  const skillNumbers = ['1','2','3','4','5','6','7'];

  //HANDLES FUNCTIONS
  const onAddButtonClick = ( e ) => {
    setHeroSkillsBranch(
      branch,
      heroesData.find( hero => hero.id === e.currentTarget.id ).skills
    );
    setHeroBranchesId( branch, e.currentTarget.id );
    toggleModal();
  }

  return (
    <BranchesBox>
      { heroesData.map(item => {
        if((item.id === hero.branchesId.skillsBranch1 
          || item.id === hero.branchesId.skillsBranch2
          || item.id === hero.branchesId.skillsBranch3 )) return  null;
        return (
          <BranchBox key={item.id}>
            <p>{item.name}</p>
            <SkillsBranch>
              {skillNumbers.map(number => {
                return (
                  <SkillBox 
                    background={ `url(${ commonAssetsImg }) ${ item.skills[number].type=== 'spell' ? commonAssets.heroSpellIcon : commonAssets.heroSkillIcon }` }
                    key={ nanoid() }
                  >
                  { hero.checker ?
                    <Skill
                      background={ `url(${ heroSkillsImg }) ${ item.skills[number].icon }` }
                      filter = { item.skills[number].battle ? 'none' : 'grayscale(100%) brightness(70%)' }
                    >
                    </Skill>
                  : null }
                  </SkillBox> 
                )
              })
              }
            </SkillsBranch>
            <ButtonAdd
              id={ item.id }
              title={ 'Добавить' }
              type='button'
              onClick={ onAddButtonClick }
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