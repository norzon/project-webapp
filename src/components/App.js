import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <React.Fragment>
                <CssBaseline />
                <Navbar />
                <Route path="/" exact component={Mainpage} />
            </React.Fragment>
        </Router>
    );
}

export default App;
