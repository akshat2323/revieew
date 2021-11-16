import React, { useEffect, useState } from "react";
import MovieList from "./movieList";
import MovieHeading from "./MovieHeading";
import SearchBox from "./SearchBox";
import './home.css'
import AddFav from "./AddFav";
import RemoveFav from "./RemoveFav";


const Home = () => {
    const [movies, setmovies] = useState([]);

    const [search, setSearch] = useState('');

    const [fav, setFav] = useState([]);


    const getMovieRequest = (async (search) => {
        const url = `https://www.omdbapi.com/?s=${search}&apikey=6e464c4a`;

        const response = await fetch(url);
        const resJson = await response.json();
        if (resJson.Search) {

            setmovies(resJson.Search);
        }
    });

    const initfavorites = () => {

        if (localStorage.getItem("favourites") === null) {
            const initfav = [];
            setFav(initfav);
        }
        else {
            const initfav = JSON.parse(localStorage.getItem("favourites"));
            setFav(initfav);
        }
    }

    useEffect(() => {
        initfavorites();
        getMovieRequest(search);
    }, [search], []);


    
     
    // useEffect(()=>{
    //     const moviefav= JSON.parse(localStorage.getItem('favourites'));
    //     setFav(moviefav);
    // }, []);


    const saveList = (items) => {
        localStorage.setItem('favourites', JSON.stringify(items));
    };


    const addFavMovie = (movie) => {
        const newFav = [fav, movie];
        setFav(newFav);
        saveList(newFav);
    };

    const removeFavMovie = (movie) => {
        const newFav = fav.filter((fav) => fav.imdbID !== movie.imdbID);
        setFav(newFav);
        saveList(newFav);
    };

    return (<div className='container-fluid movie-app'>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
            <MovieHeading heading="Movies" />
            <SearchBox search={search} setSearch={setSearch} />
        </div>
        <div className='row'>
            <MovieList movies={movies} handlefav={addFavMovie} favcomponent={AddFav} />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
            <MovieHeading heading="Whislist" />

        </div>
        <div className='row'>
            <MovieList movies={fav} handlefav={removeFavMovie} favcomponent={RemoveFav} />
        </div>
    </div>
    )

}

export default Home;
