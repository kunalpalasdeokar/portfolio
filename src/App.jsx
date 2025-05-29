import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/icon.png'
import './App.css'
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "resume") return <Resume />;
  if (page === "contact") return <Contact />;
  return <Home />;
}

export default App
