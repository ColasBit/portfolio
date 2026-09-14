const html_projets_perso = `
<section>
  <h2>Projets Personnels</h2>

  <section class="projet projet-labo" style="margin: 60px 0;">
    <div class="projet-img-container">
      <img src="images/Windows95.png" alt="Projet VM Windows">
    </div>
    
    <div class="projet-info">
      <h3>Afficher une caméra Windows 11 sur une VM Windows 95</h3>
      <div class="competences-tag">
        <span class="tag-c3">Administrer</span>
      </div>
      <p><strong>Technos :</strong> C, DosBox, WSL, Socket</p>
      <p><strong>Contexte :</strong> Administrer un système complexe en faisant communiquer deux environnements hétérogènes. Configuration des couches réseaux (ponts) et gestion des contraintes matérielles de l'OS.</p>
      <p><strong>Ce que j'ai fait :</strong> Codé un Serveur en C qui envoie des données retravaillées à un client sur un pont Réseau via Socket TCP.</p>
      <p><strong>Bilan :</strong> Compréhension des limites des OS, les outils et comment les systèmes communiquent et évoluent.</p>
    </div>
  </section>

  <section class="projet projet-labo" style="margin: 60px 0;">
    <div class="projet-img-container">
      <img src="images/image_013205.png" alt="Interface OS Retro Python">
    </div>
    
    <div class="projet-info">
      <h3>Simulation d'OS & Environnement de Bureau</h3>
      <div class="competences-tag">
        <span class="tag-c1">Réaliser</span>
      </div>
      <p><strong>Technos :</strong> Python (POO), Bibliothèques graphiques natives</p>
      <p><strong>Contexte :</strong> Recréer l'expérience utilisateur de Windows 95/98 entièrement en code moderne.</p>
      <p><strong>Ce que j'ai fait :</strong> 
        <br>• <strong>Système de Fichiers :</strong> Couche d'abstraction pour naviguer sur la machine hôte via interface rétro
        <br>• <strong>Applications Natives :</strong> Recodage complet d'outils fonctionnels (Bloc-notes, Explorateur, Terminal)
      </p>
      <p><strong>Bilan :</strong> Plongée profonde dans la programmation événementielle et la structure des systèmes graphiques.</p>
    </div>
  </section>

  <section class="projet projet-labo" style="margin: 60px 0;">
    <div class="projet-img-container">
      <video autoplay muted loop class="responsive-video">
        <source src="images/démo-ia-surivie.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
    <div class="projet-info">
      <h3>Réseau de Neurones & Algorithme Génétique</h3>
      <div class="competences-tag">
        <span class="tag-c1">Réaliser</span>
        <span class="tag-c2">Optimiser</span>
      </div>
      <a href="#" data-view="etudeIA" class="btn-secondary">Voir l'analyse des données</a>
      <p><strong>Technos :</strong> Java</p>
      <p><strong>Contexte :</strong> Intelligence Artificielle capable d'apprendre à survivre seule sans règles pré-codées.</p>
      <p><strong>Ce que j'ai fait :</strong> 
        <br>• <strong>Réseau de Neurones :</strong> Codage manuel des perceptrons, couches cachées, fonctions d'activation
        <br>• <strong>Sélection Naturelle :</strong> Algorithme génétique (mutation, croisement)
        <br>• <strong>Démarche Analytique :</strong> 3 sessions de 300+ générations pour observation comportementale
      </p>
      <p><strong>Bilan :</strong> Démonstration du Deep Learning : passage de créatures aléatoires à survivants en 300 générations.</p>
    </div>
  </section>

  <section class="projet projet-labo" style="margin: 60px 0;">
    <div class="projet-img-container">
      <img src="images/SoundScape Manager-02.png" alt="Interface de SoundScape Manager">
    </div>
    
    <div class="projet-info">
      <h3>SoundScape Manager — Table de Mixage Immersive</h3>
      <div class="competences-tag">
        <span class="tag-c2">Optimiser</span>
        <span class="tag-c4">Gérer</span>
        <span class="tag-c5">Conduire</span>
      </div>
      <p><strong>Technos :</strong> Java 21, JavaFX (MVC), HTTP Server, Maven, Jackson (JSON)</p>
      <p><strong>Contexte :</strong> Solution complète pour Maître de Jeu transformant un PC en table de mixage audio immersive.</p>
      <p><strong>Défis techniques relevés :</strong>
        <br>• <strong>Architecture MVC :</strong> Séparation stricte logique/données/interface
        <br>• <strong>Multithreading & UI :</strong> Threads pour chargement fluide (Non-blocking UI)
        <br>• <strong>Conduire :</strong> Analyse des besoins d'utilisateur final pour conception UX/UI
        <br>• <strong>IoT & Contrôle à distance :</strong> Serveur HTTP avec API REST
        <br>• <strong>Distribution :</strong> Packaging professionnel .exe avec JRE allégée
      </p>
      <p><strong>Bilan :</strong> Projet complet alliant Backend, Frontend et Architecture robuste (SOLID).</p>
      <a href="https://nicolas-zago.itch.io/soundscape-manager" target="_blank" class="btn-primary" style="margin-top: 20px;">Voir sur itch.io</a>
    </div>
  </section>

</section>`;