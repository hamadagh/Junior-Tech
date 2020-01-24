import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core/';
import './intro.css'
import './responsiveIntro.css'



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 0, 6, 0),
        letterSpacing: '1px',
        fontFamily: 'Oswald, sans-serif'
    },
    para: {
        letterSpacing: '1px',
        fontWeight: 'bold',
    },


}));

const Intro = () => {

    const classes = useStyles();


    return (






        <div className='mainIntro'>

            <Container maxWidth="lg">
                <Typography className={classes.root} variant="h3" component="h3">
                    <span className="our-team"> Our Team</span>
                </Typography>
                <Typography className={classes.para} component="p" color="#455a64">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Cumque adipisci hic veritatis necessitatibus temporibus.
                      Quia blanditiis nulla consectetur dicta dolores explicabo
                       repudiandae dolorem vero. Ipsa id facilis explicabo laboriosam eaque.
                    Paper can be used to build surface or other elements for your.
      </Typography>
            </Container>

        </div>
    )
}

export default Intro;