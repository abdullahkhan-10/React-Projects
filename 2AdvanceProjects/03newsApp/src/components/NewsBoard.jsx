import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect( () =>{
        // Initially we will have category (general), because we have set in state variable (category)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
        .then(response => response.json())
        .then( data => setArticles(data.articles))
        .catch( (err) =>{
            console.log("Errorr found", err);
            
        })
    },[category])

    // console.log(articles);

  return (
    <div >
        <h2 className='text-center mt-3'>Latest <span className='badge bg-primary'>News</span></h2>
        {
            articles.map( (news, index) =>{
                return(
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                )
            })
           
        }
    </div>
  )
}

export default NewsBoard