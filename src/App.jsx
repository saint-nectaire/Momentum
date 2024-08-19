import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Errorpage from './pages/Errorpage';
import Footer from './components/Footer';
import { Container, Box, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#998FC7", // Indigo
    },
    background: {
      default: "#28262C", // Light Black
      paper: "#998FC7",  // Indigo
    },
  },
  typography: {
    h1: {
      color: "#998FC7", // Indigo
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            alignItems: 'center',
            bgcolor: 'background.paper', 
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
    </ThemeProvider>
  );
}

export default App;
