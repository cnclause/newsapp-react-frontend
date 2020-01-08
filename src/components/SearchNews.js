import React from 'react'
import '../stylesheets/SearchNews.css'

function SearchNews(props) {
    // console.log('onnewsearch', props.onNewsSearch)

    return (
        <div>
            <form className="news-form">
                <input
                    className="input-search"
                    placeholder='Search Topic..'
                    type="text"
                    value={props.searchTerm} 
                    onChange={props.onNewsSearch}
                />
            </form> 
        </div>
    )
}

export default SearchNews
