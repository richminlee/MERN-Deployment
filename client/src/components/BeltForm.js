import React, { useState } from 'react';
import { navigate } from '@reach/router';

export default props => {
    const { initialProject, initialDueDate, initialStatus, onSubmitProp, errors } = props;
    const [project, setProject] = useState(initialProject);
    const [dueDate, setDueDate] = useState(initialDueDate);
    const [status, setStatus] = useState();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({project, dueDate, status});
    }


    return(
        <div className="container">
        <div className="row">
            <div className="col">{errors.map((err, index) => <p key={index}>{err}</p>)}</div>
        </div>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 border border-dark p-4">
        <form onSubmit={onSubmitHandler}>
            <div className="row">
                <div className="col">
                    <label>Project </label>
                </div>
                <div className="col">
                    <input type="text" name="project" value={project} onChange = {(e) => setProject(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label>Due Date</label>
                </div>
                <div className="col">
                <input type="date" name="dueDate" value={dueDate} onChange = {(e) => setDueDate(e.target.value)}/>
                </div>
            </div>
            <input type="submit" value="Plan Project"/>
        </form>
        </div>
        </div>
        </div>
    )
}