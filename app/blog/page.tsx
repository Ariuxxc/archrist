"use client"
import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


export default function Blog() {
  axios.defaults.baseURL = "https://back-express-8g76.onrender.com";
        interface Article {
            id: string;
            title: string;
            content: string;
            author: string;
        }
 const [articles, setArticles] = useState<Article[]>([]);


 useEffect(() => {
            async function fetchArticles() {
                try {
                    const response = await axios.get('/api/get-article');
                    setArticles(response.data);
                } catch (error) {
                    console.error('Erreur lors de la récupération des articles:', error);
                }
            }
            fetchArticles();
        }, []);

  return (
    <> 
     <head>
    <meta property="og:title" content="Mes publications - Blog de Christian Ferreol" />
    <meta property="og:description" content="Découvrez les dernières publications de Christian Ferreol sur le développement web." />
    <meta property="og:url" content="https://jean-christ.vercel.app/blog" />
    <meta property="og:image" content="https://jean-christ.vercel.app/image.png" />
    <meta property="og:type" content="website" />
 </head>
  <nav className="d-flex justify-content-between flex-wrap" style={{ marginBottom: '20px' }}>
    <ul className="nav">
        <Link href="#about" className="hover:text-orange-500 transition">
            <button className="btn btn-outline-primary">Accueil</button>
        </Link>
        <Link href="#about" className="hover:text-orange-500 transition">
            <button className="btn btn-outline-primary">Discord</button>
        </Link>
    </ul>
</nav>
           <u><h1><strong>Mes publications</strong></h1></u> <br></br>
          
             
              <center>
            


              <div className="container">
                {articles.length > 0 ? (
                    articles.map(article => (
                        <div key={article.id} className="card mb-4 shadow-sm" style={{ width: '95%', maxWidth: '100%', padding: 10, borderColor: 'blue' }}>
                           <u><h2 className="card-title font-bold text-xl text-blue-500">{article.title}</h2></u> 
                            <div className="card-body">
                                <p className="card-text text-gray-700">{article.content}</p><br />
                                
                            </div>
                            <div className="card-footer">
                              <p className="text-muted italic">Auteur: {article.author}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p className="alert alert-warning text-center">Aucun article disponible.</p>
                    </div>
                )}
              </div>
        
              </center>
              
        
            </>
        
    )
}