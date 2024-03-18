import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutPage from "./pages/AboutPage";
import  HomePage  from "./pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
    <Routes>
    <Route path="/" element={<HomePage />} exact/>
    <Route path="/about" element={<AboutPage />} exact/>
    <Route path="/articleslist" element={<ArticlesListPage />} exact />
    <Route path="/article/:name"  element={<ArticlePage/>} exact />
    </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
