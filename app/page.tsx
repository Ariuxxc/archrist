import type { Metadata } from 'next';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import pdp from './assets/pdp.png';
import './responsive.css';
import Cookies from 'js-cookie';

export const metadata: Metadata = {
    title: "Jean-christ",
    description: "Dev rookie full stack",
    icons: "./assets/pdp.png",
}

export default function Home() {
    // Définissez le cookie sur 'false' uniquement si l'utilisateur n'est pas connecté
    const isAuthenticated = Cookies.get('isConnect');
    if (!isAuthenticated) {
        Cookies.set('isConnect', 'false');
    }

    return (
        <main className="bg-gray-900 text-white min-h-screen">
            <header className="container mx-auto py-16 px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image 
                            src={pdp}
                            alt="Christian Ferreol"
                            className="rounded-full w-24 h-24 border-4 border-orange-500"
                        />
                        <h1 className="text-4xl font-bold">Christian Ferreol</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#about" className="hover:text-orange-500 transition">À propos</a></li>
                            <li><a href="#skills" className="hover:text-orange-500 transition">Compétences</a></li>
                            <li><a href="#projects" className="hover:text-orange-500 transition"><button className="btn btn-outline-primary">Projets</button></a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="about" className="container mx-auto py-16 px-4">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
                    <p className="mb-4">Je me nomme Jean-Christian, apprenant dans le développement web fullstack, âgé de 14 ans. Depuis mes 13 ans, j&apos;ai découvert ma passion pour la programmation.</p>
                    <p className="mb-4">J&apos;ai déjà travaillé sur plusieurs projets en HTML, CSS, JS, React, Node, Express et MongoDB. J&apos;ai également de l&apos;expérience avec des frameworks comme Bootstrap et TailwindCSS.</p>
                    <p className="mb-4">Pour être honnête, je ne suis pas encore un expert, mais j&apos;ai déjà réussi à créer des sites web fonctionnels. Actuellement, je suis encore élève, mais j&apos;ai pour objectif de devenir un expert dans le domaine.</p>
                </div>
            </section>

            <section id="skills" className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold mb-8">Compétences</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'TailwindCSS'].map((skill) => (
                            <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center">
                                <p className="font-semibold">{skill}</p>
                            </div>
                        ))}
                </div>
            </section>

            <footer className="bg-gray-800 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Christian Ferreol. Tous droits réservés. &copy;</p>
                </div>
            </footer>
        </main>
    );
}
