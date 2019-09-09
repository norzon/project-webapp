import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function IngredientItem (ingredient) {
    return (
        <Card key={ingredient.ID} style={{ margin: '0.5rem' }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {ingredient.ALIAS}
                </Typography>
                <Typography variant="h5" component="h2">
                    {ingredient.COMMON_NAME}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'/ingredient/' + ingredient.ID} >
                    <Button>View more details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default IngredientItem;
