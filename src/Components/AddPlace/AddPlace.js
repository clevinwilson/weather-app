import React from 'react'
import TextField from "@material-ui/core/TextField";
import './AddPlace.css'
function AddPlace() {
    return (
        <div className='box-padding'>
            <div className="form-group">
                <label style={{fontWeight:'600'}} className='section-title' >Add Cities</label>
                <input type="email" className="form-control "  placeholder="🔍 Search"/>
                  
            </div>
            <div className='add-place-button-box'>
                <button type="button" className="btn btn-primary add-place-button">Submit</button>
            </div>
        </div>
    )
}

export default AddPlace