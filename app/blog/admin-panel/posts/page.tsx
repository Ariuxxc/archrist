"use client";
import Sidebar from "../components/sideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Post() {
  interface Article {
    id: string; // ou number, selon votre configuration
    title: string;
    content: string;
    author: string;
}
 axios.defaults.baseURL = "https://back-express-8g76.onrender.com";

    const [article, setArticle] = useState<Article[]>([]);
    const [isForm, setIsForm] = useState(false);
    const [viewArticle, setViewArticle] = useState(false);
    const [FormData, setFormData] = useState({
        title: "",
        content: "",
        author: ""
    });

    useEffect(() => {
        async function liArticle() {
            try {
                const response = await axios.get('/api/get-article');
                setArticle(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles:', error);
                alert("Erreur lors de la récupération des articles");
            }
        }
        liArticle();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!FormData.title || !FormData.content || !FormData.author) {
            alert("Tous les champs doivent être remplis");
            return;
        }
        try {
            const send = await axios.post('/api/add-article', FormData);
            alert("Envoyé avec succès");
            console.log('Envoyé avec succès' + send.status);
            setFormData({ title: "", content: "", author: "" }); // Réinitialiser le formulaire
        } catch (error) {
            console.error(error);
            alert("Erreur lors de la soumission");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value
        });
    };
const author = "Auteur de l&apos;article";
const title = "titre de l&apos;article";
const content = "Contenu de l&apos;article";
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-4">
                    <div className="card shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
                        <div className="card-header bg-primary text-white">
                            <h4 className="card-title font-bold text-center mb-0">Publications</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="mb-0">Liste des Publications :</p>
                                <button className="btn btn-primary" onClick={() => { setIsForm(true) }}>
                                    <i className="bi bi-plus-circle me-2"></i>Ajouter une publication
                                </button>
                                <button className="btn btn-secondary" onClick={() => { setViewArticle(true)}}>
                                  <i className="bi bi-plus-circl me-3"></i>Voir les articles postés
                                </button>
                            </div>
                            {isForm && (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">{title}</label>
                                        <input type="text" className="form-control" id="title" name="title" value={FormData.title} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">{content}</label>
                                        <input type="text" className="form-control" id="content" name="content" value={FormData.content} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="author" className="form-label">{author}</label>
                                        <input type="text" className="form-control" id="author" name="author" value={FormData.author} onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <br /><br />
                                    <button className="btn btn-danger" onClick={() => { setIsForm(false) }}>Annuler</button>
                                </form>
                            )}
                        </div>
                        {viewArticle && (

                        
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Contenu</th>
                                    <th scope="col">Auteur</th>
                                </tr>
                            </thead>
                            <tbody>
                                {article.length > 0 ? (
                                    article.map(articles => (
                                        <tr key={articles.id}>
                                            <td>{articles.title || "Titre non disponible"}</td>
                                            <td>{articles.content ? articles.content.slice(0, 50) + "..." : "Contenu non disponible"}</td>
                                            <td>{articles.author || "Auteur non disponible"}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3}>Aucun article disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}