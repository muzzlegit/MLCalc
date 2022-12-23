//HOOKS
import usePlayerStoreData from '../../hooks/usePlayerStoreData';
import useHeroImg from '../../hooks/useHeroImg';
import useCommonImg from '../../hooks/useCommonImg';
//STYLES
import { 
    HeroWrap,
    HeroImg
  } from "./HeroBox.styled"

export default function HeroBox({ player }) {
  const playerData = usePlayerStoreData( player );
  const [ heroImg, heroBackground ] = useHeroImg( player );

  const { hero } = playerData;
  const heroFrame = useCommonImg( 'heroFame' );
  
  return (
    <HeroWrap
      background = { heroFrame }
    >
      <HeroImg
        background = { hero.checker ? heroImg : heroBackground }
      >
      </HeroImg>
    </HeroWrap>
  )
}