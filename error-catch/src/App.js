import React from 'react';
import Users from './Users';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  const users = {
    id: 1,
    username : 'park'
  }
  return (
    <>
      <ErrorBoundary>
        <Users/>
      </ErrorBoundary>
    </>
  );
}

export default App;
