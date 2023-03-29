//CONTEXT
import PlayerContext from "shared/helpers/context.js";

//WIDGETS
import { Player, Battlefield } from "widgets";
//styles
import { Container } from "./styles/App.styled";

const App = () => {
  return (
    <Container>
      <PlayerContext.Provider value="mainAttacker">
        <Player title="Атакующий" />
      </PlayerContext.Provider>
      <PlayerContext.Provider value="mainDefender">
        <Battlefield />
        <Player title="Защитник" />
      </PlayerContext.Provider>
    </Container>
  );
};
export default App;
