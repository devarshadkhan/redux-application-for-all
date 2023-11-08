
import './App.css'
import {BrowserRouter,Route, Routes} from  "react-router-dom"
import Counter from './Pages/Counter/Counter'
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar';
import { Toolbar } from '@mui/material';

function App() {

  return (
    <>

    <BrowserRouter>
    <CssBaseline />
    <Toolbar />
    <Navbar />
      <Routes>
        <Route path="/" element={<Counter/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
