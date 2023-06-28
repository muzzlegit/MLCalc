//CONTEXT
import PlayerContext from "shared/helpers/context.js";
//THEME
import { ThemeProvider } from "@emotion/react";
import theme from "shared/utils/theme";
//WIDGETS
import { Player, BattlePlace } from "widgets";
//STYLES
import { Container } from "./styles/App.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PlayerContext.Provider value="mainAttacker">
          <Player title="Атакующий" />
        </PlayerContext.Provider>
        <PlayerContext.Provider value="battlePlace">
          <BattlePlace />
        </PlayerContext.Provider>
        <PlayerContext.Provider value="mainDefender">
          <Player title="Защитник" />
        </PlayerContext.Provider>
      </Container>
    </ThemeProvider>
  );
};
export default App;
