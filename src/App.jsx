import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Errorpage from './pages/Errorpage';
import CustomExercisesPage from './pages/CustomExercisesPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { containerStyles } from './styles/styles';
import WorkoutDetailsPage from './pages/WorkoutDetailsPage';

const theme = createTheme({});

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
            <Route path="/workouts/:workoutId" element={<WorkoutDetailsPage />} />
            <Route path="/exercises" element={<CustomExercisesPage />} />
            <Route path="/*" element={<Errorpage />} />
          </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;