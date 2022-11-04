import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AuthenProvider } from './contexts/Authen';
import Router from './routes';
function App() {
  return (
    <AuthenProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthenProvider>

  );
}

export default App;
