import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Mainpage />
    </React.Fragment>
  );
}

export default App;
