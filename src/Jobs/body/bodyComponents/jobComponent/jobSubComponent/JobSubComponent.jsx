import React from 'react';
import { Link } from 'react-router-dom';
import './jobSubComponent.css';
import logo from './icons/logo.png';

const JobSubComponent = (props) => {

    return (

        <Link to={`/jobs/${props.id}`}>
            <div className="jobs-sub-component" >
                <div className="job-post-component container-fluid d-flex mt-3 mb-3">

                    <div className="company-logo">
                        <img src={logo} alt="company-logo" className="job-company-logo" />
                    </div>
                    <div className="job-post">
                        <div className="job-post-left d-flex flex-column ml-4">
                            <span dangerouslySetInnerHTML={{ __html: props.title }} className="job-post-title"></span>
                            <span className="job-post-company">{props.company}</span>
                            <span className="job-post-location">{props.city}</span>
                        </div>
                        <div className="job-post-right">
                            <div className="job-post-save">

                            </div>
                            <div className="job-post-skills-lights">

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="job-post-line"></hr>
            </div>
        </Link>
    )


}

export default JobSubComponent
