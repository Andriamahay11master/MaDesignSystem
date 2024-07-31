
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Color from './page/color/Color'
import PageAlert from './page/alert/PageAlert';
import PageButton from './page/button/PageButton';
import Home from './page/home/HOme';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/color' element={<Color/>}/>
          <Route path='/alert' element={<PageAlert/>}/>
          <Route path='/button' element={<PageButton/>}/>
        </Routes>
    </Router>
  );
}

export default App
