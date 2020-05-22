import React, {useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DeleteButton from './DeleteButton';
export default props => {
    const [belts, setBelts] = useState([]);
    useEffect(() => {
        console.log("hello");
        axios.get('http://localhost:8000/api/belt')
        .then(res => setBelts(
            res.data.sort((a,b) => (a.dueDate > b.dueDate)? 1: -1)
            ))

    }, [])
    const removeFromDom = beltId => {
        setBelts(belts.filter(belt => belt._id !== beltId))
    }
    const statusHandler = (status, id, idx) => {
        axios.put('http://localhost:8000/api/belt/' + id, status)
        .then(res => {
            [...belts][idx].status++ ;
            setBelts([...belts]);
        })
    }
    return(
        <div className="container border border-dark">
                            <div className="row">
                                <div className="col border border-dark h3">Backlog</div>
                                <div className="col border border-dark h3">In Progress</div>
                                <div className="col border border-dark h3">Completed</div>
                            </div>
                            
            {belts.map((belt, idx)=>{ 
                return(
                    <div key={idx} className="row">
                        <div className="col border border-dark">
                            <div className="row">
                                <div className="col ">
                                    {
                                        belt.status === 0?
                                        <div>
                                        <div className="row h5">{belt.project}</div>
                                        <div className="row">
                                            {
                                            moment(belt.dueDate).format('YYYY-MM-DD') >= moment(new Date ()).format('YYYY-MM-DD')?
                                            <div> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            :
                                            <div style={{color:"red"}}> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            }
                                            </div>
                                        <button onClick={(e)=> {statusHandler(belt.status, belt._id, idx)}}>Start Project</button>
                                        </div>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col border border-dark">
                            <div className="row">
                                <div className="col ">
                                    {
                                        belt.status === 1?
                                        <div>
                                        <div className="row h5">{belt.project}</div>
                                        <div className="row">
                                            {
                                            moment(belt.dueDate).format('YYYY-MM-DD') >= moment(new Date ()).format('YYYY-MM-DD')?
                                            <div> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            :
                                            <div style={{color:"red"}}> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            }
                                        </div>
                                        <button onClick={(e)=> {statusHandler(belt.status, belt._id, idx)}}>Move to Completed</button>
                                        </div>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col border border-dark">
                            <div className="row">
                                <div className="col ">
                                    {
                                        belt.status === 2?
                                        <div>
                                        <div className="row h5">{belt.project}</div>
                                        <div className="row">
                                            {
                                            moment(belt.dueDate).format('YYYY-MM-DD') >= moment(new Date ()).format('YYYY-MM-DD')?
                                            <div> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            :
                                            <div style={{color:"red"}}> {moment(belt.dueDate).format('MM-DD-YYYY')} </div>
                                            }
                                        </div>
                                        <DeleteButton beltId={belt._id} successCallback={() => removeFromDom(belt._id)}/>
                                        </div>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div> 
            )
})}
        </div>

    )
}