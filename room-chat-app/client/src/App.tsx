import { useState } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { Button } from "./components/ui/button";

import { ModeToggle } from "./components/ui/mode-toggle";

import "./App.css";
import { Input } from "./components/ui/input";
import JoinRoom from "./components/pages/JoinRoom";
import CreateRoom from "./components/pages/CreateRoom";

import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<JoinRoom />} />
          <Route path="/create" element={<CreateRoom />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
