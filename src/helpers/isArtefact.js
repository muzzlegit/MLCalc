export default function isArtefact( place, artefacts ) {
  if( artefacts.filter( artefatct => artefatct.place === place).length === 0 )
  {
    return false;
  } else
  {
    const [ artefact ] = artefacts.filter( artefatct => artefatct.place === place );
    return artefact;
  };
}