import React, { useState } from 'react';
import './WeatherCard.css'


function Card() {
    const [weather, setWeather]=useState(true)
    return (
        <div>
            <div className=" mb-4 card col-md-3" >
                <div className="card-body ">
                    {weather ? <div className='row'>
                        <div onClick={() => { setWeather(!weather)}} className='col-6'>
                            <h5 className=" card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 sub-title">Card subtitle</h6>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a className="card-link">Card link</a>
                            <a className="card-link">Another link</a> */}
                        </div>
                        <div style={{ textAlign: "center" }} className='col-6'>
                            {/* <img src='https://raw.githubusercontent.com/goyal-aman/Images/master/weatber.jpg'></img> */}
                            <h1 className="temperature-box" ><span className='temperature' >23</span><sup className='celsius-icon'>°</sup><span className='celsius' >C</span></h1>
                        </div>
                    </div>
                        :

                        <div onClick={() => { setWeather(!weather) }}  className='row'>
                            <div className='add-place'>
                                <h2 className='add-place-icon'>+</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>

           
        </div>
    )
}

export default Card