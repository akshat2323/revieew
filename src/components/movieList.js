import React from "react";


const MovieList = (props) => {

    const Fav = props.favcomponent;
    return (
        <>
            {props.movies.map((movie, index) =>

                <div className='image-container mx-3 d-flex justify-content-start align-items-center flex-column'>
                    <img src={movie.Poster} alt="movie.Title" />
                    

                    <h1>{movie.Title}</h1>
                    <h3>{movie.Year}</h3>
                    <h5>{movie.Type}</h5>
                    
                    <div onClick={()=> props.handlefav(movie)} className='overlay d-flex align-items-center justify-content-center'>
                        <Fav/>
                    </div>

                </div>
                

            )}


        </>
    )
}

export default MovieList;