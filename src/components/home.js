import React,{useEffect, useState} from "react";
import MovieList from "./movieList";
import MovieHeading from "./MovieHeading";
import SearchBox from "./SearchBox";
import './home.css'


const Home = () => {
    const [movies, setmovies] = useState([]);

    const [search, setSearch] = useState('');


    const getMovieRequest =  ( async (search)=>{
        const url = `https://www.omdbapi.com/?s=${search}&apikey=6e464c4a`;

        const response = await fetch(url);
        const resJson = await response.json();
        if(resJson.Search){

            setmovies(resJson.Search);
        }
    });

    useEffect(()=>{
        getMovieRequest(search);
    }, [search]);

    return( <div className='container-fluid movie-app'>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <MovieHeading heading="Movies"/>
        <SearchBox search={search} setSearch={setSearch}/>
        </div>
        <div className='row'>
        <MovieList movies = {movies}/>
            </div>
    </div> )
    
}

export default Home;
