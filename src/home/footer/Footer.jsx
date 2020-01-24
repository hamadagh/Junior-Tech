
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './footer.css';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    backgroundColor: {
        background: '#4c9f70',
        height: 40,
        position: "fixed",
        bottom: 0,
    }


}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={{ root: classes.root, backgroundColor: classes.backgroundColor }}>

            <AppBar position="static" className={classes.backgroundColor}>
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        <RouterLink to="/"> <Button color="inherit"></Button></RouterLink>
                    </Typography>
                    <RouterLink to="/jobs"> <Button color="inherit"></Button></RouterLink>
                    <RouterLink to="/about"> <Button color="inherit"></Button></RouterLink>

                </Toolbar>
            </AppBar>

        </div>
    );
}