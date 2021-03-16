import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import Footer from "./components/Footer";
import { ThemeName, themes } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState<ThemeName>("light");
  const current = themes[theme];

  return (
    <ThemeProvider theme={current}>
      <BrowserRouter>
        <Header themeName={theme} setThemeName={setTheme} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
        <GlobalStyles />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
