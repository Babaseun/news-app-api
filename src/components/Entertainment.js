import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Entertainment() {
 const [articles, setarticles] = useState([]);
 useEffect(() => {
  const API_KEY = '5bfaf80040e24d87b38a79a85168ecf7';
  const API = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`;

  axios
   .get(API)
   .then((response) => {
    setarticles(response.data.articles);
   })
   .catch((err) => console.log(err));
 }, []);

 return (
  <div className="headlines">
   <h1 className="title header-headlines">Entertainment</h1>

   <div>
    <div className="section-container">
     {articles.map((article, index) => (
      <div key={index} className="section">
       <div className="img-section">
        <img
         className="url-img"
         src={article.urlToImage}
         alt={article.urlToImage}
        />
       </div>
       <div className="section-title">
        <h1 className="title">{article.title}</h1>
        <hr />
       </div>
       <div className="section-description">
        <p>
         {article.description} <Link to={`/en/${index}`}>Read More</Link>
        </p>
        <hr />
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Entertainment;
