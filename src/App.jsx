import { Routes, Route } from 'react-router-dom'

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
