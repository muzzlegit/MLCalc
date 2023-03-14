// //HOOKS
import usePlayerContext from '../../../hooks/usePlayerContext.js';
import useArtefact from '../hooks/useArtefacts.js';

import useCommonImg from '../../../hooks/useCommonImg.js';
import useArtefactsImg from '../hooks/useArtefactsImg';
// import useCurrentArtefact from '../../hooks/useCurrentArtefact';
import useTypeFilter from '../TypeFilter/hooks/useTypeFilter.js';
import useArtefactSelector from './hooks/useArtefactSelector.js';
// //COMPONENTS
import TypeFilter from '../TypeFilter';
import ArtefactsLevelFilter from '../ArtefactsLevelFilter';
// import CloseButton from '../CloseButton/CloseButton';
import Runes from '../../RUNES/Runes'
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
} from "./styles/ArtefactsSelector.styled";
import useArtefactsLevelFilter from '../ArtefactsLevelFilter/hooks/useArtefactsLevelFilter.js';

export default function ArtefactSelector({ place }){
  const player = usePlayerContext();
  const { setArtefact, deleteArtefact } = useArtefact( player );
  const { artLevel, onLevelClick } = useArtefactsLevelFilter();
  const { selectedArtefact, artefactsArrayByPlace, setSelectedArtefact, onArtefactClick, removeSelectedArtefact, addArtefact } = useArtefactSelector( place, artLevel );
  const [ filter, onTypeClick, onPerfectClick ] = useTypeFilter( selectedArtefact );
 

  // const [ currentArtefact, getCurrentArtefact, addCurrentArtefact, removeCurrentArtefact, setCurrentArtefact ] = useCurrentArtefact( player, place, onTypeClick );
  // const [ placeArtefacts ] = usePlaceArtefacts( place, currentArtefact, filter.level );
  const [ artefactImg, getArtefactImg ] = useArtefactsImg( '' );
  const perfectIcon = useCommonImg( 'perfectIcon' );

  return(
    <SelectorsBox>
      <SelectedArtefactWrap
        top = { '50%' }
        right = { '50%' }
        background = { 
          `${ filter.ancient ? 
          'radial-gradient(circle at center, orange 20% , #111728 50% )' :
          'radial-gradient(circle at center, #89abad 20% , #111728 50% )' }` }
      >
        <SelectedArtefact
            background={ selectedArtefact.icon ? getArtefactImg( selectedArtefact.icon ) : null }
        ></SelectedArtefact>
        <PerfectIcon
          background = { perfectIcon }
          filter = { `${ filter.perfect }` }
        ></PerfectIcon>

        <button 
          type = 'button'
          onClick = { () => { addArtefact( selectedArtefact, filter, setArtefact ) }}
        > Выбрать </button>
        <button 
          type = 'button'
          onClick = { () => { deleteArtefact( selectedArtefact ); removeSelectedArtefact(); }}
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
        <ArtefactsLevelFilter
          artLevel = { artLevel }
          onLevelClick = { onLevelClick }  
        />
      </ArtefactsListWrap>

      <TypeFilter
        filter = { filter }
        onTypeClick = { onTypeClick }
        onPerfectClick = { onPerfectClick }
      />
      <Runes 
        place = { place }
        setArtefact = { setArtefact }
      />
      {/* <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }        
      /> */}

    </SelectorsBox>
  )
}