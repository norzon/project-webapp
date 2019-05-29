import React from 'react';
import { Grid, Paper, Typography, Chip, Tooltip, Badge } from '@material-ui/core';
import { green, red, grey } from '@material-ui/core/colors';

let counter = 0;

function BasicItem (opts) {
    return (
        <Grid key={opts.key} container direction='row' style={{ marginBottom: '0.15rem' }}>
            <Typography variant="subtitle1">{opts.text}</Typography>
            <Tooltip title={opts.tooltip} placement="top-start">
                <Chip label={opts.label} style={{ marginLeft: '0.5rem', backgroundColor: opts.valid ? green[500] : red[500], color: 'white', height: 28 }} />
            </Tooltip>
        </Grid>
    )
}

function BasicItemWrapper (decision, text) {
    const authorized = decision.status.toLowerCase() === 'authorized';
    return BasicItem({
        key: counter++,
        text: text,
        tooltip: decision.description,
        label: decision.status,
        valid: authorized
    });
}

function displayItems (title, items) {
    return (
        <div>
            <Badge color="primary" badgeContent={items.length}>
                <Typography variant="h4" style={{ paddingBottom: '1rem', color: grey[800] }}>{title}</Typography>
            </Badge>
            <Grid container direction="column" style={{ padding: '0 1rem' }}>
                {items}
            </Grid>
        </div>
    )

}

class Ingredient extends React.Component {

    render () {
        counter = 0;
        const ingredient = window.data[this.props.match.params.id];
        const claimItems = [], healthItems = [];

        ingredient.decisions.forEach(decision => {
            decision.claims.forEach(claim => claimItems.push(BasicItemWrapper(decision, claim)));
            decision.health.forEach(health => healthItems.push(BasicItemWrapper(decision, health)));
        });

        const hr = <hr style={{ border: 'none', borderTop: `1px solid ${grey[200]}`, marginTop: '2rem', marginBottom: '1rem' }} />;

        return (
            <Grid container justify='center' style={{ padding: '2.5rem 1rem' }}>
                <Grid item xl={7} lg={8} md={10} sm={11} xs={12}>
                    <Paper style={{ width: '100%', padding: '1.5rem' }}>
                        <Grid container direction="row" alignItems="flex-end">
                            <Typography variant="h3" color="textPrimary">{ingredient.common_name}</Typography>
                            <Typography color="textSecondary">
                                <span style={{ paddingLeft: '0.5rem', paddingRight: '0.25rem' }}>&#8226;</span>
                                {ingredient.alias}
                            </Typography>
                        </Grid>
                        {hr}
                        {displayItems('Claims', claimItems)}
                        {hr}
                        {displayItems('Health Benefits', healthItems)}
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

export default Ingredient;
