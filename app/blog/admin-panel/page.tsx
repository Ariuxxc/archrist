'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Assurez-vous que l'importation est correcte
import Cookies from 'js-cookie';
import Sidebar from './components/sideBar';
export default function AdminPanel() {
    const router = useRouter();
    
    useEffect(() => {
        const isAuthenticated = Cookies.get('isConnect');
        if (isAuthenticated !== 'true') {
            router.push('/blog/checkAdmin'); // Utilisation de router.push pour la redirection
        } else {
            console.log('Bienvenue'); // Remplacez par une notification visuelle
        }
    }, [router]);
    

    return (
        <>
    <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
            <h1 className="mb-4">Panneau d'administration</h1>
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title font-bold mb-3">À quoi sert ce panneau d'administrateur ?</h2>
                    <p className="mb-3">Ce panneau vous aide à mieux contrôler et suivre vos posts de près. Il offre plusieurs fonctionnalités pour une gestion efficace de votre blog :</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">La rubrique <strong>Stats</strong> vous permet de suivre les statistiques de votre blog.</li>
                        <li className="list-group-item">La section <strong>Posts</strong> vous offre un contrôle total sur vos publications.</li>
                        <li className="list-group-item">D'autres outils sont disponibles pour optimiser la gestion de votre contenu.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   
</>
    );
}
