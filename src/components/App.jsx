import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ingredient from './Ingredient/Ingredient';
import AdminMain from './Admin/AdminMain';

function App() {
    return (
        <Router>
            <React.Fragment>
                <CssBaseline />
                <Navbar />
                <Route path="/" exact component={Mainpage} />
                <Route path="/admin" exact component={AdminMain} />
                <Route path="/ingredient/:id" component={Ingredient} />
            </React.Fragment>
        </Router>
    );
}

export default App;
