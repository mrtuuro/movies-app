import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from "axios";
// require('dotenv').config()
//
 


class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ""
    }

    async componentDidMount() {
        console.log(process.env.REACT_APP_EBU_NUMBER)
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4cd87ea2a846e785bd9bd66bfd5490ea&language=en-US&page=1")
        console.log(response.data.results)
        this.setState({movies: response.data.results})
    }


    deleteMovie = async (movie) => {
        await axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    }


    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar
                            searchMovieProp = {this.searchMovie}
                        />
                    </div>
                </div>
                
                <MovieList 
                    movies={filteredMovies}
                    deleteMovieProp = {this.deleteMovie} />
            </div>
        )
    }
}

export default App
