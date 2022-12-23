import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
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

//COSTS
const ARTS = [
  { place: 'head', top: '80px', left: '110px', art: false },
  { place: 'armor', top: '180px', left: '110px', art: false },
  { place: 'belt', top: '280px', left: '110px', art: false },
  { place: 'pants', top: '380px', left: '110px', art: false },
  { place: 'boots', top: '480px', left: '110px', art: false },
  { place: 'neck', top: '130px', left: '20px', art: false },
  { place: 'bracers', top: '230px', left: '20px', art: false },
  { place: 'ring', top: '330px', left: '20px', art: false },
  { place: 'rightHand', top: '430px', left: '20px', art: false },
  { place: 'bag', top: '200px', left: '200px', art: false },
  { place: 'back', top: '300px', left: '200px', art: false },
  { place: 'leftHand', top: '400px', left: '200px', art: false },
]

export default function HeroDall({ player, toggleModal }){
  const playerData = usePlayerStoreData( player );
  const [ heroImg, heroBackground ] = useHeroImg( player );
  const [ heroesListModal, setHeroesListModal ] = useState( false );
  const [ artefactstModal, setArtefactsModal ] = useState( false );
  const [ currentArtefactId, setCurrentArtefactId ] = useState( false );
  const [ currentArtefactPlace, setCurrentArtefactPlace ] = useState( false );
 
  //CONSTS
  const {
    hero,
    artefacts,
  } = playerData;
  const artFrameImg = useCommonImg( 'artFrame' );
  const dallArts = useDallArtefacts( artefacts );

  //HANDLE FUNCTIONS
  const toggleHeroesListModal = () => {
    setHeroesListModal( prev => !prev );
  }

  const toggleArtefactstModal = () => {
    setArtefactsModal( prev => !prev );
  } 

  const openArtefactsWindow = ( e ) => {
    e.currentTarget.id === '' ? setCurrentArtefactId( false ) : setCurrentArtefactId( e.currentTarget.id );
    setCurrentArtefactPlace( e.currentTarget.attributes.name.value );
    toggleArtefactstModal();
  }

  return (
    <Wrap>
      <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }
      />
      <DollWrap>
        <HeroWrap
          onClick = { toggleHeroesListModal }
        >
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
                name = { art.art.place ? art.art.place : art.place }
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
        <HeroBranches
          player = { player }
        />
      </BranchesWrap>
      { heroesListModal &&
        <Modal
          level = { 1 }
          toggleModal = { toggleHeroesListModal }
        >
          <HeroesList
            player = { player }
            toggleModal = { toggleHeroesListModal }
          />
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