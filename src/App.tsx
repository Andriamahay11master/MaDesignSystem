
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Color from './page/color/Color'
import PageAlert from './page/alert/PageAlert';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/color' element={<Color/>}/>
          <Route path='/alert' element={<PageAlert/>}/>
        </Routes>
    </Router>
  );
}

export default App
