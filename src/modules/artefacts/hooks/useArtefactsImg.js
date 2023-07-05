import { useCallback } from "react";
//IMAGES
import artefactsImgs from "modules/artefacts/img/Artefacts.webp";
import artefactsImgsMap from "modules/artefacts/img/maps/Artefacts.map";

const useArtefactsImg = () => {
  const getArtefactImage = useCallback(
    imageName => `url(${artefactsImgs}) ${artefactsImgsMap[imageName]}`,
    [],
  );

  return { getArtefactImage };
};

export default useArtefactsImg;
