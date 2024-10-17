"use client"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import pdp from './assets/pdp.png';
import logoJS from './assets/LogoJS.png';
import img from './assets/nextjs.png';
import './responsive.css';
export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen w-full flex" style={{height: "100%"}}>
      <Image 
      src={pdp}
      alt="pdp"
      className="rounded-full"
      style={{width: '110px', height: '100px', marginLeft: "50px", marginTop: "50px"}}
      />
      <h3>Christian Ferreol</h3><br></br>
    
    <div className="card bg-dark" style={{borderColor: "orange", color: "white", width: "70%", marginTop: "70px", height: "600px"}}>
      <div className="card-body" >
        <h5 className="card-title">Christian Ferreol</h5>
        <p>Je me nomme  Jean-Christian , apprenant dans le developpement web fullstack, agé de 14 ans</p>
        <p>Depuis mes 13 ans, j'ai découvert ma passion pour la programmation</p>
        <p>J'ai déjà travaillé sur plusieurs projets en html, css, js, react, node, express et mongodb</p>
        <p>J'ai déjà travaillé avec des frameworks comme bootstrap et tailwindcss</p>
        <p>Pour être honnête, je ne suis pas encore compétent mais j'ai déjà réussi à créer des sites web fonctionnels, Mais malheuresement je n'ai pas pu les mettre en ligne pour des raisons personnelles</p>
        <p>Actullement, j'suis encore un élève certe mais j'ai pour objectif de devenir un expert dans le domaine</p>
        <p>J'espère que vous apprécierez mon travail</p>
        <p>Merci pour votre temps</p><br></br>
        <h3><u>Languages et FrameWorks utilisés</u></h3><br></br>
        <Image 
        src={logoJS}
        alt="logoJS"
        style={{width: '110px', height: '100px'}}
        />
      </div>
      
     
    </div>
    
    </div>
  );
}
