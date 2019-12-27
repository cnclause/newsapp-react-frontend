import React from 'react'
import SearchNews from './SearchNews'

function Home(props){

    return (
        <div>
            <SearchNews
               searchTerm= {props.searchTerm}
               getNews={props.getNews}
               onNewsSearch={props.onNewsSearch}
            />
        </div>
    )
}

export default Home
