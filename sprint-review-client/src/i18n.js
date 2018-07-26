import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "baseline": "For successful meetings",
        "button.try": "Try me!",
        "login.register": "Login/Register",
        "how.work": "how it works",
        "how.work.definition": "Meeting Review boosts and synthesizes all your meetings for making them useful for real",
        "Choose": "Choose",
        "Choose.message": "Choose your meeting review whether it is a Sprint review or your team weekly meeting",
        "Put your ideas": "Put your ideas",
        "ideas.message": "Put your ideas in live anonymously or not to get the big picture",
        "Get the report": "Get the report",
        "report.message": "Get a full meeting report to organise the next steps to make things work",
        "Share": "Share",
        "share.message": "Share your meeting reports with people and invite them to join future huddles!",
        "Why this tool?": "Why this tool?",
        "why.message.1": "Meetings are part of our life and can be efficient but also very useless.",
        "why.message.2": "Meeting review is here to fix it!",
        "Executive": "Executive",
        "executive.message": "I wish I could have every time the best way to handle a meeting. Having time to prepare it and to synchronize the players around the day topic. It's really difficult to make people focus at the same time.",
        "Project Manager": "Project Manager",
        "manager.message": "I hate having really interesting meetings and loosing most of the outputs afterward. I need to track everything in a way I can organize my next actions.",
        "Developer": "Developer",
        "developer.message": "I need to code and to make things work. My goal is to have the shortest and most efficient meetings to focus afterward on what is really important: to get things done.",
        "Here is": "Here is",
        "Your Journey": "Your Journey",
        "Use it for free": "Use it for free",
        "free.message": "registered or not, you can use it for free and invite your co-workers to join your reviews.",
        "Pay for more": "Pay for more",
        "pay.message": "Pay for 7$/month to keep all your reviews, search them and use them forever!",
        "contact.need.us": "Need to contact us?",
        "happy.message": "We would be really happy to help you!",
        "Contact Us": "Contact Us",
        "Home": "Home",
        "About Us": "About Us",
        "Help and Support": "Help and Support",
        "Terms &amp; Conditions": "Terms &amp; Conditions",
        "Cancel Account": "Cancel Account",
        "Latest News": "Latest News",
        "Follow us on": "Follow us on",

      }
    },
    fr: {
      translations: {
        "baseline": "Pour la performance de vos meetings",
        "button.try": "Essayez-moi!",
        "login.register": "Login/Enregistrement",
        "how.work": "Comment ça marche",
        "how.work.definition": "Meeting Review booste et synthétise toutes vos réunions pour les rendre utiles pour de vrai",
        "Choose": "Choisissez",
        "Choose.message": "Choisissez le format de votre réunion, que cela s'agisse d'un Sprint review ou de votre réunion d'équipe hebdomadaire",
        "Put your ideas": "Posez vos idées",
        "ideas.message": "Posez vos idées en direct, de source anonyme ou non, pour obtenir une vision globale",
        "Get the report": "Obtenez le compte rendu",
        "report.message": "Obtenez le rapport de votre réunion pour organiser les prochaines actions à effectuer",
        "Share": "Partagez",
        "share.message": "Partagez vos rapports de réunion avec des personnes et invitez-les à se joindre aux prochaines rencontres!",
        "Why this tool?": "Mais pour quelle raison cet outil existe?",
        "why.message.1": "Les réunions font partie de notre vie et peuvent être efficaces mais aussi très inutiles.",
        "why.message.2": "Meeting review est là pour tout arranger",
        "Executive": "Executif",
        "executive.message": "J'aimerais pouvoir avoir à chaque fois la meilleure façon de gérer une réunion. Avoir le temps de la préparer et de synchroniser les participants sur le sujet du jour. C'est vraiment difficile de faire en sorte que les gens se concentrent en même temps.",
        "Project Manager": "Chef de projet",
        "manager.message": "Je déteste avoir des réunions vraiment intéressantes et de perdre la plupart des informations obtenues par la suite. J'ai besoin de tout noter afin de pouvoir organiser mes prochaines actions.",
        "Developer": "Développeur",
        "developer.message": "J'ai besoin de coder et de faire fonctionner les choses. Mon but est d'avoir les réunions les plus courtes et les plus efficaces pour se concentrer ensuite sur ce qui est vraiment important: faire avancer les choses.",
        "Here is": "Voici",
        "Your Journey": "Votre Voyage",
        "Use it for free": "Utilisez-le gratuitement",
        "free.message": "enregistré ou non, vous pouvez l'utiliser gratuitement et inviter vos collègues à rejoindre vos meetings.",
        "Pay for more": "Payez pour plus",
        "pay.message": "Payer 7 €/mois pour garder toutes vos reviews, les rechercher et les utiliser pour toujours!",
        "contact.need.us": "Besoin de nous contacter?",
        "happy.message": "Nous serions ravis de vous aider!",
        "Contact Us": "Contactez Nous",
        "Home": "Page d'accueil",
        "About Us": "Qui nous sommes",
        "Help and Support": "Aide et Support",
        "Terms &amp; Conditions": "Termes &amp; Conditions",
        "Cancel Account": "Fermer mon compte",
        "Latest News": "Dernières actualités",
        "Follow us on": "Suivez-nous sur",
      }
    },
    es: {
      translations: {
        "baseline": "Para reuniones exitosas",
        "button.try": "Pruébame!",
        "login.register": "Inicio/Registar",
        "how.work": "Como funciona",
        "how.work.definition": "Meeting Review aumenta y sintetiza todas sus reuniones para hacerlas útiles para la realidad",
        "Choose": "Selecciona",
        "Choose.message": "Elija el tipo de su reunión, ya sea un Sprint review o la reunión de su equipo semanal",
        "Put your ideas": "Pon tus ideas",
        "ideas.message": "Pon tus ideas en vivo de forma anónima o no para obtener una visión global",
        "Get the report": "Obtener el informe",
        "report.message": "Obtenga un informe completo de la reunión para organizar los próximos pasos para que las cosas funcionen",
        "Share": "Comparta",
        "share.message": "¡Comparta los informes de su reunión con personas e invítelos a unirse a futuras reuniones!",
        "Why this tool?": "Por qué esta herramienta?",
        "why.message.1": "Las reuniones son parte de nuestra vida y pueden ser eficientes, pero también muy inútiles.",
        "why.message.2": "¡La revisión de la reunión está aquí para arreglarlo!",
        "Executive": "Executivo",
        "executive.message": "Ojalá pudiera tener cada vez la mejor manera de manejar una reunión. Tener tiempo para prepararlo y sincronizar a los jugadores en torno al tema del día. Es realmente difícil hacer que la gente se enfoque al mismo tiempo.",
        "Project Manager": "Gerente de proyecto",
        "manager.message": "Odio tener reuniones realmente interesantes y perder la mayoría de las salidas después. Necesito rastrear todo de una manera que pueda organizar mis próximas acciones.",
        "Developer": "Desarrollador",
        "developer.message": "Necesito codificar y hacer que las cosas funcionen. Mi objetivo es tener las reuniones más cortas y más eficientes para centrarme después en lo que es realmente importante: hacer las cosas.",
        "Here is": "Eso es",
        "Your Journey": "Su Viaje",
        "Use it for free": "Úselo gratis",
        "free.message": "registrado o no, puede usarlo gratis e invitar a sus compañeros de trabajo a unirse a sus comentarios.",
        "Pay for more": "Pague por más",
        "pay.message": "¡Pague 7 $ / mes para mantener todas sus críticas, buscarlas y usarlas para siempre!",
        "contact.need.us": "¿Necesitas contactarnos?",
        "happy.message": "¡Estaremos realmente felices de ayudarte!",
        "Contact Us": "Contáctenos",
        "Home": "Página de inicio",
        "About Us": "Sobre nosotros",
        "Help and Support": "Ayuda y apoyo",
        "Terms &amp; Conditions": "Términos y amp; Condiciones",
        "Cancel Account": "Cancelar cuenta",
        "Latest News": "Últimas noticias",
        "Follow us on": "Siga con nosotros",
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
