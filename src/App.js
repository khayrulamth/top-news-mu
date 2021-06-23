import logo from './logo.svg';
import './App.css';
import News from './components/News/News';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [articles,setArticles] = useState([]);

  useEffect(() =>{
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-05-23&sortBy=publishedAt&apiKey=a49cdfad2403431087d4bccb284754b3")
    .then(res =>res.json())
    .then(data =>{setArticles(data.articles);})
  },[])

  
  return (
    <div className="App">
      <Header ></Header>
      {
        articles.map(article =><News key={article.title} article={article}></News>)
      }
    </div>
  )
  };
export default App;
