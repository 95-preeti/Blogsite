import React from "react"
import { useParams } from 'react-router-dom';
import articlesContent from "../article-content";
import ArticlesList from "../ArticlesList";
function ArticlePage({match}) {
  const {name} = useParams();
  const article = articlesContent.find(article => article.name === name);
  if (!article) return <h1 className="font-bold text-white">Article Does not exist! </h1>;

const otherArticles=articlesContent.filter((article)=> article.name !== name);
  return (
    <>
    <h1 className="font-bold text-white">{article.title}</h1>
    {article.content.map((paragraph,key)=>(
    <p className="font-bold text-white" key={key}>{paragraph}</p>
    ))}
    <ArticlesList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
