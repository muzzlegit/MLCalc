import { useEffect, useState, useContext } from 'react';
//CONTEXT
import PlayerContext from '../../helpers/context';
//DATA
import artefatctsData from '../../data/Artefacts.json'
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
import usePlayerStoreFunctions from '../../hooks/usePlayerStoreFunctions';
import useModalToggle from '../../hooks/useModalToggle';
import useCommonImg from '../../hooks/useCommonImg';
import useArtefactsImg from '../../hooks/useArtefactsImg';
import useSetArtefact from '../../hooks/useCurrentArtefact';
import useCurrentArtefact from '../../hooks/useCurrentArtefact';
import useArtefactFilter from '../../hooks/useArtefactFilter';
//COMPONENTS
import { ArtefactTypeFilter, ArtefactsLevelFilter } from '../ArtefactsFilters';
import CloseButton from '../CloseButton/CloseButton';
//HELPERS
import isArtefact from '../../helpers/isArtefact';
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
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const [ filter, onLevelClick, onTypeClick, onPerfectClick ] = useArtefactFilter( player, place );
  const [ currentArtefact, getCurrentArtefact ] = useCurrentArtefact( player, place, filter );


  const [ isArtefactsListOpen, setIsArtefactsListOpen ] = useModalToggle( false );

  const [selectedArtefact, setSelectedArtefact] = useState({});
  
  const [ artefactImg, getArtefactImg ] = useArtefactsImg( '' );

  const perfectIcon = useCommonImg( 'perfectIcon' );

  const artefactWindowImg = useCommonImg( 'artefactWindow' );

  //CONSTS

  const {
    setUnitProperty,
    addArtefact
  } = playerFunctions;
  let artefactsArr = false;
  if( !isArtefact( place, artefatctsData ))
  {
    artefactsArr = artefatctsData.filter( artefatc => artefatc.place === place );

  }
    else
  {
    artefactsArr = artefatctsData.filter( artefatc => 
      artefatc.place === place
      && ( filter.level !== 'all' ? artefatc.level === Number(filter.level) : true )
      &&  artefatc.id !==  currentArtefact.id );
  }


  return(
    <SelectorsBox>
      <SelectedArtefactWrap
        top = { '50%' }
        right = { '50%' }
        background = { `${ artefactWindowImg } ${ filter.ancient ? ',radial-gradient(circle at center, orange 20% , #111728 60% )': '' }` }
      >
        <SelectedArtefact
            background={ currentArtefact ? getArtefactImg( currentArtefact.icon ) : null }
        ></SelectedArtefact>
        <PerfectIcon
          background = { perfectIcon }
          filter = { filter.perfect }
        ></PerfectIcon>
      </SelectedArtefactWrap>

      <ArtefactsListWrap
        top = { '50%' }
        right = { '83%' }      
      >
        <ArtefactsList>
        {
          artefactsArr.map(artefact => {
            return(
              <ArtefactBackgraund>
                <ArtefactImg
                  key={ artefact.id }
                  id={ artefact.id }
                  background={ getArtefactImg( artefact.icon ) }
                  onClick={ ( e ) => { getCurrentArtefact( e.currentTarget.id, filter ) } }
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
      />
      <CloseButton
        closeButtonFn = { toggleModal }
        top = { 0 }
        right = { 0 }        
      />

    </SelectorsBox>
  )
}