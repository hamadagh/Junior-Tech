

import React from 'react';
import Logo from './icon/logo.png';
import {Button} from 'reactstrap'
import './DesSub.css';

const DesSubComponent = (description) =>{
    
        return (
            <div className='MainSub'>
            
            <div className= 'SubHeader container-fluid d-flex'>

            <div className= 'container d-flex mt-3'>
                <div className= 'logo'><img src={Logo} alt=""/></div>
                <div className= 'companyName mt-3 ml-3'>
                    <h5>{description.name}</h5>
                    <div className= 'location'><p>Berlin</p></div>
                    </div>
                    
                    

            </div>
            <div className='applyButton mt-4'><Button>Apply</Button></div>
            </div>

            </div>
        )
    }


export default DesSubComponent
