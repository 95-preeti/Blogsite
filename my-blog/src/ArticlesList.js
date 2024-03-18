import React from 'react'
import { Link } from 'react-router-dom'


function ArticlesList({articles}) {
  return (
    <>
    {articles.map((article, key)=> (

      <Link to={`/article/${article.name}`} key={key}>
      <h3 className="font-bold text-black  hover:bg-gray-100 ">{article.title}</h3>
      <p className=' font-bold text-white '>{article.content[0].substring(0, 150)}.......</p>
      </Link>
    ))}
    </>

  )
}

export default ArticlesList
