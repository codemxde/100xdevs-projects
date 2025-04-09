import { useState } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { Button } from "./components/ui/button";

import { ModeToggle } from "./components/ui/mode-toggle";

import "./App.css";
import { Input } from "./components/ui/input";
import JoinRoom from "./components/pages/JoinRoom";
import CreateRoom from "./components/pages/CreateRoom";

import { Route, BrowserRouter as Router, Routes } from "react-router";
import ChatRoom from "./components/pages/ChatRoom";
import { SocketProvider } from "./hooks/SocketContext";

function App() {
  return (
    <ThemeProvider>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<JoinRoom />} />
            <Route path="/create" element={<CreateRoom />} />
            <Route path="/chatroom" element={<ChatRoom />} />
          </Routes>
        </Router>
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
