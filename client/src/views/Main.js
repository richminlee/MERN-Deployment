import React, { useEffect, useState } from 'react';
import BeltList from '../components/BeltList';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default () => {
    const [belts, setBelts] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/belt')
        .then(res=>{
            setBelts(res.data);
        });
    }, [])
    const removeFromDom = beltId => {
        setBelts(belts.filter(belt => belt._id !== beltId))
    }

    return(
        <div>
            <h1>Project Manager</h1>
            <BeltList  belts = {belts} removeFromDom = {removeFromDom}/>
            <button onClick={(e) => navigate("/new")}>Add New Project</button>
        </div>
    )
}