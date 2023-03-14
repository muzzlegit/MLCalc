//COMPONENTS
import Modal from "../../Modal/Modal";
import SkillsBranch from "../SkillsBranch";
import BranchesList from "../BranchesList";
//HOOKS
import usePlayerContext from "../../../hooks/usePlayerContext";
import useHero from "../hooks/useHero";
import useCommonImg from "../../../hooks/useCommonImg";
import useModalToggle from "../../../hooks/useModalToggle";
import useHeroBranches from "./hooks/useHeroBranches.js";
//STYLES
import { BranchesBox, BranchWrap, ButtonsWrap, Button } from "./styles/HeroBranches.tyled";

export default function HeroBranches() {
  const player = usePlayerContext();
  const { hero, removeHeroBranch } = useHero( player );
  const [ showModal, toggleModal ] = useModalToggle( false );
  const [ currentBranch, openBranchesList ] = useHeroBranches( toggleModal );

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
          <SkillsBranch
            branch = { 'skillsBranch1' } />
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
                onClick = { ( e ) => { removeHeroBranch( e.currentTarget.name, hero[ e.currentTarget.name ] ) } }
                background = { removeButtonImg }
              >
              </Button>
            : null }
          </ButtonsWrap>
          { skillsBranch2 ?
            <SkillsBranch
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
                onClick = { ( e ) => { removeHeroBranch( e.currentTarget.name, hero[ e.currentTarget.name ] ) }  }
                background = { removeButtonImg }
              >
              </Button>
            : null }       
          </ButtonsWrap>
          { skillsBranch3 ?
            <SkillsBranch
              branch = { 'skillsBranch3' }
            />
          : null }
        </BranchWrap>    
      </BranchesBox>
      { 
        showModal &&   
        <Modal
          level = { 2 }
          toggleModal = { toggleModal }
        >
          <BranchesList
            branch = { currentBranch }
            toggleModal = { toggleModal }
          />
        </Modal>
      }      
    </>
  )
}