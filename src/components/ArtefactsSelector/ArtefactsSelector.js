import { useEffect, useState } from 'react';
//DATA
import artefatctsData from '../../data/Artefacts.json'
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//IMG
import artefactsAssets from '../../img/common/ArtifactAssets.png';
//STYLES
import { SelectorsBox, SelectedArtefact, ArtefactsList, ArtefactImg, SelectButton,  } from "./ArtefactsSelector.styled";

export default function ArtefactsSelector({ role, artefactId, place, toggleModal }){
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [artefactsArr, setArtefactsArr] = useState(artefatctsData.filter(artefatc => artefatc.place === place));
  const [selectedArtefact, setSelectedArtefact] = useState({});
  const [toggleList, setToggleList] = useState(false);

  //CONSTS
  const {
    artefacts
  } = playerData;
  const {
    setUnitProperty,
    addArtefact
  } = playerFunctions;

  //HANDLE FUNCTIONS
  const onSelectButtonClick = () => {
    setToggleList(prev => !prev)
  }

  const onArtefactClick = (e) => {
    if(Object.keys(selectedArtefact).length === 0) return;
    selectedArtefact.value.common.forEach(element => {
      setUnitProperty({...element, value:0})
    });
    setSelectedArtefact(artefatctsData.find(artefact => artefact.id === e.currentTarget.id));
    addArtefact(artefactsArr.find(artefact => artefact.id === e.currentTarget.id));
  }

  //USE EFFECT
  useEffect(() => {
    artefactId ? setSelectedArtefact(artefatctsData.find(artefact => artefact.id === artefactId)) : setSelectedArtefact(artefactsArr[0])
  }, [artefactId, artefactsArr]);

  useEffect(() => {
    if(selectedArtefact.value) {
      selectedArtefact.value.common.forEach(element => {
      setUnitProperty(element)
    })};
  }, [selectedArtefact, setUnitProperty]);

  return(
    <SelectorsBox>
      <SelectedArtefact
        background={ `url(${artefactsAssets}) ${selectedArtefact.icon}` }
      >
        <SelectButton
          type='button'
          onClick={ onSelectButtonClick }
        >
        </SelectButton>
      </SelectedArtefact>

      { toggleList ?
      <ArtefactsList>
          {artefactsArr.map(artefact => {
            return(
                <ArtefactImg
                  key={ artefact.id }
                  id={ artefact.id }
                  background={ `url(${artefactsAssets}) ${artefact.icon}` }
                  onClick={ onArtefactClick }
                >

                </ArtefactImg>
            )
          })}
      </ArtefactsList>

      : null}
      <button
        type="button"
        onClick={ toggleModal }>close
      </button>
    </SelectorsBox>
  )
}