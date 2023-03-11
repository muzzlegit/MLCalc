import { useContext } from 'react';

// //HOOKS
// import usePlaceArtefacts from '../../hooks/usePlaceArtefacts';
import useCommonImg from '../../../../hooks/useCommonImg';
import useArtefactsImg from '../../../../hooks/useArtefactsImg';
// import useCurrentArtefact from '../../hooks/useCurrentArtefact';
import useTypeFilter from '../TypeFilter/useTypeFilter';
// //COMPONENTS
import TypeFilter from '../TypeFilter/TypeFilter';
// import CloseButton from '../CloseButton/CloseButton';
// import Runes from '../RUNES/runes/'
import useSelectedArtefact from './useSelectedArtefact.js';
//STYLES
import { 
  SelectorsBox,
  SelectedArtefact,
  ArtefactsListWrap,
  ArtefactsList,
  ArtefactBackgraund,
  ArtefactImg,
  SelectedArtefactWrap,
  PerfectIcon
} from "./ArtefactsSelector.styled";
import useArtefact from './useArtefact';


export default function ArtefactSelector({ player, place, toggleModal }){
  const { setArtefact, deleteArtefact } = useArtefact( player );
  const { selectedArtefact, artefactsArrayByPlace, onArtefactClick } = useSelectedArtefact( player, place );
  const [ filter, onTypeClick, onPerfectClick ] = useTypeFilter( selectedArtefact );
  // const [ currentArtefact, getCurrentArtefact, addCurrentArtefact, removeCurrentArtefact, setCurrentArtefact ] = useCurrentArtefact( player, place, onTypeClick );
  // const [ placeArtefacts ] = usePlaceArtefacts( place, currentArtefact, filter.level );
  const [ artefactImg, getArtefactImg ] = useArtefactsImg( '' );
  const perfectIcon = useCommonImg( 'perfectIcon' );
  console.log('selectedArtefact', selectedArtefact)
  return(
    <SelectorsBox>
      <SelectedArtefactWrap
        top = { '50%' }
        right = { '50%' }
        // background = { 
        //   `${ filter.ancient ? 
        //   'radial-gradient(circle at center, orange 20% , #111728 50% )' :
        //   'radial-gradient(circle at center, #89abad 20% , #111728 50% )' }` }
      >
        <SelectedArtefact
            background={ selectedArtefact.icon ? getArtefactImg( selectedArtefact.icon ) : null }
        ></SelectedArtefact>
        <PerfectIcon
          background = { perfectIcon }
          // filter = { `${ filter.perfect }` }
        ></PerfectIcon>

        <button 
          type = 'button'
          // onClick = { () => { setArtefact( selectedArtefact ) }}
        > Выбрать </button>
        <button 
          type = 'button'
          onClick = { () => { deleteArtefact( selectedArtefact ) }}
        > Удалить </button>

      </SelectedArtefactWrap>

      <ArtefactsListWrap
        top = { '50%' }
        right = { '83%' }      
      >
        <ArtefactsList>
        {
          artefactsArrayByPlace.map( artefact => {
            return(
              <ArtefactBackgraund
                key = { artefact.id }
              >
                <ArtefactImg
                  id = { artefact.id }
                  background = { getArtefactImg( artefact.icon ) }
                  onClick = { onArtefactClick }
                ></ArtefactImg>
              </ArtefactBackgraund>
            )
          })
        }
        </ArtefactsList>
        {/* <ArtefactsLevelFilter
          filter = { filter }
          onLevelClick = { onLevelClick }  
        /> */}
      </ArtefactsListWrap>

      <TypeFilter
        filter = { filter }
        onTypeClick = { onTypeClick }
        onPerfectClick = { onPerfectClick }
      />
      {/* <Runes 
        player = { player }
        artefact = { currentArtefact }
        setArtefact = { setCurrentArtefact }
      /> */}
      {/* <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }        
      /> */}

    </SelectorsBox>
  )
}