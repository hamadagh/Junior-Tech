
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Body.css';
import DesComponent from './bodyComponents/DesComponent/DesComponent';
import JobComponent from './bodyComponents/jobComponent/JobComponent';




export class Body extends Component {



    render() {

        if (this.props.loading) {
            console.log(this.props.jobQuery)
            console.log(this.props.location)
            return <div className="spinner"><CircularProgress /></div>
        }

        return (
            <div className='mainBody'>

                <div className="jobs-body-container">
                    <div className="jobs-container" id="style-1">
                        <JobComponent jobs={this.props.data} />
                    </div>
                    <Route path="/jobs/:id" render={(routeProps) => <DesComponent jobs={this.props.data} match={routeProps.match} jobQuery={this.props.jobQuery} location={this.props.location} />} />

                </div>

            </div>
        )
    }
}


export default Body;
