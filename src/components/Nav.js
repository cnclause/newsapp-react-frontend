import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home'
import '../stylesheets/Nav.css'

class Nav extends Component {
    state = {
        news: [],
        searchTerm: ''
    }

    onNewsSearch = (event) => {
        // console.log('event', event)
        this.setState({searchTerm: event.target.value})

        if(this.state.searchTerm.length > 2){
            this.getNews(this.state.searchTerm)
        }
    }

    getNews = (searchTerm) => {
        console.log('searchTerm', this.state.searchTerm)
        fetch(`https://newsapi.org/v2/everything?language=en&q=${searchTerm}&apiKey=fd5ace6ad0b54f9c9dae1cc5004a9fb5`)
        // fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=alive
        //     `)
            .then(response => response.json())
            .then(news => {
                this.setState({news: news.articles})
            })
    }


    render(){
        return(
            <Router>
                <nav className='nav'>
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