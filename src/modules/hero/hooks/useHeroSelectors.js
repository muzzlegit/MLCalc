import { useState, useMemo, useEffect } from "react";
//HELPERS
import { getHeroClassesList, getHeroBranchesList } from "shared/helpers";
//DATA
import HEROES from "shared/data/HEROES.json";
//CONSTs
const initialFilter = {
  class: null,
  branch1: null,
  branch2: null,
  branch3: null,
};

const useHeroSelectors = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [firstBrunchesList, setFirstHeroBrunchesList] = useState(null);
  const [secondBrunchesList, setSecondHeroBrunchesList] = useState(null);
  const [thirdBrunchesList, setThirdHeroBrunchesList] = useState(null);
  const heroesClasessList = useMemo(() => getHeroClassesList(HEROES), []);

  const handleHeroClass = heroClass => {
    if (heroClass === "") setFilter(initialFilter);
    setFilter(prev => ({ ...initialFilter, class: heroClass }));
  };
  const handleHeroBranch = (heroBranch, branch) => {
    if (heroBranch === "") setFilter(prev => ({ ...prev, [branch]: null }));
    setFilter(prev => ({ ...prev, [branch]: heroBranch }));
  };

  useEffect(() => {
    if (!filter.class) {
      setFirstHeroBrunchesList(null);
      setSecondHeroBrunchesList(null);
      setThirdHeroBrunchesList(null);
    }
    setFirstHeroBrunchesList(
      getHeroBranchesList(HEROES, filter.class).filter(
        name => name !== filter.branch2 && name !== filter.branch3,
      ),
    );
    setSecondHeroBrunchesList(
      getHeroBranchesList(HEROES, filter.class).filter(
        name => name !== filter.branch1 && name !== filter.branch3,
      ),
    );

    setThirdHeroBrunchesList(
      getHeroBranchesList(HEROES, filter.class).filter(
        name => name !== filter.branch1 && name !== filter.branch2,
      ),
    );
  }, [filter]);

  return {
    filter,
    heroesClasessList,
    firstBrunchesList,
    secondBrunchesList,
    thirdBrunchesList,
    handleHeroClass,
    handleHeroBranch,
  };
};

export default useHeroSelectors;
