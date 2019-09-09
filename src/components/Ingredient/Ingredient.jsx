import React from 'react';
import { Grid, Paper, Typography, Chip, Tooltip, Badge } from '@material-ui/core';
import { green, red, grey, orange } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';

let counter = 0;

function BasicItem (opts) {
    let backgroundColor, color = 'white';
    switch (opts.valid) {
        case 'approved': backgroundColor = green[500]; break;
        case 'rejected': backgroundColor = red[500]; break;
        case 'pending': backgroundColor = orange[500]; break;
        case 'inconclusive': backgroundColor = grey[100]; color = 'black'; break;
        default: backgroundColor = grey[500]; break;
    }
    return (
        <Grid key={opts.key} container direction='row' style={{ marginBottom: '0.15rem' }}>
            <Typography variant="subtitle1">{opts.text}</Typography>
            <Tooltip title={opts.tooltip} placement="top-start">
                <Chip label={opts.label} style={{ marginLeft: '0.5rem', backgroundColor, color, height: 28 }} />
            </Tooltip>
        </Grid>
    )
}

function BasicItemWrapper (decision, text) {
    return BasicItem({
        key: counter++,
        text: text,
        tooltip: decision.DESCRIPTION,
        label: decision.STATUS,
        valid: typeof decision.STATUS === 'string' ? decision.STATUS.toLowerCase() : ''
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

        if (ingredient) {
            ingredient.DECISIONS.forEach(decision => {
                decision.CLAIMS.forEach(claim => claimItems.push(BasicItemWrapper(decision, claim)));
                decision.HEALTH.forEach(health => healthItems.push(BasicItemWrapper(decision, health)));
            });
    
            const hr = <hr style={{ border: 'none', borderTop: `1px solid ${grey[200]}`, marginTop: '2rem', marginBottom: '1rem' }} />;
    
            return (
                <Grid key="ing-main" container justify='center' style={{ padding: '2.5rem 1rem' }}>
                    <Grid item xl={7} lg={8} md={10} sm={11} xs={12}>
                        <Paper style={{ width: '100%', padding: '1.5rem' }}>
                            <Grid container direction="row" alignItems="flex-end">
                                <Typography variant="h3" color="textPrimary">{ingredient.COMMON_NAME}</Typography>
                                <Typography color="textSecondary">
                                    <span style={{ paddingLeft: '0.5rem', paddingRight: '0.25rem' }}>&#8226;</span>
                                    {ingredient.ALIAS}
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
        } else {
            return (
                <Grid key="ing-loader" container justify='center' style={{ padding: '5rem 1rem' }}>
                    <CircularProgress />
                </Grid>
            )
        }
    }

    componentDidMount () {
        window.onUpdateData(this.forceUpdate.bind(this));
    }
}

export default Ingredient;
