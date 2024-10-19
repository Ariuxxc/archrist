"use client";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import pdp from './assets/pdp.png';
import logoJS from './assets/LogoJS.png';
import './responsive.css';

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen w-full flex" style={{ height: "100%" }}>
      <Image 
        src={pdp}
        alt="pdp"
        className="rounded-full"
        style={{ width: '110px', height: '100px', marginLeft: "50px", marginTop: "50px" }}
      />
      <h3>Christian Ferreol</h3>
    
      <div className="card bg-dark" style={{ borderColor: "orange", color: "white", width: "70%", marginTop: "70px", height: "600px" }}>
        <div className="card-body">
          <h5 className="card-title">Christian Ferreol</h5>
          <p>Je me nomme Jean-Christian, apprenant dans le développement web fullstack, âgé de 14 ans.</p>
          <p>Depuis mes 13 ans, j&apos;ai découvert ma passion pour la programmation.</p>
          <p>J&apos;ai déjà travaillé sur plusieurs projets en HTML, CSS, JS, React, Node, Express et MongoDB.</p>
          <p>J&apos;ai déjà travaillé avec des frameworks comme Bootstrap et TailwindCSS.</p>
          <p>Pour être honnête, je ne suis pas encore compétent mais j&apos;ai déjà réussi à créer des sites web fonctionnels. Malheureusement, je n&apos;ai pas pu les mettre en ligne pour des raisons personnelles.</p>
          <p>Actuellement, je suis encore élève, certes, mais j&apos;ai pour objectif de devenir un expert dans le domaine.</p>
          <p>J&apos;espère que vous apprécierez mon travail.</p>
          <p>Merci pour votre temps.</p>
          <h3><u>Langages et frameworks utilisés</u></h3>
          <Image 
            src={logoJS}
            alt="logoJS"
            style={{ width: '110px', height: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}
