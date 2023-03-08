import usePlayerStoreFunctions from "../../../../hooks/usePlayerStoreFunctions";
//HELPERS
import { addBuffValues, removeBuffValues } from '../../../../helpers/helpers.js';
//HOOKS
import usePlayerStoreData from "../../../../hooks/usePlayerStoreData";
import useSelectedArtefact from "./useSelectedArtefact";


export default function useArtefact( player, place ) {
  const playerData = usePlayerStoreData( player );
  const playerFunctions = usePlayerStoreFunctions();
  const { artefacts } = playerData;
  const { addArtefact, removeArtefact, addBuff, removeBuff } = playerFunctions;
  const { removeSelectedArtefact } = useSelectedArtefact( player, place);

  const setArtefact = ( artefact ) => {
    const [ prevArtefact ] = artefacts.filter( item => item.place === artefact.place );
    if( prevArtefact ) 
    {
      removeArtefact( player, prevArtefact );
      removeBuffValues( player, prevArtefact.value, removeBuff );
      removeBuffValues( player, prevArtefact.runes, removeBuff );
    }
    addArtefact( player, artefact );
    addBuffValues( player, artefact.value, addBuff );
    addBuffValues( player, artefact.runes, addBuff );
  }
  const deleteArtefact = ( artefact ) => {
    if( !artefact.id ) return;
    removeSelectedArtefact();
    removeArtefact( player, artefact );
    removeBuffValues( player, artefact.value, removeBuff );
    removeBuffValues( player, artefact.runes, removeBuff );
  }

  return { setArtefact, deleteArtefact }
}