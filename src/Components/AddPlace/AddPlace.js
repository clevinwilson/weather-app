import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import './AddPlace.css';
import {FirebaseContext} from '../../store/Context'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

function AddPlace() {
    const[place,setPlace]=useState('');
    const {firebase} = useContext(FirebaseContext);
    const navigate=useNavigate();
    const date=new Date();
    const handleSubmit=()=>{
        firebase.firestore().collection('location').doc("gGn2cWHPrqcZOpYRp5X3").update({
            city:place,
            time:date.toString()
        }).then(()=>{
            navigate('/')
        })
    }

    return (
        <div className='box-padding'>
            <div className="form-group">
                <label style={{fontWeight:'600'}} className='section-title' >Add Cities</label>
                <input onChange={(e)=>{
                    setPlace(e.target.value)
                }} type="text" className="form-control " value={place}  placeholder="🔍 Search"/>
                  
            </div>
            <div className='add-place-button-box'>
                <button onClick={handleSubmit} type="button" className="btn btn-primary add-place-button">Add</button>
            </div>
        </div>
    )
}

export default AddPlace