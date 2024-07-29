import WorkExperience from "../models/WorkExperience";

const workExperiences: WorkExperience[] = [
    { // TCR-connect
        company: "Renault",
        title: "Développeur Full Stack techlead Back",
        dateFromTo: "Avr. 2024 - Jui. 2024",
        description: `Application de centralisation de KPI pour les usines de production, avec pour
            objectif final d'être présenté sur écrans géants et piloté à distance.`,
        activities: [
            "Développeur full stack avec NestJS",
            "Tests unitaire (white box)",
            "Utilisation de l'API Looker de Google",
            "Websocket avec Socket.io",
        ],
        skills: ['NestJS', 'Looker', 'Socket.io'],
    },
    { // Sanofi
        "company": "Sanofi",
        "title": "Développeur Full Stack",
        "dateFromTo": "Fev. 2024 - Mai. 2024",
        "description": "Centralisateur et comparateur de KPI pour les différentes usines avec gestion d'éléments de conseils de performance.",
        "activities": [
            "Développeur full stack avec NestJS et Next",
            "Tests unitaires et e2e",
            "Querying SQL avec TypeORM pour la partie BDD",
            "Qualité de code - Sonarqube"
        ],
        skills: ['NestJS', 'Next', 'TypeORM', 'Sonarqube'],
    },
    {// Hub'l
        "company": "Renault",
        "title": "Développeur Front-end & Architect",
        "dateFromTo": "Nov. 2022 - Fev. 2024",
        "description": "Outil de gestion interne à l'entreprise client, avec un modèle de données à remanier et de multiples contraintes.",
        "activities": [
            "Développement de formulaires dynamiques complexes avec sauvegarde automatique",
            "Travail dans une équipe à travers l'internationale",
            "Force de proposition auprès des UX/UI, DBA, Backend et testeur",
            "Qualité de code",
            "Test e2e (black box testing)"
        ],
        skills: ['React', 'Typescript', 'Cypress'],
    },
    {// Advise
        "company": "SNCF",
        "title": "Développeur Full Stack - GCP & 3D",
        "dateFromTo": "Oct. 2021 - Jui. 2022",
        "description": "Création d'un site web d'édition et de visualisation de contenu immersif 3D en interne chez Atos, et pour des clients finaux comme la SNCF, ou musées et magasins.",
        "activities": [
            "Développement d'une architecture dite futur-proof",
            "Optimisation et conception de scène 3D dans un site web avec BabylonJS et React",
            "Support multi utilisateur et partage d'expérience immersive"
        ],
        skills: ['React', 'BabylonJS', 'GCP', 'Typescript'],
    },
    {// Ugap
        "company": "Ugap",
        "title": "Développeur Front-end & Consultant technique",
        "dateFromTo": "Fev. 2021 - Oct. 2021",
        "description": "Développement d'un site web contenant des formulaires avec une gestion de droit pour un acteur du secteur public",
        "activities": [],
        skills: ['React', 'Typescript'],
    },
    {// Koela
        "company": "Atos",
        "title": "Développeur Full Stack",
        "dateFromTo": "Avr. 2019 - Fev. 2021",
        "description": "Développement d'un outil interne de gestion de ressources, d'emploi du temps et de coût.",
        "activities": [
            "Architecture from scratch",
            "Participation méthode Scrum (gestion des tâche et formation nouveaux arrivants)",
            "Dockerisation du projet",
            "Import/export Excel",
            "Test e2e Front end avec Cypress"
        ],
        skills: ['Angular', 'NodeJS', 'MongoDB', 'Cypress', 'docker'],
    }
];

export default workExperiences;
