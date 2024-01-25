import React from 'react'
import { Link } from 'react-router-dom';



function Card({ img, name, info }) {
    return (
        <div className="container ">
            <div className='row'>
                <div className="card my-4 mx-2 h-100 ">
                    <div className="card-body p-2  ">
                        <img src={img} className=" h-50 w-100 rounded" />
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text lead">{info}</p>
                        <hr></hr>
                        <center>
                            <Link to={`/post/:id`}>Read More</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card