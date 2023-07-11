import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Updates from './routes/Updates.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/updates' element={<Updates />} />
      </Routes>
    </>
  );
}

export default App;
