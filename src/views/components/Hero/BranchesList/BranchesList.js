
//COMPONENTS
import SkillBranch from "../SkillBranch/SkillBranch";
//DATA
import heroesData from '../../../../data/Heroes.json'
//STYLES
import { BranchesBox, BranchBox, ButtonAdd } from "./BranchesList.styled";

export default function BranchesList({
    hero,
    branch,
    toggleModal,
    setMainAttackerHeroSkillsBranch
  }) {

  const onAddButtonClick = (e) => {
    setMainAttackerHeroSkillsBranch(
      branch,
      heroesData.find(hero =>hero.id === e.currentTarget.id).skills
    );
    toggleModal();
  }

  return (
    <BranchesBox>
      { heroesData.map(item => {
        if(!(item.class === hero.class && item.id !== hero.id)) {return 0};
        return (
          <BranchBox key={item.id}>
            <p>{item.name}</p>
            <SkillBranch
              branch={item.skills}
              LevelButtonChecker={false}
              skillChecker={true}
            />
            <ButtonAdd
              id={item.id}
              type='button'
              onClick={onAddButtonClick}
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