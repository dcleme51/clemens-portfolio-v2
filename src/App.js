import Home from './pages/home'
import About from './components/About'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Router>
    <Routes>
      <Route
        path='/'
        element={<Home />}
      /> 
        <Route
          path='/About'
          element={<About />}
        />
    </Routes>
    


</Router>
    </div>
  );
}

export default App;
