import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Errorpage from './pages/Errorpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Container, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { containerStyles, mainBoxStyles } from './styles/styles';

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
      <Navbar />
      <Container
        component="main"
        sx={containerStyles}
      >
        <Sidebar />
        <Box
          component="main"
          sx={mainBoxStyles}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/*" element={<Errorpage />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;