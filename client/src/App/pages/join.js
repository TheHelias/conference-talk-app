import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Joint = () => {

    return (
      <div className='joint-div'>
        <Link className="link" to='/talklist'>Talks</Link>
        <Link className="link" to='/attendlist'>Attendees</Link>
        <Link className="link" to='/assignedtalks'>Assign a talk to an Attendee</Link>
        <Link className="link" to='/assignedtalkslist'>Assigned Talks</Link>
      
      </div>
    );
}

export default Joint;