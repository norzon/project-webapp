import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Input, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const style = {
    main: {
        flexGrow: 1
    },
    grid: {
        paddingBottom: '7rem'
    },
    paper: {
        padding: '1rem 2rem',
        display: 'flex'
    },
    input: {
        flexGrow: 1
    },
    span: {
        padding: '0.75rem 1.5rem',
        color: '#777'
    }
}

class Mainpage extends React.Component {
    render() {
        return (
            <Grid
                id="main-page"
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={style.main}
            >
                <Grid item sm={8} style={style.grid}>
                    <Paper style={style.paper}>
                        <Input placeholder="Select ingredient" style={style.input} />
                        <span style={style.span}>or</span>
                        <Button
                            color="primary"
                            variant="contained"
                        >Browse All</Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Mainpage;
