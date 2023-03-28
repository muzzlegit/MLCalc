//CONTEXT
import PlayerContext from "shared/helpers/context.js";
//WIDGETS
import { Squad, PlayerSelectors } from "widgets";

const App = () => {
  return (
    <PlayerContext.Provider value="mainAttacker">
      <Squad />
      <PlayerSelectors />
    </PlayerContext.Provider>
  );
};
export default App;
