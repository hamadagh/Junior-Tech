
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './inputGroup.css';







const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),



        },


    },
}));
const ColorButton = withStyles(theme => ({
    root: {
        width: 100,
        height: 45,
        color: "white",
        backgroundColor: "#4c9f70",
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


export default function InputGroup() {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" mx="auto" className="input-form-group">
            <form className={classes.root} id="home-input-form" noValidate autoComplete="off" my="auto" >

                <TextField id="outlined-basic" label="Keyword" labelWidth="" variant="outlined" />
                <TextField id="outlined-basic" label="Location" variant="outlined" />

            </form>

            <div >
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Search
                </ColorButton>
            </div>
        </Box>
    );
}