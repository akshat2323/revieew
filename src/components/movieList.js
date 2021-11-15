import React from "react";


const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>

                <div className='image-container d-flex justify-content-center align-items-center flex-column'>
                    <img src={movie.Poster} alt="movie.Title" />
                    <div className='flex-column'>

                    <h1>{movie.Title}</h1>
                    <h3>{movie.Year}</h3>
                    <h5>{movie.Type}</h5>
                    </div>
                    <div className='overlay d-flex align-items-center justify-content-center'></div>

                </div>
                

            )}


        </>
    )
}

export default MovieList;