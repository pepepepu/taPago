import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes/router";
import { DeviceRestrictor } from "./layout/DeviceRestrictor";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DeviceRestrictor>
        <AppRoutes />
      </DeviceRestrictor>
    </ThemeProvider>
  );
}
