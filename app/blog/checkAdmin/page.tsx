'use client';
import './my-css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState} from 'react';
import Cookies from 'js-cookie';
 import { redirect } from 'next/navigation';

axios.defaults.baseURL= 'http://localhost:7000'
export default function CheckAdmin() {
if (Cookies.get('isConnect') === 'true') {
    redirect('/blog/admin-panel')
}
    const [FormData, setFormData] = useState({
            name: "",
            password: "",
            role: ""
        });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({
                ...FormData,
                [name]: value
            });
        };
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

            e.preventDefault();
          
            try {
              if (FormData.name ==='Christian' && FormData.password ==='chris@owner' && FormData.role ==='administrateur' ) {
                         Cookies.set('isConnect', 'true');
                         alert('Authentification réussi');
                         redirect('/blog/admin-panel');
              } else {
                alert('Authentification echouée');
                 redirect('/')
              }
              
           
              console.log("Article soumis avec succès");
            } catch(error) {
              console.error("Erreur lors de la soumission de l'article", error);
            }
          };

    return(
        
        <div> 
           <center> <div className="box shadow-lg rounded-sm border-2 w-96">
            
              <form onSubmit={handleSubmit} className="p-8">
              <h2 className="text-2xl font-bold mb-6">Connexion Administrateur</h2>
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control w-full" 
                  id="floatingName" 
                  placeholder="Nom d'utilisateur" 
                  name="name" 
                  value={FormData.name} 
                  onChange={handleChange} 
                  required
                />
                <label htmlFor="floatingName">Nom d&apos;utilisateur</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control w-full" 
                  id="floatingPassword" 
                  placeholder="Mot de passe" 
                  name="password" 
                  value={FormData.password} 
                  onChange={handleChange} 
                  required
                />
                <label htmlFor="floatingPassword">Mot de passe</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control w-full" 
                  id="floatingRole" 
                  placeholder="Rôle" 
                  name="role" 
                  value={FormData.role} 
                  onChange={handleChange} 
                  required
                />
                <label htmlFor="floatingRole">Rôle</label>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Se connecter
              </button>
                        
              </form>


            </div>
            </center>
        </div>
    )
}