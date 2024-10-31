"use client"
import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import './blog.css';


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
    <img src="./image.png" alt="Image description" />
    <meta property="og:type" content="website" />
 </head>
            <nav className="navbar" style={{ backgroundColor: '#1e1e1e', padding: '10px 20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="text-xl font-bold" style={{ color: 'blue', flex: '1 1 100%', textAlign: 'center' }}>Blog Menu</h2>
                <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/blog">
                        <button className="btn btn-outline-primary">Accueil</button></Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/blog/about">
                       <button className="btn btn-outline-primary">Discord</button>
                        </Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/blog/contact"><button className="btn btn-outline-primary">Contact</button>
                        </Link>
                    </li>
                </ul>
            </nav>
 
           
            <div className="article-container shadow-sm">
                {articles.map(article => (
                    <div key={article.id} className="article">
                        <h2>{article.title}</h2><br></br>
                        <p>{article.content}</p>
                        <p><strong>Author:</strong> {article.author}</p>
                        <button>👍🏽</button>
                    </div>
                ))}
            </div>
              
        
            </>
        
    )
}