import React, { Component } from 'react';
import './jobComponent.css';
import JobSubComponent from './jobSubComponent/JobSubComponent';

class JobComponent extends Component {


  render() {
    let jobs = this.props.jobs
    console.log(jobs)
    return (
      <div>
        {

          jobs.map((job) => (

            <JobSubComponent id={job.id} title={job.title} key={job.id} company={job.company.display_name} city={job.location.display_name} />

          ))
        }
      </div>

    )
  }


}

export default JobComponent
