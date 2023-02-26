export default function isArtefact( place, artefacts ) {
  
  if( artefacts.filter( artefact => artefact.place === place ).length === 0 )
  {
    return {};
  } else
  {
    const [ artefact ] = artefacts.filter( artefact => artefact.place === place );
    return artefact;
  };
}