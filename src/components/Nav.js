import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home'

class Nav extends Component {
    state = {
        news: [],
        searchTerm: ''
    }

    onNewsSearch = (event) => {
        console.log('event', event)
        this.setState({searchTerm: event.target.value})

        this.getNews(this.state.searchTerm)
    }

    getNews = (searchTerm) => {
        // searchTerm = this.state.searchTerm
        // fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=fd5ace6ad0b54f9c9dae1cc5004a9fb5`)
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=alive
            `)
            .then(response => response.json())
            .then(news => {
                this.setState({ news })
            })
    }


    render(){
        return(
            <Router>
                <nav className='name'>
                    <Link className="link" to='/'> Home</Link>
                </nav>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} 
                    searchTerm={this.state.searchTerm}
                    getNews={this.getNews}
                    onNewsSearch={this.onNewsSearch}
                    news={this.state.news}/>}
                />
            </Router>
        )
    }
}

export default Nav