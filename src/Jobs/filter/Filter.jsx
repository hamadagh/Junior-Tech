import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './filter.css';
import ChipsArray from './skillsComponent/Skills';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';




const jobTypes = [
    {

        label: 'All Type',
        value: 'Job Type',
    },
    {

        label: 'Full Time',
        value: 'Full Time',
    },
    {

        label: 'Part Time',
        value: 'Part Time',
    },
    {

        label: 'Internship',
        value: 'Internship',
    },

];

const radius = [
    {

        label: '20 km',
        value: 'Radius',
    },
    {

        label: '50 km',
        value: '50 km',
    },
    {

        label: '100 km',
        value: '100 km',
    },
    {

        label: '200km',
        value: '200km',
    },

];
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 130,
            alignItems: "center",



        },
        chip: {
            margin: theme.spacing(0.5),
        },
    },
    jobType: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,

        },

    },
    button: {
        margin: theme.spacing(1),
        color: "white",
        backgroundColor: "#4c9f70",
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}));



export default function Filter() {
    const classes = useStyles();

    const [chipsList, setChipsList] = useState([]);
    const [inputValue, setInputValue] = useState(``);
    const [jobType, setJobType] = React.useState('Job Type');
    const [jobRadius, setJobRadius] = React.useState('Radius');




    const handleChange = e => {
        const { value } = e.target;
        setInputValue(value)
    }


    const updateChipList = () => {
        const newValue = inputValue.trim()

        if (newValue.length > 0) {

            if (!chipsList.includes(newValue)) {

                if (chipsList.length < 5) {
                    setChipsList([...chipsList, newValue])
                    setInputValue(``)
                }
            }

        }
    }



    const handleClick = () => {
        updateChipList()
    }

    const handleChipDelete = chipToDelete => {
        setChipsList(chipsList => chipsList.filter(chip => chip !== chipToDelete));
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        updateChipList()
    }

    const handletypeChange = event => {
        setJobType(event.target.value);
    };
    const handleRadiusChange = event => {
        setJobRadius(event.target.value);
    };
    return (
        <div className="filter-section">
            <div className="skill-section">
                <form
                    onSubmit={onFormSubmit}
                    className={classes.root}
                    noValidate autoComplete="off"
                >

                    <div className="skills-section">
                        <TextField
                            label="Skills"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <Fab color="primary" size="small" aria-label="add" my="auto" onClick={handleClick}>
                            <AddIcon />
                        </Fab>
                        <ChipsArray onChipDelete={handleChipDelete} chipsList={chipsList} />
                    </div>

                </form>
            </div>

            <div className="jobType-section">
                <form className={classes.jobType} noValidate autoComplete="off">

                    <TextField
                        id="outlined-select"
                        select
                        label="Job Type"
                        my="auto"
                        value={jobType}
                        onChange={handletypeChange}
                        size="small"
                        variant="outlined"
                    >
                        {jobTypes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select"
                        select
                        my="auto"
                        label="Radius"
                        value={jobRadius}
                        onChange={handleRadiusChange}
                        size="small"
                        variant="outlined"
                    >
                        {radius.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        my="auto"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Saved
      </Button>
                </form>

            </div>


        </div>

    );
}