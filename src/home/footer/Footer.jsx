
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './footer.css';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';





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
                    <RouterLink to="/" className="footerLink"><Button color="inherit"><FacebookIcon /></Button></RouterLink>
                    <RouterLink to="/jobs" className="footerLink"><Button color="inherit"><InstagramIcon /></Button></RouterLink>
                    <RouterLink to="/about" className="footerLink"><Button color="inherit"></Button></RouterLink>

                </Toolbar>
            </AppBar>

        </div>
    );
}