import React, { Component } from 'react';
import './Des.css'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';

const APP_ID = process.env.REACT_APP_ADZUNA_APP_ID1;
const API_KEY = process.env.REACT_APP_ADZUNA_API_KEY1;
const URL = `http://api.adzuna.com:80/v1/api/jobs/de/search/`;

class DesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            jobs: [],
            error: null,
            jobQuery: this.props.jobQuery,
            location: this.props.location,

        }
    }
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    }


    fetchJobData = (id) => {
        this.setState({ loading: true, })
        const job = this.state.jobQuery;
        const city = this.state.location;
        const APP_ID1 = APP_ID;
        const API_KEY1 = API_KEY;
        const url = URL + `1?app_id=${APP_ID1}&app_key=${API_KEY1}&results_per_page=20&what=${job}&where=${city}&content-type=application/json`;
        fetch(url)

            .then(response => response.json())
            .then(data => {
                console.log(data)
                const jobData = data.results.find(x => x.id === id)
                this.setState({ jobs: jobData, loading: false })
                console.log(this.state.jobs)

            })
            .catch((e) => {
                console.error(e)
                this.setState({ loading: false, error: e })
            });
    }


    componentWillMount() {
        this.setState({ jobQuery: this.props.jobQuery, location: this.props.location, })
        this.fetchJobData(this.props.match.params.id)
        console.log(this.props.match.params.id)

    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        const nextId = nextProps.match.params.id
        const currentId = this.props.match.params.id

        if (nextId !== currentId) {
            this.fetchJobData(nextId)
        }
    }


    render() {
        if (this.state.loading) {
            return <div style={{ display: 'flex', width: '60%', height: '60vh', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>
        }

        if (this.state.error) {
            return <div>There was an error while fetching the data from the server</div>
        }

        const jobDes = this.state.jobs;
        if (jobDes === undefined) {
            return <div className="my-auto mx-auto"><h2>Choose a Job</h2></div>
        }
        if (jobDes.redirect_url === undefined) {
            return <div className="my-auto mx-auto"><h2>Choose a Job</h2></div>
        }
        else {
            return (
                <div className='mainDes'>
                    <div className='MainSub'>

                        <div className='SubHeader container-fluid d-flex mt-5'>

                            <div className='container d-flex mt-3 ml-3'>
                                <div className='logo'><ApartmentOutlinedIcon style={{ fontSize: 108 }} color="primary" /></div>
                                <div className='companyName'>
                                    <h5 className="job-des-title" dangerouslySetInnerHTML={{ __html: jobDes.title }}></h5>
                                    <span className='company-name'>{jobDes.company.display_name}</span><br></br>
                                    <span className='location'>{jobDes.location.display_name}</span>
                                </div>



                            </div>
                            <div className='apply-button'><Button href={jobDes.redirect_url} target="_blank" variant="outlined" color="primary">Go to Job</Button></div>
                        </div>



                    </div>
                    <div className="job-description" dangerouslySetInnerHTML={{ __html: jobDes.description }}>

                    </div>
                </div>
            )
        }

    }

}


export default DesComponent;
