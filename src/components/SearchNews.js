import React from 'react'
import NewsCard from './NewsContainer'

function SearchNews(props) {
    // console.log('onnewsearch', props.onNewsSearch)

    return (
        <div>
            <form>
                <input
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
