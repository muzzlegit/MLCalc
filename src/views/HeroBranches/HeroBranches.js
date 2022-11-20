import { useState } from "react";
//COMPONENTS
import Modal from "../../components/Modal/Modal";
import SkillsBranch from "../../components/SkillsBranch/SkillsBranch";
import BranchesList from "../BranchesList/BranchesList";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//DATA
import commonAssets from '../../data/CommonAssets.json';
//IMG
import commonImg from '../../img/common/CommonAssets.png';
//STYLES
import { BranchesBox, BranchWrap, ButtonsWrap, Button } from "./HeroBranches.tyled";

export default function HeroBranches({ role }) {
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [showModal, setShowModal] = useState(false);
  const [branch, setBranch] = useState('');

  //CONSTS
  const {
    hero
  } = playerData;
  const {
    setHeroSkillsBranch,
    setHeroBranchesId,
    setUnitProperty
  } = playerFunctions;
  const addButtonImg = `url(${commonImg}) ${commonAssets.addButton}`;
  const removeButtonImg = `url(${commonImg}) ${commonAssets.removeButton}`;
  const choiceButtonImg = `url(${commonImg}) ${commonAssets.choiceButton}`;

  //HANLE FICTIONS
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const addBranch = (e) => {
    setBranch(e.currentTarget.name);
    toggleModal();
  }
  
  const removeBranch = (e) => {
    const currentBranch = e.currentTarget.name;
    if(currentBranch) {
      for (const key in hero[currentBranch]) {
        console.log(hero[currentBranch][key].battle)
        if (hero[currentBranch][key].battle) {
          setUnitProperty({ ...hero[currentBranch][key].value[hero[currentBranch][key].level - 1], value: 0 });
        }
      }
    }
    setHeroSkillsBranch(currentBranch, false);
    setHeroBranchesId(currentBranch, false);
  }

  return(
    <>
      <BranchesBox>
        <BranchWrap
          marginTop={ '28px' }
        >
        {
          <SkillsBranch
            role={ role }
            branch={ 'skillsBranch1' }
          />
        }
        </BranchWrap>
        <BranchWrap>
          <ButtonsWrap>
            <Button
              type='button'
              title={ !hero.skillsBranch2 ? 'Добавить' : 'Изменить' }
              name="skillsBranch2"
              onClick={ addBranch }
              background={ !hero.skillsBranch2 ? addButtonImg : choiceButtonImg }
              filter={ !hero.skillsBranch1 ? 'grayscale(100%) brightness(70%)': null }
              disabled={ hero.skillsBranch1 ? false : true }
            >
            </Button>
            { hero.skillsBranch2 ?
              <Button
                type='button'
                title='Удалить'
                name="skillsBranch2"
                onClick={ removeBranch }
                background={ removeButtonImg }
              >
              </Button>
            : null }
          </ButtonsWrap>
          { hero.skillsBranch2 ?
            <SkillsBranch
              role={ role }
              branch={ 'skillsBranch2' }
            />
          : null }
        </BranchWrap>
        <BranchWrap>
          <ButtonsWrap>
          <Button
            type='button'
            title={ !hero.skillsBranch2 ? 'Добавить' : 'Изменить' }
            name="skillsBranch3"
            onClick={ addBranch }
            background={ !hero.skillsBranch3 ? addButtonImg : choiceButtonImg }
            filter={ !hero.skillsBranch2 ? 'grayscale(100%) brightness(70%)': null }
            disabled={ hero.skillsBranch2 ? false : true }
          >
          </Button>  
          { hero.skillsBranch3 ?
              <Button
                type='button'
                title='Удалить'
                name="skillsBranch3"
                onClick={ addBranch }
                background={ removeButtonImg }
              >
              </Button>
            : null }       
          </ButtonsWrap>
          { hero.skillsBranch3 ?
            <SkillsBranch
              role={ role }
              branch={ 'skillsBranch3' }
            />
          : null }
        </BranchWrap>    
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