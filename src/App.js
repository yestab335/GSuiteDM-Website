import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import Updates from './routes/Updates.js';
import Privacy from './routes/PrivatePolicy.js';
import Error from './routes/PageNotFound.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
