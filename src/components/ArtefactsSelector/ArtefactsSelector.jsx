import { useContext } from 'react';
//CONTEXT
import PlayerContext from '../../../helpers/context';
//HOOKS
import usePlaceArtefacts from '../../../hooks/usePlaceArtefacts';
import useCommonImg from '../../../hooks/useCommonImg';
import useArtefactsImg from '../../../hooks/useArtefactsImg';
import useCurrentArtefact from '../../../hooks/useCurrentArtefact';
import useArtefactFilter from '../../../hooks/useArtefactFilter';
//COMPONENTS
import { ArtefactTypeFilter, ArtefactsLevelFilter } from '../../ArtefactsFilters';
import CloseButton from '../../CloseButton/CloseButton';
import Runes from '../../RUNES/runes'
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

export default function ArtefactsSelector({ place, toggleModal }){
  const player = useContext( PlayerContext );
  const [ filter, onLevelClick, onTypeClick, onPerfectClick] = useArtefactFilter( player, place );
  const [ currentArtefact, getCurrentArtefact, addCurrentArtefact, removeCurrentArtefact, setCurrentArtefact ] = useCurrentArtefact( player, place, onTypeClick );
  const [ placeArtefacts ] = usePlaceArtefacts( place, currentArtefact, filter.level );
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
            background={ currentArtefact ? getArtefactImg( currentArtefact.icon ) : null }
        ></SelectedArtefact>
        <PerfectIcon
          background = { perfectIcon }
          filter = { `${ filter.perfect }` }
        ></PerfectIcon>

        <button 
          type = 'button'
          onClick = { ( ) => { addCurrentArtefact( filter ) }}
        > Выбрать </button>
        <button 
          type = 'button'
          onClick = { ( ) => { removeCurrentArtefact() }}
        > Удалить </button>

      </SelectedArtefactWrap>

      <ArtefactsListWrap
        top = { '50%' }
        right = { '83%' }      
      >
        <ArtefactsList>
        {
          placeArtefacts.map( artefact => {
            return(
              <ArtefactBackgraund
                key = { artefact.id }
              >
                <ArtefactImg
                  id = { artefact.id }
                  background = { getArtefactImg( artefact.icon ) }
                  onClick = { ( e ) => { getCurrentArtefact( e.currentTarget.id ) } }
                ></ArtefactImg>
              </ArtefactBackgraund>
            )
          })
        }
        </ArtefactsList>
        <ArtefactsLevelFilter
          filter = { filter }
          onLevelClick = { onLevelClick }  
        />
      </ArtefactsListWrap>

      <ArtefactTypeFilter
        filter = { filter }
        onTypeClick = { onTypeClick }
        onPerfectClick = { onPerfectClick }
        currentArtefact = { currentArtefact }    
      />
      <Runes 
        player = { player }
        artefact = { currentArtefact }
        setArtefact = { setCurrentArtefact }
      />
      <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }        
      />

    </SelectorsBox>
  )
}