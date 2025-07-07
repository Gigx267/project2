import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import Artists from './pages/Artists';
import ArtistProfile from './pages/ArtistProfile';
import ArtistSignup from './pages/ArtistSignup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artworks" element={<Artworks />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artists/:id" element={<ArtistProfile />} />
              <Route path="/artist-signup" element={<ArtistSignup />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App