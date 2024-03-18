import React from 'react'
import ArticlesList from '../ArticlesList'
import articlesContent from '../article-content'
function ArticlesListPage() {
  return (
  <>
     <h1 className=" px-2 py-0 mx-0  font-bold text-white text-4xl  flex justify-center">Our Article</h1>
     <div className='mx-3 my-2 px-2 py-2 mr-[46rem] bg-gray-50 bg-opacity-40 text-white font-bold rounded-lg'>
     <ArticlesList articles={articlesContent}/>
     </div>
     <footer className="">
        <div className="justify-center my-0 px-2 py-2 flex bg-yellow-700">
          <p className="font-bold text-lg"><b>&#169;</b>Blog.All Rights reserved</p>

        </div>

     </footer>
    
  
  </>
  )
}

export default ArticlesListPage
 