import React from 'react';
import { Grid, Paper, Typography, Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import settings from '../../settings';
import $ from 'jquery';

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <Grid key="admin-auth" container justify='center' style={{ padding: '2.5rem 1rem' }}>
                <Grid item xl={4} lg={6} md={8} sm={12} xs={12}>
                    <Paper style={{ width: '100%', padding: '1.5rem' }}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form onSubmit={e => this.signIn(e)}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.currentTarget.value })}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.currentTarget.value })}
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    componentDidMount () {
        window.onUpdateData(this.forceUpdate.bind(this));
    }

    signIn(e) {
        e.preventDefault();

        const that = this;

        $.ajax({
            url: `${settings.api_url}/admin/authenticate`,
            method: 'POST',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
        .then(res => {
            sessionStorage.setItem('userHash', res.results);
            window.userHash = res.results;
            if (typeof that.props.authenticated === 'function') {
                that.props.authenticated();
            }
        })
        .catch(xhr => alert(xhr.responseJSON ? xhr.responseJSON.results : xhr.statusText))
    }
}
