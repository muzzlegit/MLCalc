
//IMG
import artefactsAssets from '../../img/common/ArtifactAssets.png';
//STYLES
import { ArtefactWrap, ArtefactImg  } from "./ArtCell.styled";

export default function ArtCell({ artefact }) {

  return (
    <ArtefactWrap
      backgroundColor={ artefact.ancient ? 'orange' : null }
    >
      <ArtefactImg
        background={ `url(${ artefactsAssets }) ${ artefact.icon }` }
      >

      </ArtefactImg>
    </ArtefactWrap>
  )
}