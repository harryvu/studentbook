import React, { lazy, Suspense } from 'react';
import './App.css';
import AddStudentComponent from './components/AddStudentComponent';
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <AddStudentComponent />
      <Suspense fallback={<div>loading...</div>}>
        <MyComponent />
      </Suspense>        
    </div>
  );
}

export default App;
