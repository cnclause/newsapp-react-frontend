import React from 'react'
import NewsCard from './NewsCard'

function NewsContainer(props) {

    console.log('newsarry', props.news.results)
    
     const newsCards = () => {
         if(props.news.results !=null && props.news.results.length  > 0){
             props.news.results.map(news =>{
                 return <NewsCard key={news.id} news={news} />
             } 
            )
         } 
    } 


    return (
        <div>
            <h1>Container</h1>
            {newsCards()}
        </div>
    )
}

export default NewsContainer
