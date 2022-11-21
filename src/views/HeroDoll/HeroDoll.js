import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

//COMPONENTS
import ArtCell from '../../components/ArtCell/ArtCell';
import HeroBranches from '../HeroBranches/HeroBranches';
//HOOKS
import usePlayerStoreData from "../../hooks/usePlayerStoreData";
//DATA
import commonAssets from '../../data/CommonAssets.json';
//IMAGES
import commonImg from '../../img/common/CommonAssets.png';
import heroesImg from '../../img/common/Heroes.webp';
//STYLES
import { Wrap, DollWrap, BranchesWrap, HeroWrap, HeroBox, ArttefactWrap} from "./HeroDoll.styled"

//COSTS
const arts = [
  { place: 'head', top: '80px', left: '110px', art: false },
  { place: 'armor', top: '180px', left: '110px', art: false },
  { place: 'belt', top: '280px', left: '110px', art: false },
  { place: 'pants', top: '380px', left: '110px', art: false },
  { place: 'boots', top: '480px', left: '110px', art: false },
  { place: 'neck', top: '130px', left: '20px', art: false },
  { place: 'bracers', top: '230px', left: '20px', art: false },
  { place: 'ring', top: '330px', left: '20px', art: false },
  { place: 'rightHand', top: '430px', left: '20px', art: false },
  { place: 'bag', top: '200px', left: '200px', art: false },
  { place: 'back', top: '300px', left: '200px', art: false },
  { place: 'leftHand', top: '400px', left: '200px', art: false },
]

export default function HeroDall({ role, toggleModal }){
  const [playerData, playerFunctions] = usePlayerStoreData(role);
  const [heroArts, setHeroArts] = useState(arts);
  //CONSTS
  const {
    hero,
    artefacts,
  } = playerData;

  //USE EFFECTS
  useEffect(() => {
    const artsArr = arts.map(art => {
      return  artefacts.find(item =>  item.place === art.place) ? 
        { ...art, art: artefacts.find(item =>  item.place === art.place)} : art 
      });
    setHeroArts(artsArr);
  }, [artefacts])


  return (
    <Wrap>
      <DollWrap>
        <HeroWrap
          onClick={ toggleModal }
        >
          <HeroBox
            background={ `url(${ heroesImg }) ${ hero.icon }` }
          >
          </HeroBox>
        </HeroWrap>
        {
          heroArts.map(art => {
            return(
              <ArttefactWrap
                key={ nanoid() }
                id={ art.place }
                top={ art.top }
                left={ art.left }
                background = {`url(${ commonImg }) ${ commonAssets.artFrame }`}
              >
                <ArtCell
                  key={ nanoid() }
                  artefact={ art.art }
                />
              </ArttefactWrap>
            )
          })
        }
      </DollWrap>
      <BranchesWrap>
        <HeroBranches
          role={ role }
        />
      </BranchesWrap>

    </Wrap>

  )
}