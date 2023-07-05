import { useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//HOOKS
import useBuffsProvider from "shared/hooks/useBuffsProvider";
//DATA
import HEROES from "shared/data/HEROES.json";
//STORE
import useStore from "store/useStore";
//HELPERS
import { getHeroSkills, getFormattedHeroSkill } from "shared/helpers";

const useHero = () => {
  const player = usePlayerContext();
  const { hero: currentHero } = useStore(state => state[player]);
  const { setHero, setHeroBranch, setHeroSkillLevel } = useStore(state => state.functions);
  const { applyBuffs, removeBuff } = useBuffsProvider();

  const clearSkillsBufs = useCallback(() => {
    ["branch1", "branch2", "branch3"].forEach(branch => {
      if (currentHero?.[branch]) removeBuff(currentHero[branch]);
    });
  }, [currentHero, removeBuff]);

  const handleHero = useCallback(
    heroClass => {
      if (heroClass) {
        setHero(player, {
          class: heroClass,
          branch1: null,
          branch2: null,
          branch3: null,
        });
        clearSkillsBufs();
      } else {
        clearSkillsBufs();
        setHero(player, null);
      }
    },
    [setHero, player, clearSkillsBufs],
  );

  const handleHeroBranch = useCallback(
    (heroName, branchKey) => {
      if (!heroName) {
        setHeroBranch(player, branchKey, null);
        if (currentHero[branchKey]) removeBuff(currentHero[branchKey]);
        return;
      }
      const skills = getHeroSkills(HEROES, heroName, player, branchKey);
      if (currentHero[branchKey]) removeBuff(currentHero[branchKey]);
      setHeroBranch(player, branchKey, skills, heroName);
      applyBuffs(skills);
    },
    [applyBuffs, currentHero, player, removeBuff, setHeroBranch],
  );

  const handleSkillLevel = useCallback(
    skill => {
      const { index, level, branchKey } = skill;
      if (skill.level >= 5) {
        setHeroSkillLevel(player, branchKey, {
          ...skill,
          level: 1,
          index: 0,
        });
        applyBuffs([
          {
            ...skill,
            level: 1,
            index: 0,
          },
        ]);
      } else {
        setHeroSkillLevel(player, branchKey, {
          ...skill,
          level: level + 1,
          index: index + 1,
        });
        applyBuffs([
          {
            ...skill,
            level: level + 1,
            index: index + 1,
          },
        ]);
      }
    },
    [applyBuffs, player, setHeroSkillLevel],
  );

  return { currentHero, handleHero, handleHeroBranch, handleSkillLevel };
};

export default useHero;
