//HOOKS
import useArtefactsImg from "../../hooks/useArtefactsImg";
//STYLES
import { ArtefactWrap, ArtefactImg  } from "./ArtCell.styled";

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