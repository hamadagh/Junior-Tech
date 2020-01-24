import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './nav.css';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },
    backgroundColor: {
        background: '#4c9f70',

    }

}));


export default function Nav() {
    const classes = useStyles();

    return (
        <div className={{ root: classes.root, backgroundColor: classes.backgroundColor }} >

            <AppBar position="static" className={classes.backgroundColor}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <RouterLink to="/"> <Button color="inherit"><span className="navLink">Home</span></Button></RouterLink>
                    </Typography>
                    <RouterLink to="/jobs"> <Button color="inherit"><span className="navLink">Jobs</span></Button></RouterLink>
                    <RouterLink to="/about"> <Button color="inherit"><span className="navLink">About</span></Button></RouterLink>

                </Toolbar>
            </AppBar>

        </div>
    );
}