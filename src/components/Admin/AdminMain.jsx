import React from 'react';
import { Grid, Paper, Typography, Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import settings from '../../settings';
import $ from 'jquery';
import Authentication from './Authentication';

class AdminMain extends React.Component {
    render() {
        if (!window.userHash) {
            return <Authentication authenticated={() => this.forceUpdate()}/>
        } else {
            return 'Logged IN';
        }
    }
}

export default AdminMain;
