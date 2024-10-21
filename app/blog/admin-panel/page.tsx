'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Assurez-vous que l'importation est correcte
import Cookies from 'js-cookie';

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
        <h1>Admin-panel</h1>
    );
}
