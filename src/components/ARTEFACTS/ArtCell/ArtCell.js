//HOOKS
import useArtefactsImg from "../hooks/useArtefactsImg.js";
//STYLES
import { ArtefactWrap, ArtefactImg  } from "./styles/ArtCell.styled";

export default function ArtCell({ artefact }) {
  const artefactImg = useArtefactsImg( artefact.icon );

  return (
    <ArtefactWrap
      ancient={ artefact.ancient }
    >
      <ArtefactImg
        background={ artefactImg }
      >
      </ArtefactImg>
    </ArtefactWrap>
  )
}