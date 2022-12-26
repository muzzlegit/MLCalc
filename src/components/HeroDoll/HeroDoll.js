import { useContext, useState } from "react";
import { nanoid } from "nanoid";
//CONTEXT
import PlayerContext from '../../helpers/context';
//COMPONENTS
import Modal from "../Modal/Modal";
import ArtCell from '../ArtCell';
import HeroesList from "../HeroesList";
import HeroBranches from '../HeroBranches/HeroBranches';
import ArtefactsSelector from "../ArtefactsSelector/ArtefactsSelector";
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import useHeroImg from "../../hooks/useHeroImg";
import useDallArtefacts from "../../hooks/useDallArtefacts";
//STYLES
import { Wrap, DollWrap, BranchesWrap, HeroWrap, HeroBox, ArttefactWrap} from "./HeroDoll.styled"
import useCommonImg from "../../hooks/useCommonImg";
import CloseButton from "../CloseButton/CloseButton";
import useModalToggle from "../../hooks/useModalToggle";


export default function HeroDall({ toggleModal }){
  const player = useContext( PlayerContext );
  const dallArts = useDallArtefacts( player );
  const playerData = usePlayerStoreData( player );
  const [ heroesListModal, toggleHeroesListModal ] = useModalToggle( false );
  const [ artefactstModal, toggleArtefactstModal ] = useModalToggle( false );
  const [ heroImg, heroBackground ] = useHeroImg( player );

  const [ currentArtefactId, setCurrentArtefactId ] = useState( false );
  const [ currentArtefactPlace, setCurrentArtefactPlace ] = useState( false );

  //CONSTS
  const {
    hero
  } = playerData;
  const artFrameImg = useCommonImg( 'artFrame' );
  

  const openArtefactsWindow = ( e ) => {
    e.currentTarget.id === '' ? setCurrentArtefactId( false ) : setCurrentArtefactId( e.currentTarget.id );
    setCurrentArtefactPlace( e.currentTarget.attributes.name.value );
    toggleArtefactstModal();
  }

  return (
    <Wrap>
      <CloseButton
        closeButtonFn = { toggleModal }
        top = { '-12px' }
        right = { '24px' }
      />
      <DollWrap>
        <HeroWrap onClick = { toggleHeroesListModal } >
          <HeroBox
            background = { hero.checker ? heroImg : heroBackground }
            title = { hero.name }
          >
          </HeroBox>
        </HeroWrap>
        {
          dallArts.map(art => {
            return(
              <ArttefactWrap
                key = { nanoid() }
                id = { art.art.id }
                title = { art.art.name ? art.art.name : art.place }
                name = { art.place }
                onClick = { openArtefactsWindow }
                top = { art.top }
                left = { art.left }
                background = { artFrameImg }
              >
                <ArtCell
                  key = { nanoid() }
                  artefact = { art.art }
                />
              </ArttefactWrap>
            )
          })
        }
      </DollWrap>
      <BranchesWrap>
        <HeroBranches />
      </BranchesWrap>
      { heroesListModal &&
        <Modal
          level = { 1 }
          toggleModal = { toggleHeroesListModal }
        >
          <HeroesList toggleModal = { toggleHeroesListModal } />
        </Modal>
      }
      { artefactstModal &&
        <Modal
          level = { 1 }
          toggleModal = { toggleArtefactstModal }
        >
          <ArtefactsSelector
            player = { player }
            place = { currentArtefactPlace }
            artefactId = { currentArtefactId }
            toggleModal = { toggleArtefactstModal }
          />
        </Modal>
      }
    </Wrap>

  )
}