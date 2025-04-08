import { useState } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { Button } from "./components/ui/button";

import { ModeToggle } from "./components/ui/mode-toggle";

import "./App.css";
import { Input } from "./components/ui/input";
import JoinRoom from "./components/pages/JoinRoom";

function App() {
  return (
    <ThemeProvider>
      <JoinRoom />
    </ThemeProvider>
  );
}

export default App;
