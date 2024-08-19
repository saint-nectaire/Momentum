import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Errorpage from './pages/Errorpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { containerStyles } from './styles/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#998FC7", // Indigo
    },
    secondary: {
      main: "#28262C", // Indigo
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
    h4: {
      color: "#E0E0E0", // Light Gray
    },
    subtitle1:{
      color: "#E0E0E0", // Light Gray
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
            backgroundColor: '#F0F0F0', // Light Gray
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0F0F0', // Light Gray
        },
      },
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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/*" element={<Errorpage />} />
          </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;