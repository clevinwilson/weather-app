import React from 'react';
import './Card.css'

function Card() {
    return (
        <div>
            <div className=" card col-md-3" >
                <div className="card-body ">
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className="display-4 card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 sub-title">Card subtitle</h6>
                            <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a className="card-link">Card link</a>
                            <a className="card-link">Another link</a> */}
                        </div>
                        <div className='col-6'>
                            {/* <img src='https://raw.githubusercontent.com/goyal-aman/Images/master/weatber.jpg'></img> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card