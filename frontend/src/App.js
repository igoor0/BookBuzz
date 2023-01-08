import './App.css';
import React, { useState } from 'react';
import { Box, createTheme, Stack } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Add from './components/Add';


const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#5b3e31',
      light: '#a08679',
      dark: '#3d251e',
    },

  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  const [mode, setMode] = useState('light');

  const theme = mode === 'light' ? lightTheme : darkTheme;

  function toggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent={'center'}>
          <Sidebar setMode={toggleTheme} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
