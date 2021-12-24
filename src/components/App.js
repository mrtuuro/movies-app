import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import AddMovie from "./AddMovie";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";




class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({movies: response.data})
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
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <Router>


                <div className='container'>
                    <Switch>


                        <Route path="/" exact render={() =>
                            <React.Fragment>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <SearchBar
                                            searchMovieProp = {this.searchMovie}/>
                                    </div>
                                </div>

                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp = {this.deleteMovie} />
                            </React.Fragment>
                        }>

                        </Route>
                        <Route path="/add" component={AddMovie}/>

                    </Switch>
                </div>

            </Router>
        )
    }
}

export default App
