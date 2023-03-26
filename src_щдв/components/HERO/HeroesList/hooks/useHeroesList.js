//DATA
import heroesList from '../../../../data/Heroes.json';
//HOOKS
import useHero from '../../hooks/useHero.js';

export default function useHeroesList ( player, toggleModal ) {
  const { addHero } = useHero( player );

  const onHeroClick = ( e ) => {
    addHero( e.currentTarget.id, e.currentTarget.attributes.name.value );
    toggleModal();
  }

  return { heroesList, onHeroClick };
}