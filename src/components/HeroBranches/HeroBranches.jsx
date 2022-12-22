import { useContext } from "react";
//CONTEXT
import PlayerContext from '../../helpers/context';
//COMPONENTS
import Modal from "../Modal/Modal";
import SkillsBranch from "../SkillsBranch/SkillsBranch";
import BranchesList from "../BranchesList";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import useCommonImg from "../../hooks/useCommonImg";
import useModalToggle from "../../hooks/useModalToggle";
import useHeroBranchesList from "../../hooks/useHeroBranchesList";
//STYLES
import { BranchesBox, BranchWrap, ButtonsWrap, Button } from "./HeroBranches.tyled";
import useRemoveHeroBranch from "../../hooks/useRemoveHeroBranch";



export default function HeroBranches() {
  const player = useContext( PlayerContext );
  const playerData = usePlayerStoreData( player );
  const [ showModal, toggleModal ] = useModalToggle( false );
  const [ currentBranch, openBranchesList ] = useHeroBranchesList( player, toggleModal )
  const removeBranch = useRemoveHeroBranch( player );

  //CONSTS
  const {
    hero
  } = playerData;
  const { skillsBranch1, skillsBranch2, skillsBranch3 } = hero;
 
  const addButtonImg = useCommonImg( 'addButton' );
  const removeButtonImg = useCommonImg( 'removeButton' );
  const choiceButtonImg = useCommonImg( 'choiceButton' );

  return(
    <>
      <BranchesBox>
        <BranchWrap
          marginTop = { '28px' }
        >
        {
          <SkillsBranch branch = { 'skillsBranch1' } />
        }
        </BranchWrap>
        <BranchWrap>
          <ButtonsWrap>
            <Button
              type = 'button'
              title = { !skillsBranch2 ? 'Добавить' : 'Изменить' }
              name = "skillsBranch2"
              onClick = { openBranchesList }
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
                onClick = { ( e ) => { removeBranch( e.currentTarget.name ) } }
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
            onClick = { openBranchesList }
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
                onClick = { ( e ) => { removeBranch( e.currentTarget.name ) }  }
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
            branch = { currentBranch }
            toggleModal = { toggleModal }
          />
        </Modal>
      }      
    </>
  )
}