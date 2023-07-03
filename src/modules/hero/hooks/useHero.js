import { useEffect, useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//DATA
import HEROES from "shared/data/HEROES.json";
//STORE
import useStore from "store/useStore";
//HELPERS
import { getHero } from "shared/helpers";

const useHero = filter => {
  const player = usePlayerContext();
  const hero = useStore(state => state[player].hero);
  const { setHero, setHeroBranch } = useStore(state => state.functions);

  const handleHeroBranch = useCallback(
    branch => {
      filter[branch]
        ? setHeroBranch(player, {
            [branch]: getHero(HEROES, filter[branch]).branch1,
          })
        : setHeroBranch(player, {
            [branch]: null,
          });
    },
    [filter, player, setHeroBranch],
  );

  useEffect(() => {
    if (!filter.class) {
      setHero(player, null);
      return;
    }
    if (filter.branch1 && !filter.branch2 && !filter.branch3)
      setHero(player, {
        ...getHero(HEROES, filter.branch1),
      });

    handleHeroBranch("branch1");
    handleHeroBranch("branch2");
    handleHeroBranch("branch3");
  }, [
    filter.branch1,
    filter.branch2,
    filter.branch3,
    filter.class,
    handleHeroBranch,
    player,
    setHero,
  ]);

  return { hero };
};

export default useHero;
