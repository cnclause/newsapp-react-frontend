import React from 'react'
import NewsCard from './NewsCard'

function NewsContainer(props) {
    console.log('newsarry', props.news.articles)
    
     const newsCards =  props.news.articles.map(news =>{
                 return(<NewsCard 
                    key={news.id} 
                    news={news} />) 
             })
        



    return (
        <div>
            <h1>Container</h1>
            {newsCards}
        </div>
    )
}

export default NewsContainer
