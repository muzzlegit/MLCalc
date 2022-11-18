import { useState } from "react";
//COMPONENTS
import Modal from "../../components/Modal/Modal";
import SkillsBranch from "../../components/SkillsBranch/SkillsBranch";
import BranchesList from "../BranchesList/BranchesList";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//STYLES
import { BranchesBox, Branchwrap } from "./HeroBranches.tyled";

export default function HeroBranches({ role }) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [showModal, setShowModal] = useState(false);
  const [branch, setBranch] = useState('');

  //CONSTS
  const {
    hero
  } = playerData

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addBranch = (e) => {
    setBranch(e.currentTarget.name);

    toggleModal();
  }

  return(
    <>
      <BranchesBox>
        <Branchwrap
          marginTop={ '28px' }
        >
        {
          <SkillsBranch
            role={ role }
            branch={ 'skillsBranch1' }
          />
        }
        </Branchwrap>
        <Branchwrap>
          <button
            type='button'
            name="skillsBranch2"
            onClick={ addBranch }
            disabled={ hero.checker ? false : true }
          >
            { !hero.skillsBranch2 ? 'Добавить' : 'Изменить'}
          </button>
          { hero.skillsBranch2 ?
            <SkillsBranch
              role={ role }
              branch={ 'skillsBranch2' }
            />
          : null }
        </Branchwrap>
        <Branchwrap>
          <button
            type='button'
            name="skillsBranch3"
            onClick={ addBranch }
            disabled={ hero.checker ? false : true }
          >
            { !hero.skillsBranch3 ? 'Добавить' : 'Изменить'}
          </button>
          { hero.skillsBranch3 ?
            <SkillsBranch
              role={ role }
              branch={ 'skillsBranch3' }
            />
          : null }
        </Branchwrap>    
      </BranchesBox>
      { showModal &&
        <Modal
          level={ 2 }
          toggleModal={ toggleModal }
        >
          <BranchesList
            role={ role }
            branch={ branch }
            toggleModal={ toggleModal }
          />
        </Modal>
      }      
    </>
  )
}