import { useEffect, useState } from "react";
import { accessToken, logout } from "./spotify";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  StyledContainer,
  StyledLogoutButton,
  GlobalStyles,
} from "./styles/styles";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

import { Profile, Login } from "./pages";

// This component will scroll the window up on every navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledContainer>
        {token ? (
          <>
            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/top-artists" element={<h1>Top Artists</h1>} />
              <Route path="/top-tracks" element={<h1>Top Tracks</h1>} />
              <Route path="/playlists" element={<h1>Playlists</h1>} />
              <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
