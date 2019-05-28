import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function IngredientItem (ingredient) {
    return (
        <Card style={{ margin: '0.5rem' }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {ingredient.alias}
                </Typography>
                <Typography variant="h5" component="h2">
                    {ingredient.common_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'/' + ingredient.id} >
                    <Button>View more details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default IngredientItem;
