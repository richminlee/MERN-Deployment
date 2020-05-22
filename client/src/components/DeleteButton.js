import React from 'react';
import axios from 'axios';
export default props => {
    const { beltId, successCallback } = props;
    const deleteBelt = e => {
        axios.delete('http://localhost:8000/api/belt/' + beltId)
        .then(res=>{
            successCallback();
        })
    }
    return(
        <button onClick={deleteBelt}>
            Remove Project
        </button>
    )
}