import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar/Navbar';
import Mainpage from './Mainpage/Mainpage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ingredient from './Ingredient/Ingredient';
import Authentication from './Admin/Authentication';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <CssBaseline />
                    <Navbar />
                    <Route path="/" exact component={Mainpage} />
                    <Route path="/ingredient/:id" component={Ingredient} />
                    {!window.userHash ? (
                        <Route path="/admin" exact component={Authentication} />
                    ) : ''}
                </React.Fragment>
            </Router>
        );
    }

    componentDidMount() {
        window.onUpdateUser(this.forceUpdate.bind(this));
    }
}

export default App;
