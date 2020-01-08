import React from 'react'
import NewsCard from './NewsCard'

import '../stylesheets/NewsContainer.css'

function NewsContainer(props) {
    console.log('newsarry', props.news)
    
     const newsCards =  props.news.map(news =>{
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
