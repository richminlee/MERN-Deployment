import React, { useEffect, useState } from 'react';
import BeltForm from '../components/BeltForm';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default () => {
    const [belts, setBelts] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createBelt = belt => {
        axios.post('http://localhost:8000/api/belt', belt)
        .then(res => {
            setBelts([...belts, res.data]);
            navigate("/");
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for( const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <h1>Project Manager</h1>
            <Link to = {"/"}>Back to Dashboard</Link>
            <p>Plan a new project</p>
            <BeltForm errors={errors} onSubmitProp = {createBelt} initialProject = "" initialDueDate=""/>
        </div>
    )
}