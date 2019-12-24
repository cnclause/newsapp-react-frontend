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





    render(){
        return(
            <Router>
                <nav class='name'>
                    <Link classname="link" to='/'> Home</Link>
                </nav>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} 
                    news={this.state.news}/>}
                />
            </Router>
        )
    }
}

export default Nav