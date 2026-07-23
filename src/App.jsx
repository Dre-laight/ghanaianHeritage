import Welcome from './WelcomeScreen/Welcome'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import CulturePage from "./DiscoverGhana/Culture"
import HistoryTimeline from './DiscoverGhana/History'
import FoodPage from './DiscoverGhana/Food'
import SymbolsPage from './DiscoverGhana/Symbols'
import FiguresPage from './DiscoverGhana/People'
import DancePage from './DiscoverGhana/Dance'

function App() {
  const location = useLocation()


  return(
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/culture" element={<CulturePage/>} />
        <Route path="/history" element={<HistoryTimeline/>} />
        <Route path="/food" element={<FoodPage/>} />
        <Route path="/symbols" element={<SymbolsPage/>} />
        <Route path="/people" element={<FiguresPage/>} />
        <Route path="/dance" element={<DancePage/>} />
      </Routes>
    
  

  )
}

export default App
