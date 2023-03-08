//HOOKS
import useHeroImg from '../hooks/useHeroImg';
import useCommonImg from '../../../hooks/useCommonImg';
//STYLES
import { HeroWrap, HeroImg } from "./styles/HeroPicture.styled";

export default function HeroPicture({ player, hero }) {
  const [ heroImg, heroBackground ] = useHeroImg( player );

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