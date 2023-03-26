//CONTEXT
import PlayerContext from "shared/helpers/context.js";
//WIDGETS
import { Squad } from "widgets";

const App = () => {
  return (
    <PlayerContext.Provider value="mainAttacker">
      <Squad />
    </PlayerContext.Provider>
  );
};
export default App;
