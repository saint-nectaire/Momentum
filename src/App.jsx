import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Errorpage from './pages/Errorpage';
import Footer from './components/Footer';
import { Container, Box, Typography, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline /> 
      <Container
        component="main"
        maxWidth="lg"
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh', 
        }}
      >
          <Typography variant="h1" component="h1">
            Saint-nectaire
          </Typography>

        <Box
          component="main"
          sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/*" element={<Errorpage />} />
          </Routes>
        </Box>

        <Footer />
      </Container>
    </>
  );
}

export default App;
