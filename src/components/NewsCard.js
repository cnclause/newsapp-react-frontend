import React from 'react'

function NewsCard(props) {
    console.log('inNewsCard', props.news)
    

    return (
        <div className="news-card">
            <h1>{props.news.title}</h1>
            <h2>{props.news.source.name}</h2>
            <img className="card-picture" alt="card_img" src={props.news.urlToImage}/>
            <p>{props.news.description}</p>
            <a href={props.news.url}>Link to article</a>
        </div>
    )
}

export default NewsCard
