import { useState } from "react";
//COMPONENTS
// import Modal from "../../Modal/Modal";
import SkillBranch from "../../components/SkillsBranch/SkillsBranch";
import BranchesList from "../BranchesList/BranchesList";
//STYLES
import { BranchesBox } from "./HeroBranches.tyled";

export default function HeroBranches({
    hero,
    setHeroSkillsBranch,
    setHeroSkillLevel
  }) {
  const [showModal, setShowModal] = useState(false);
  const [ buttonTitle, setButtonTitle ] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addBranch = (e) => {
    setButtonTitle(e.currentTarget.title);
    toggleModal();
  }

  return(
    <>
      <BranchesBox>
        {
          <SkillBranch
            branch={ hero.skillsBranch1 }
            branchName='skillsBranch1'
            setHeroSkillLevel={ setHeroSkillLevel }
            LevelButtonChecker={ true }
            skillChecker={ hero.checker }
          />
        }
        {hero.checker && hero.skillsBranch2 &&
          <SkillBranch
            branch={ hero.skillsBranch2 }
            branchName='skillsBranch2'
            setHeroSkillLevel={ setHeroSkillLevel }
            LevelButtonChecker={ true }
            skillChecker={ true }
          />
        }
        <button
          type='button'
          title="skillsBranch2"
          onClick={ addBranch }
          disabled={ hero.checker ? false : true }
        >
          { !hero.skillsBranch2 ? 'Добавить' : 'Изменить'}
        </button>
        { hero.checker && hero.skillsBranch3 &&
          <SkillBranch
            branch={ hero.skillsBranch3 }
            branchName='skillsBranch3'
            setHeroSkillLevel={ setHeroSkillLevel }
            LevelButtonChecker={ true }
            skillChecker={ true }
          />
        }
        <button
          type='button'
          title="skillsBranch3"
          onClick={ addBranch }
          disabled={ hero.checker ? false : true }
        >
          { !hero.skillsBranch3 ? 'Добавить' : 'Изменить'}
        </button>      
      </BranchesBox>
      {/* { showModal &&
        <Modal
          level={ 1 }
          toggleModal={ toggleModal }
        >
          <BranchesList
            hero={ hero }
            branch={ buttonTitle }
            toggleModal={ toggleModal }
            setMainAttackerHeroSkillsBranch={ setHeroSkillsBranch }
          />
        </Modal>
      }       */}
    </>
  )
}