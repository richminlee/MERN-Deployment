import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import BeltForm from '../components/BeltForm';
export default props => {
    const { id } = props;
    const [belt, setBelt] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 


    useEffect (() => {
        axios.get('http://localhost:8000/api/belt/' +id)
        .then(res => {
                setBelt(res.data);
                setLoaded(true);
            })
    }, [])
    const updateBelt = belt => {
        axios.put('http://localhost:8000/api/belt/' +id, belt)
        .then(res => navigate("/"))
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
            <h1>Update a Belt</h1>
            {loaded && (
                <>
                <BeltForm
                onSubmitProp = {updateBelt}
                initialName = {belt.name}
                errors={errors}
                />
                </>
            )}
        </div>
    )
}