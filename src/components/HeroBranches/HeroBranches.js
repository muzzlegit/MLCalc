import { useState } from "react";
//COMPONENTS
import Modal from "../../components/Modal/Modal";
import SkillsBranch from "../../components/SkillsBranch/SkillsBranch";
import BranchesList from "../BranchesList";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from "../../hooks/usePlayerStoreFunctions";

//STYLES
import { BranchesBox, BranchWrap, ButtonsWrap, Button } from "./HeroBranches.tyled";
import useCommonImg from "../../hooks/useCommonImg";


export default function HeroBranches({ player }) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions( player );
  const [ showModal, setShowModal ] = useState( false );
  const [ branch, setBranch ] = useState( '' );

  //CONSTS
  const {
    hero
  } = playerData;
  const { skillsBranch1, skillsBranch2, skillsBranch3 } = hero;
  const {
    setHeroSkillsBranch,
    setHeroBranchesId,
  } = playerFunctions;
  const addButtonImg = useCommonImg( 'addButton' );
  const removeButtonImg = useCommonImg( 'removeButton' );
  const choiceButtonImg = useCommonImg( 'choiceButton' );

  //HANLE FICTIONS
  const toggleModal = () => {
    setShowModal( !showModal );
  }

  const addBranch = ( e ) => {
    setBranch( e.currentTarget.name );
    toggleModal();
  }
  
  const removeBranch = ( e ) => {
    const currentBranch = e.currentTarget.name;
    setHeroSkillsBranch( currentBranch, false );
    setHeroBranchesId( currentBranch, false );
  }

  return(
    <>
      <BranchesBox>
        <BranchWrap
          marginTop = { '28px' }
        >
        {
          <SkillsBranch
            player = { player }
            branch = { 'skillsBranch1' }
          />
        }
        </BranchWrap>
        <BranchWrap>
          <ButtonsWrap>
            <Button
              type = 'button'
              title = { !skillsBranch2 ? 'Добавить' : 'Изменить' }
              name = "skillsBranch2"
              onClick = { addBranch }
              background = { !skillsBranch2 ? addButtonImg : choiceButtonImg }
              filter = { !skillsBranch1 ? 'grayscale(100%) brightness(70%)': null }
              disabled = { skillsBranch1 ? false : true }
            >
            </Button>
            { skillsBranch2 ?
              <Button
                type = 'button'
                title = 'Удалить'
                name = "skillsBranch2"
                onClick = { removeBranch }
                background = { removeButtonImg }
              >
              </Button>
            : null }
          </ButtonsWrap>
          { skillsBranch2 ?
            <SkillsBranch
              role = { player }
              branch = { 'skillsBranch2' }
            />
          : null }
        </BranchWrap>
        <BranchWrap>
          <ButtonsWrap>
          <Button
            type = 'button'
            title = { !skillsBranch2 ? 'Добавить' : 'Изменить' }
            name = "skillsBranch3"
            onClick = { addBranch }
            background = { !skillsBranch3 ? addButtonImg : choiceButtonImg }
            filter = { !skillsBranch2 ? 'grayscale(100%) brightness(70%)': null }
            disabled = { skillsBranch2 ? false : true }
          >
          </Button>  
          { skillsBranch3 ?
              <Button
                type = 'button'
                title = 'Удалить'
                name = "skillsBranch3"
                onClick = { removeBranch }
                background = { removeButtonImg }
              >
              </Button>
            : null }       
          </ButtonsWrap>
          { skillsBranch3 ?
            <SkillsBranch
              role = { player }
              branch = { 'skillsBranch3' }
            />
          : null }
        </BranchWrap>    
      </BranchesBox>
      { showModal &&
        <Modal
          level = { 2 }
          toggleModal = { toggleModal }
        >
          <BranchesList
            player = { player }
            branch = { branch }
            toggleModal = { toggleModal }
          />
        </Modal>
      }      
    </>
  )
}