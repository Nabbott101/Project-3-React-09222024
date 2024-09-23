import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Todo from './Todo';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/todos">Todos </Link>

        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
