import React from 'react'
import SearchNews from './SearchNews'
import NewsContainer from './NewsContainer'

function Home(props){

    return (
        <div>
            <SearchNews
               searchTerm= {props.searchTerm}
               getNews={props.getNews}
               onNewsSearch={props.onNewsSearch}
               news={props.news}
            />
            <NewsContainer news={props.news}/>
        </div>
    )
}

export default Home
