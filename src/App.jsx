import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Errorpage from "./pages/Errorpage";

function App() {

  return (
    <>
      <h1>Saint-nectaire</h1>

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/*" element={<Errorpage/>} />
      </Routes>
    </>
  )
}

export default App
