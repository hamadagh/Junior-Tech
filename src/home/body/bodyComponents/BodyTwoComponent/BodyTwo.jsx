import React from "react";
import './bodytwo.css';
import './responsive-home-body-two.css'
import Photo from './work.svg';
import {Button, Container, Row } from 'reactstrap';

const BodyTwo = () => {
    return(
        <div className = "main-div">
        <Container className='container'>
            <Row className= 'Row'>
        <div className = "title">
        <Container>
             <p className="body-two-text">Find the right job</p>
            <p>Get the Tech job that you deserve, more than +1000 job offers in a junior position all around Germany apply now! .
            
            </p>
           
            
            <div className='butt-search'><Button path='/jobs' className='search-job'>Search job</Button></div>
            </Container>
        </div>

       <img className='photo' src={Photo} alt="work-img"/>
       <div className='butt-none'><Button path='/jobs' className='search-job'>Search job</Button></div>
        </Row>
        </Container>
        </div>
    )
}
 

export default BodyTwo;