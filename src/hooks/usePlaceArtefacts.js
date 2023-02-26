//DATA
import artefactsData from '../data/Artefacts.json';

export default function usePlaceArtefacts( place, currentArtefact, artLevel ) {

  const placeArtefacts = artefactsData.filter( artefatc => 
    artefatc.place === place
    && ( artLevel !== 'all' ? artefatc.level === Number( artLevel ) : true )
    &&  artefatc.id !==  currentArtefact.id
  );
  
  return [ placeArtefacts ];
}