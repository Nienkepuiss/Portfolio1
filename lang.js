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
        textOpti: "Améliorez la vitesse, l'expérience utilisateur et le référencement de votre site existant. J'analyse et optimise chaque aspect de votre site web pour assurer une meilleure visibilité et une navigation fluide."
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
    }
}
