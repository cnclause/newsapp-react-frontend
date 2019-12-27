import React from 'react'
import NewsCard from './NewsCard'

function SearchNews(props) {

    const newsCards = props.getNews().map(news => {
        return <NewsCard key={news.id} news={news} />
    })

    return (
        <div>
            {newsCards}
            <form>
                <input
                    placeholder='Search Topic..'
                    type="text"
                    value={props.searchTerm} 
                    onChange={props.onNewsSearch()}
                />
            </form> 
        </div>
    )
}

export default SearchNews
