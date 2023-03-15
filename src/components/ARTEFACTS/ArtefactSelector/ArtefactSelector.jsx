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
import CloseButton from '../../CloseButton';
import Runes from '../../RUNES/Runes';
import Sharpening from '../../SHARPENING';
//STYLES
import { 
  SelectorsBox,
  SelectedArtefact,
  ArtefactTypeWrap,
  ArtefactsListWrap,
  ArtefactsList,
  ArtefactBackgraund,
  ArtefactImg,
  SelectedArtefactWrap,
  PerfectIcon,
  BuffsWrap,
  ButtonsBox,
  ButtonItem
} from "./styles/ArtefactsSelector.styled";
import useArtefactsLevelFilter from '../ArtefactsLevelFilter/hooks/useArtefactsLevelFilter.js';

export default function ArtefactSelector({ place, toggleModal }){
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
      <ArtefactsListWrap>
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
      <SelectedArtefactWrap>
        <TypeFilter
          filter = { filter }
          onTypeClick = { onTypeClick }
          onPerfectClick = { onPerfectClick }
        />
        <ArtefactTypeWrap
          background = { 
            `${ filter.ancient ? 
            'radial-gradient(circle at center, orange 20% , #111728 50% )' :
            'radial-gradient(circle at center, #89abad 20% , #111728 50% )' }`}        
          >
          <SelectedArtefact
              background={ selectedArtefact.icon ? getArtefactImg( selectedArtefact.icon ) : null }
          >
          </SelectedArtefact>
          <PerfectIcon
              background = { perfectIcon }
              filter = { `${ filter.perfect }` }
            ></PerfectIcon>
        </ArtefactTypeWrap>
        <ButtonsBox>
          <ButtonItem 
            type = 'button'
            onClick = { () => { addArtefact( selectedArtefact, filter, setArtefact ) }}
          > Применить </ButtonItem>
          <ButtonItem 
            type = 'button'
            onClick = { () => { deleteArtefact( selectedArtefact ); removeSelectedArtefact(); }}
          > Удалить </ButtonItem>
        </ButtonsBox>

      </SelectedArtefactWrap>
      <BuffsWrap>
        <Runes 
          place = { place }
          setArtefact = { setArtefact }
        />
        <Sharpening/>
      </BuffsWrap>
      <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }        
      />

    </SelectorsBox>
  )
}