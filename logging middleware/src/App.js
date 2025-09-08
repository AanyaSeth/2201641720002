// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ShortenerPage from './pages/ShortenerPage';
import RedirectPage from './pages/RedirectPage';
import { LoggerProvider } from './middleware/LoggerContext';
import useLogger from './middleware/useLogger';

function AppContent() {
  const log = useLogger();

  React.useEffect(() => {
    log('frontend', 'info', 'page', 'App mounted and routing initialized');
  }, []);

  return (
    <Router>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/:shortcode" element={<RedirectPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default function App() {
  return (
    <LoggerProvider>
      <AppContent />
    </LoggerProvider>
  );
}