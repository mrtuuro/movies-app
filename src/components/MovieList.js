import React, { Component } from 'react'

const MovieList = (props) => {


        function handleClick() {
            console.log("Button Clicked")
        }

        return (
            <div className='row'>

                {props.movies.map((movie) => (
                    
                    <div key={movie.id} className='col-lg-4'>
                        <div className='card mb-4 shadow-sm'>
                            <img src={movie.imageURL} className='card-img-top' alt='Test' />
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{movie.overview}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={handleClick} className='btn btn-md btn-outline-danger'>Delete</button>
                                    <h2><span className='badge bg-primary'>{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


export default MovieList
