/**
 * ROUTER MINIMALISTE SANS SERVEUR
 * Charge les vues dynamiquement à partir de variables JS locales
 */

const APP_CONTAINER = document.getElementById('app-container');

/**
 * Fait correspondre le 'data-view' avec la variable JS contenant le HTML.
 * J'ai utilisé une convention de nommage : html_home, html_projets, etc.
 */
function getHtmlTemplate(viewName) {
  // On utilise typeof pour éviter un crash si le script de la page a été oublié dans le index.html
  switch (viewName) {
    case 'home':          return typeof html_home !== 'undefined' ? html_home : null;
    case 'projets':       return typeof html_projets !== 'undefined' ? html_projets : null;
    case 'projets-perso': return typeof html_projets_perso !== 'undefined' ? html_projets_perso : null;
    case 'projets-uni':   return typeof html_projets_uni !== 'undefined' ? html_projets_uni : null;
    case 'formation':     return typeof html_formation !== 'undefined' ? html_formation : null;
    case 'presentation':  return typeof html_presentation !== 'undefined' ? html_presentation : null;
    case 'tuf':           return typeof html_tuf !== 'undefined' ? html_tuf : null;
    case 'etudeIA':       return typeof html_etudeIA !== 'undefined' ? html_etudeIA : null;
    case 'contact':       return typeof html_contact !== 'undefined' ? html_contact : null;
    case 'stage-cnrs':    return typeof html_stageCnrs !== 'undefined' ? html_stageCnrs : null;
    default:              return null;
  }
}

/**
 * Affiche l'écran d'erreur si une variable manque
 */
function showError(message) {
  APP_CONTAINER.innerHTML = `
    <section style="padding: 60px 40px; text-align: center;">
      <h2>❌ Erreur de chargement</h2>
      <p>${message}</p>
      <p>Essayez de <a href="#" onclick="loadView('home'); return false;">revenir à l'accueil</a></p>
    </section>
  `;
}

/**
 * Charge une vue et l'affiche avec transition
 */
async function loadView(viewName) {
  // On récupère le code HTML depuis nos variables locales (plus de fetch !)
  const htmlContent = getHtmlTemplate(viewName);

  if (!htmlContent) {
    const errorMsg = `La page '${viewName}' est introuvable. As-tu bien inclus son script (ex: views/${viewName}.js) dans ton index.html ?`;
    console.error(errorMsg);
    showError(errorMsg);
    return;
  }

  try {
    // Fade out de l'ancien contenu
    APP_CONTAINER.style.opacity = '0';
    APP_CONTAINER.style.transform = 'translateY(10px)';

    // Attendre la fin de la transition
    await new Promise(resolve => setTimeout(resolve, 200));

    // Injecter le nouveau contenu
    APP_CONTAINER.innerHTML = htmlContent;

    // Fade in + scroll vers le haut
    APP_CONTAINER.style.opacity = '1';
    APP_CONTAINER.style.transform = 'translateY(0)';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mettre à jour l'URL (optionnel, pour navigation back)
    history.pushState({ view: viewName }, '', `#${viewName}`);

  } catch (error) {
    showError(error.message);
  }
}

/**
 * Initialiser les event listeners sur le header
 */
/**
 * Initialiser les event listeners (Délégation d'événements)
 */
function initRouter() {
  
  // 1. Écoute globale sur toute la page (Délégation)
  document.body.addEventListener('click', (e) => {
    
    // On vérifie si on a cliqué sur un élément (ou l'enfant d'un élément) qui possède l'attribut data-view
    const link = e.target.closest('[data-view]');
    
    if (link) {
      e.preventDefault(); // Empêche le comportement normal du lien
      
      const viewName = link.getAttribute('data-view');
      loadView(viewName); // Charge la page

      // 2. Fix du menu déroulant
      document.querySelectorAll('.sousmenu').forEach(menu => {
        // On force la disparition immédiate pour cacher le menu après le clic
        menu.style.display = 'none'; 
        
        // 300 millisecondes plus tard, on efface le style en ligne !
        // Le menu reste caché car la souris n'est plus dessus, mais le CSS (hover) pourra à nouveau fonctionner.
        setTimeout(() => {
          menu.style.display = ''; 
        }, 300);
      });
    }
  });

  // Gestion du bouton "Précédent / Suivant" du navigateur
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.view) {
      loadView(e.state.view);
    }
  });

  // Charger la vue par défaut (home) au démarrage
  loadView('home');
}

/**
 * Transition CSS fluide
 */
function setupTransitionStyles() {
  APP_CONTAINER.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
}

// Démarrer le routeur au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  setupTransitionStyles();
  initRouter();
});