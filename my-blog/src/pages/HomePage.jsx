import React from "react"
import ArticlesList from "../ArticlesList";
import articlesContent from "../article-content";
  function HomePage() {
  return (
    <>
     <div className="mx-3 my-2 px-2 py-2 mr-[46rem] bg-green-50 bg-opacity-40  rounded-lg">
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

export default HomePage


