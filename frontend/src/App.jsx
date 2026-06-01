import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import SnapPassAssistant from './chatbot/SnapPassAssistant';
import OnboardingTour from './components/OnboardingTour';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    return next;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-shell">
      <OnboardingTour />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="app-main">
        <AppRoutes darkMode={darkMode} toggleTheme={toggleTheme} />
      </main>
      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
      <SnapPassAssistant />
    </div>
  );
}

export default App;