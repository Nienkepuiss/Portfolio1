const translations = {
    fr: {
        title: "Salut, je suis <span class=\"highlight\">Nienke</span>, développeur web",
        description: "Dévouée à transformer les idées en réalités numériques.",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        arrow: "Voir projets",
        aboutTitle: "À propos de moi", 
        skillsTitle: "Compétences",
        aboutContent: "Bienvenue sur mon portfolio ! Après avoir obtenu un diplôme en marketing, j'ai décidé de me réorienter vers l'informatique. Je combine mon expérience en marketing avec mes compétences en programmation pour créer des expériences numériques uniques et percutantes.",
        servicesDev: "Développement web",
        servicesOpti: "Optimisation web", 
        spanDev: "Création de sites web personnalisés",
        spanOpti: "Boostez la performance de votre site",
        textDev: "Améliorez votre présence en ligne avec un site web unique et fonctionnel. Que vous ayez besoin d'un site vitrine, d'un blog ou d'une boutique en ligne, je conçois des sites adaptés à vos besoins et optimisés pour tous les appareils.",
        textOpti: "Améliorez la vitesse, l'expérience utilisateur et le référencement de votre site existant. J'analyse et optimise chaque aspect de votre site web pour assurer une meilleure visibilité et une navigation fluide.",
        projectsTitle: "MES PROJETS",
        BookiTitle: "Frontend d'une agence de voyage",
        BluelTitle: "Site dynamique d'une architecte",
        KasaTitle: "Application web de location",
        gitBouton: "Voir code",
        modale1: {
            title: "Booki : Agence de voyage",
            description: "Projet réalisé dans le cadre de la formation Développeur Web chez <a href=\"https://openclassrooms.com/en/paths/932-web-developer\" target=\"_blank\">OpenClassrooms</a>",
            p1: "▶︎ Création de la page d'accueil d'une agence de voyage en utilisant HTML et CSS ✈️",
            p2: "▶︎ Intégration d'une interface responsive pour le site web 💻"
        },
        modale2: {
            title: "Sophie Bluel : Architecte",
            description: "Projet réalisé dans le cadre de la formation Développeur Web chez <a href=\"https://openclassrooms.com/en/paths/932-web-developer\" target=\"_blank\">OpenClassrooms</a>",
            p1: "▶︎ Création d'une page web dynamique pour une designer d'intérieur en utilisant JavaScript et une API 🎨",
            p2: "▶︎ Développement de la page de présentation des travaux de la designer, gestion des événements utilisateurs et manipulation des éléments du DOM avec JavaScript 🗂️"
        },
        modale3: {
            title: "Kasa : Location de logement",
            description: "Projet réalisé dans le cadre de la formation Développeur Web chez <a href=\"https://openclassrooms.com/en/paths/932-web-developer\" target=\"_blank\">OpenClassrooms</a>",
            p1: "▶︎ Mise en place du front-end d'une application de location de logement 🏘️",
            p2: "▶︎ Configuration des composants avec React et des routes de l'application avec React Router ⚛️"
        }
    }
};

function changeLanguage(lang) {
    if (lang === 'en') {
        window.location.reload();
    } else {
        const data = translations[lang];
        document.querySelector('.title h1').innerHTML = data.title;
        document.querySelector('.title p').textContent = data.description;

        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks[0].textContent = data.about;
        navLinks[1].textContent = data.projects;
        navLinks[2].textContent = data.contact;

        document.querySelector('.work-arrow p').textContent = data.arrow;

        const aboutTitles = document.querySelectorAll('.about-title');
        aboutTitles[0].textContent = data.aboutTitle;
        aboutTitles[1].textContent = data.skillsTitle;

        document.querySelector('.about-text').textContent = data.aboutContent;

        const serviceTitles = document.querySelectorAll('.card-title h3');
        serviceTitles[0].textContent = data.servicesDev;
        serviceTitles[1].textContent = data.servicesOpti;

        const serviceSpans = document.querySelectorAll('.service-span');
        serviceSpans[0].textContent = data.spanDev;
        serviceSpans[1].textContent = data.spanOpti;

        const cardSubtitles = document.querySelectorAll('.card-subtitle p');
        cardSubtitles[0].innerHTML = `<span class="service-span">${data.spanDev}</span><br/>${data.textDev}`;
        cardSubtitles[1].innerHTML = `<span class="service-span">${data.spanOpti}</span><br/>${data.textOpti}`;

        document.querySelector('.projects-title').textContent = data.projectsTitle;

        const cardTitles = document.querySelectorAll('.project-card-title');
        cardTitles[0].textContent = data.BookiTitle;
        cardTitles[1].textContent = data.BluelTitle;
        cardTitles[2].textContent = data.KasaTitle;

        const projectButtons = document.querySelectorAll('.project-card .btn');
        projectButtons.forEach((button, index) => {
            button.innerHTML = `${data.gitBouton} <i class="fa-brands fa-github ml-2"></i>`;
        });
        document.querySelector('#modale1 .header-modale h3').innerHTML = data.modale1.title;
        document.querySelector('#modale1 .text-modale h4').innerHTML = data.modale1.description;
        document.querySelectorAll('#modale1 .text-modale p')[0].innerHTML = data.modale1.p1;
        document.querySelectorAll('#modale1 .text-modale p')[1].innerHTML = data.modale1.p2;

        document.querySelector('#modale2 .header-modale h3').innerHTML = data.modale2.title;
        document.querySelector('#modale2 .text-modale h4').innerHTML = data.modale2.description;
        document.querySelectorAll('#modale2 .text-modale p')[0].innerHTML = data.modale2.p1;
        document.querySelectorAll('#modale2 .text-modale p')[1].innerHTML = data.modale2.p2;

        document.querySelector('#modale3 .header-modale h3').innerHTML = data.modale3.title;
        document.querySelector('#modale3 .text-modale h4').innerHTML = data.modale3.description;
        document.querySelectorAll('#modale3 .text-modale p')[0].innerHTML = data.modale3.p1;
        document.querySelectorAll('#modale3 .text-modale p')[1].innerHTML = data.modale3.p2;
    }
}
