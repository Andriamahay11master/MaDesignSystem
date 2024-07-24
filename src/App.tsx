
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Color from './page/color/Color'


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/color' element={<Color/>}/>
        </Routes>
    </Router>
  );
}

export default App
