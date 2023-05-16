import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './features/header/Header';
import { Content } from './features/content/Content';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
