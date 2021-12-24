import React from 'react'

const MovieList = (props) => {


        return (
            <div className='row'>

                {props.movies.map((movie) => (
                    
                    <div key={movie.id} className='col-lg-4'>
                        <div className='card mb-4 shadow-sm'>
                            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.imageURL}`} className='card-img-top' alt='Test' />
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{movie.overview}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={(event) => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
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
