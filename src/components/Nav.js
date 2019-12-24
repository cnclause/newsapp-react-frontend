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
        this.setState({searchTerm: event.target.value})
    }

    getNews = (searchTerm) => {
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=fd5ace6ad0b54f9c9dae1cc5004a9fb5`)
            .then(response => response.json())
            .then(news => {
                this.setState({ news })
            })
    }





    render(){
        return(
            <Router>
                <nav class='name'>
                    <Link classname="link" to='/'> Home</Link>
                </nav>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} 
                    searchTerm={this.state.searchTerm}
                    getNews={this.getNews(this.state.searchTerm)}
                    onNewsSearch={this.onNewsSearch}
                    news={this.state.news}/>}
                />
            </Router>
        )
    }
}

export default Nav