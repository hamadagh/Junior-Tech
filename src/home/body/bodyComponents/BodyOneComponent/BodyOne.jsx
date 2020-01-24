import React from 'react'
import './bodyone.css'
import './responsive-home-body-one.css'
import icon1 from './icons1.png'
import icon2 from './icons2.png'
import icon3 from './icons3.png'
import icon4 from './icons4.png'
import icon5 from './icons5.png'
import icon6 from './icons6.png'
import { Media, Button, Container, Row } from 'reactstrap'


const BodyOne = () => {
  return (


    <div className='media-object'>

      <div className='header'><p>Browse Jobs By Specialisms</p></div>

      <div className='media'>

        <div className= 'media-content'>
    <Container>
    <Row>
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon1} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
        Quick Apply
        </Media>
        Easily apply to multiple jobs with  <br></br>one click!
      </Media>
    </Media>   
   
    

   
    <Media >
      <Media left href="#">
        <Media object className = 'icon2 'src={icon2} alt="icon" />
      </Media>
      <Media body className= 'para'>
        <Media className='heading' heading>
        Read Latest Article 
        </Media>
                  Get career development <br></br>advices and application tips.
      </Media>
              </Media>


  
    <Media className = "icon-none">
      <Media left href="#">
        <Media object className = 'icon1 icon-none' src={icon3} alt="icon" />
      </Media>
      <Media body  className= 'para icon-none'>
        <Media className='heading' heading>
        Specialized Search
        </Media>
        Help junior tech professionels to<br></br>find
            positions matching their skills.
      </Media>
              </Media>
            </Row>


  
  
    <Row>
    <Media>
      <Media left href="#">
        <Media object className = 'icon1' src={icon4} alt="icon" />
      </Media>
      <Media body  className= 'para'>
        <Media className='heading' heading>
        Advanced Filter 
        </Media>
        Personalized search algorithm <br></br>to help find the last job offers.
      </Media>
              </Media>

   
    <Media>
      <Media left href="#">
        <Media object className = 'icon2'src={icon5} alt="icon" />
      </Media>
      <Media body className= 'para'>
        <Media className='heading' heading>
        Job Alert Emails
        </Media>
        Keep track of positions that you're <br></br>interested in by subscribe our page.
      </Media>
              </Media>

 
    <Media>
      <Media left href="#">
        <Media object className = 'icon1 icon-none' src={icon6} alt="icon" />
      </Media>
      <Media body  className= 'para icon-none'>
        <Media className='heading' heading>
          Salary
        </Media>
            Find all information about your <br></br>potential salary.
      </Media>
              </Media>
            </Row>




            <div className='button' ><Button>Search Job</Button>{''}</div>

          </Container>
        </div>
      </div>
    </div>


  );
};





export default BodyOne;