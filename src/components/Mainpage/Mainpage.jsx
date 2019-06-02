import React from 'react';
import Grid from '@material-ui/core/Grid';
import IngredientItem from './Ingredient-Item';

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
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {Object.keys(window.data).map(k => {
                        return IngredientItem(window.data[k]);
                    })}
                </Grid>
            </Grid>
        );
    }

    componentDidMount () {
        window.onUpdateData(this.forceUpdate.bind(this));
    }
}

export default Mainpage;
