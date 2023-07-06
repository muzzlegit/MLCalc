import { useCallback } from "react";
//IMAGES
import artefactsImgs from "modules/artefacts/img/Artefacts.webp";
import artefactsAssets from "modules/artefacts/img/ArtefactsAssets.webp";
import artefactsImgsMap from "modules/artefacts/img/maps/Artefacts.map";
import assetsMap from "modules/artefacts/img/maps/ArtefactsAssets.map";

const useArtefactsImg = () => {
  const getArtefactImage = useCallback(
    imageName => `url(${artefactsImgs}) ${artefactsImgsMap[imageName]}`,
    [],
  );
  const getAssets = useCallback(imageName => `url(${artefactsAssets}) ${assetsMap[imageName]}`, []);

  return { getArtefactImage, getAssets };
};

export default useArtefactsImg;
