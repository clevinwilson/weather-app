import React from 'react'
import TextField from "@material-ui/core/TextField";
import './AddPlace.css'
function AddPlace() {
    return (
        <div>
            <div class="form-group">
                <label style={{fontWeight:'600'}} className='section-title' for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  
            </div>
        </div>
    )
}

export default AddPlace