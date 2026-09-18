const html_stageCnrs = `
<section>
  <h2 style="background: linear-gradient(135deg, #E63946, #1D3557); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Stage au CNRS — IMGT</h2>

  <section class="projet" style="margin: 60px 0;">
    <div class="projet-img-container">
      <img src="images/IMGT.png" alt="IMGT - Ressources Immunogénétiques" style="object-fit: cover;">
    </div>
    
    <div class="projet-info">
      <h3>Réalisation d'un Outil de Visualisation et d'Édition de Séquences ADN</h3>
      <div class="competences-tag">
        <span class="tag-c1">Réaliser</span>
        <span class="tag-c2">Optimiser</span>
        <span class="tag-c5">Conduire</span>
        <span class="tag-c6">Collaborer</span>
      </div>
      
      <p><strong>Période :</strong> Avril — Juillet 2026 (3 mois)</p>
      <p><strong>Lieu :</strong> IMGT® — International ImMunoGeneTics Information System (CNRS, Montpellier)</p>
      <p><strong>Tuteur de Stage :</strong> Guilhem Zetoun (Développeur Web)</p>
      <p><strong>Équipe :</strong> Sofia Kossida (Responsable IMGT), Noé Mathieux, Alexandre Guichard</p>
      <p><strong>Technos :</strong> JavaScript (ES6+, Vanilla), D3.js, SheetJS, Fetch API, localStorage, IntersectionObserver, TreeWalker, Proxy, DOMParser, JSON</p>
      
      <p><strong>Contexte :</strong>
        L'IMGT est la référence mondiale pour l'étude des immunoglobulines (anticorps) et récepteurs T. Depuis 2011, 
        l'équipe utilisait <strong>Vector NTI</strong> (logiciel obsolète et non maintenu) pour visualiser et éditer des séquences génomiques. 
        Face à l'augmentation exponentielle des volumes de données et aux besoins croissants d'automatisation, cette solution 
        était devenue un frein majeur. Le défi : créer une <strong>application web moderne</strong> capable de remplacer Vector NTI, 
        s'intégrant nativement aux serveurs de l'IMGT et offrant une ergonomie intuitive pour les bio-curateurs.
      </p>
      
      <p><strong>Besoins fonctionnels majeurs :</strong>
        <br>• Visualiser des séquences longues (plusieurs centaines de kilobases) avec annotations colorées
        <br>• Éditer interactivement les annotations (C.R.U.D. sécurisé)
        <br>• Interroger automatiquement IMGT/V-QUEST pour identifier le gène germinal le plus proche
        <br>• Classifier automatiquement les gènes (Fonctionnel / ORF / Pseudogène)
        <br>• Exporter les données en Excel pour analyse ultérieure au BLAST
      </p>
      
      <p><strong>Ce que j'ai réalisé :</strong>
        <br>• <strong>Réaliser (C1) :</strong> Architecture complète d'un visualiseur interactif (parsing JSON, rendu D3.js, synchronisation multi-vues)
        <br>• <strong>Optimiser (C2) :</strong> Virtual scrolling (IntersectionObserver) pour gérer 500k+ nucléotides avec performance optimale
        <br>• <strong>Conduire (C5) :</strong> Gestion de projet autonome avec itérations biquotidiennes et validations toutes les 1-2 semaines
        <br>• <strong>Collaborer (C6) :</strong> Travail quotidien avec les biocurateurs, traduction des besoins métier en code robuste
      </p>
    </div>
  </section>

  <section style="margin: 60px 0; background: linear-gradient(135deg, rgba(29, 53, 87, 0.04), rgba(42, 157, 143, 0.04)); padding: 50px; border-radius: 12px; border: 1px solid rgba(29, 53, 87, 0.1);">
    <h3 style="margin-top: 0;">Architecture & Défis Techniques Relevés</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 30px;">
      <div>
        <h4 style="color: var(--accent-blue); margin-top: 0;">🎨 Visualisation D3.js Multi-Couches</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          <strong>Challenge :</strong> Rendu simultané de 3 vues synchronisées (brin sens, brin antisens, acides aminés)
          <br><strong>Solution :</strong> Zoom/pan fluide avec D3.js, coloration sémantique par région immunologique
          <br><strong>Résultat :</strong> Interface visuelle hautement interactive
        </p>
      </div>
      
      <div>
        <h4 style="color: var(--accent-orange); margin-top: 0;">⚡ Performance sur Données Volumineuses</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          <strong>Challenge :</strong> DOM gelé avec 5000+ lignes de génome
          <br><strong>Solution :</strong> Virtual scrolling via IntersectionObserver + TreeWalker pour localisation précise
          <br><strong>Résultat :</strong> Scroll fluide même sur séquences de 500 kb
        </p>
      </div>

      <div>
        <h4 style="color: var(--accent-red); margin-top: 0;">🔗 Intégration Serveurs Distants</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          <strong>Challenge :</strong> CORS, gestion des sessions, Fetch asynchrone
          <br><strong>Solution :</strong> Proxy inverse Apache + gestion des tokens JSESSIONID
          <br><strong>Résultat :</strong> Appels IMGT/V-QUEST et IMGT/Query transparents
        </p>
      </div>

      <div>
        <h4 style="color: var(--accent-green, #2A9D8F); margin-top: 0;">🛡️ Sécurité des Données Génomiques</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          <strong>Challenge :</strong> Collisions d'annotations, mutations involontaires
          <br><strong>Solution :</strong> State management centralisé (Store.js) + algorithme de détection de collision
          <br><strong>Résultat :</strong> Intégrité garantie des données biologiques
        </p>
      </div>
    </div>
  </section>

  <section style="margin: 60px 0;">
    <h3>Architecture Logicielle — De la Conception Modulaire</h3>
    
    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 30px;">
      <strong>Philosophie :</strong> Pas de framework lourd (React, Vue). Vanilla JavaScript avec principes SOLID et architecture réactive.
      <br>L'application est découpée en modules spécialisés sans dépendances directes, communiquant via un magasin d'état centralisé.
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="tech-params" style="border-left-color: var(--accent-blue); background: var(--bg-white);">
        <strong>📊 store.js</strong>
        <br>Gestionnaire d'état centralisé (Single Source of Truth)
        <br>Sanctuarise la séquence ADN, annotations, cadres de lecture
        <br>Via Proxy, notifie les abonnés lors de mutations
      </div>

      <div class="tech-params" style="border-left-color: var(--accent-red); background: var(--bg-white);">
        <strong>✏️ editeur.js</strong>
        <br>C.R.U.D sécurisé des annotations
        <br>Détection de collisions, validation des contraintes
        <br>Ajustement dynamique des frontières voisines
      </div>

      <div class="tech-params" style="border-left-color: var(--accent-orange); background: var(--bg-white);">
        <strong>🎨 visualiseur.js + affichageSequenceObserver.js</strong>
        <br>Deux rendus synchronisés : graphique (SVG D3) + textuel
        <br>Interception des sélections via Window.getSelection() + TreeWalker
        <br>Mise en surbrillance multicouche (brin sens/antisens/AA)
      </div>

      <div class="tech-params" style="border-left-color: var(--accent-green, #2A9D8F); background: var(--bg-white);">
        <strong>🔧 moteur.js + auditeur.js</strong>
        <br>Logique métier pure (aucun DOM)
        <br>Audit génomique (F/ORF/P), traduction ADN→protéines, cadres de lecture
        <br>Algorithme de coloration par spécificité de région
      </div>

      <div class="tech-params" style="border-left-color: #27ae60; background: var(--bg-white);">
        <strong>🌐 promesse.js</strong>
        <br>Orchestration des flux asynchrones (async/await)
        <br>Communication avec serveurs distants IMGT
        <br>Gestion des iframes masquées pour capturer réponses HTML brutes
      </div>

      <div class="tech-params" style="border-left-color: #9b59b6; background: var(--bg-white);">
        <strong>💾 persistence.js</strong>
        <br>Sauvegarde locale (localStorage) des annotations modifiées
        <br>Sauvegarde différentielle (delta encoding)
        <br>Gestion des quotas de mémoire du navigateur
      </div>
    </div>
  </section>

  <section style="margin: 60px 0; background: linear-gradient(135deg, rgba(230, 57, 70, 0.04), rgba(255, 158, 62, 0.04)); padding: 40px; border-radius: 12px;">
    <h3 style="margin-top: 0;">Livrables & Impact</h3>
    
    <ul style="color: var(--text-medium); padding-left: 20px; line-height: 1.9;">
      <li><strong>✅ Application en production</strong> — Remplace Vector NTI, utilisée quotidiennement par les biocurateurs de l'IMGT</li>
      <li><strong>✅ Visualisation performante</strong> — Gère sans ralentissement des séquences de 500+ kilobases</li>
      <li><strong>✅ Édition sécurisée</strong> — Système de validation + détection de collision automatique</li>
      <li><strong>✅ Audit automatisé</strong> — Classification F/ORF/P via arbre décisionnel à 5 niveaux</li>
      <li><strong>✅ Export Excel</strong> — SheetJS pour générer rapports compatibles BLAST</li>
      <li><strong>✅ Architecture maintenable</strong> — Modules découplés (SOLID/GRASP) pour évolution future</li>
      <li><strong>✅ Tests automatisés</strong> — Framework de test custom (Vanilla JS) pour logique métier</li>
      <li><strong>✅ Documentation technique</strong> — Code français avec commentaires métier pour bio-informaticiens</li>
    </ul>
  </section>

  <section style="margin: 60px 0;">
    <h3>Méthodologie & Gestion du Projet</h3>
    
    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 30px;">
      <strong>Approche :</strong> Itérative informelle (pas de Scrum formel)
      <br><strong>Livrables :</strong> Prototype → démonstration biquotidienne → feedback biologistes → refactoring
      <br><strong>Durée totale :</strong> 4 mois (avril-juillet 2026)
    </p>

    <div style="background: var(--bg-subtle); padding: 30px; border-radius: 8px; border-left: 4px solid var(--accent-blue);">
      <h4 style="margin-top: 0; color: var(--accent-blue);">Phases d'Évolution du Projet</h4>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
        <div>
          <p><strong style="color: var(--accent-red);">Phase 1-2 :</strong> Prototypage Rapide</p>
          <p style="font-size: 0.9rem; color: var(--text-medium);">Visualiseur D3 basique, affichage multi-vues, coloration sémantique. Code empirique, approche "render first".</p>
        </div>
        
        <div>
          <p><strong style="color: var(--accent-orange);">Phase 3-4 :</strong> Fonctionnalités Critiques</p>
          <p style="font-size: 0.9rem; color: var(--text-medium);">Édition interactive, sauvegarde localStorage, intégration IMGT/V-QUEST, audit génomique.</p>
        </div>
        
        <div>
          <p><strong style="color: var(--accent-green, #2A9D8F);">Phase 5 :</strong> Refactoring & Production</p>
          <p style="font-size: 0.9rem; color: var(--text-medium);">Résorption de la dette technique, architecture SOLID, tests unitaires automatisés, déploiement.</p>
        </div>

        <div>
          <p><strong style="color: var(--accent-blue);">Validation :</strong> Feedback Itératif</p>
          <p style="font-size: 0.9rem; color: var(--text-medium);">Réunions biquotidiennes avec les biologistes, démonstrations interactives, ajustements continus.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="margin: 60px 0; padding-top: 60px; border-top: 1px solid rgba(0,0,0,0.06);">
    <h3>Apprentissages Clés & Bilan Personnel</h3>
    
    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 20px;">
      <strong>Sur le plan technique :</strong> Exploration en profondeur des API natives du navigateur (IntersectionObserver, TreeWalker, Proxy, DOMParser) pour construire une application robuste <strong>sans framework</strong>. Compréhension concrète des défis d'optimisation front-end : virtualisation DOM, gestion de l'asynchrone, synchronisation d'état complexe.
    </p>

    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 20px;">
      <strong>Sur l'architecture logicielle :</strong> Application concrète des principes SOLID (SRP, Open/Closed), du pattern Observer (Proxy) et Publish-Subscribe (CustomEvent). Passage crucial du prototypage rapide à la rigueur structurelle via refactoring et tests unitaires. Comprendre que la <strong>qualité = prototypage itératif + consolidation rigoureuse</strong>.
    </p>

    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 20px;">
      <strong>Sur la collaboration scientifique :</strong> Traduction de vocabulaire métier (immunoglobulines, cadres de lecture, pseudogènes) en architecture informatique. Apprentissage du dialogue avec des experts non-informaticiens, où l'intuition interface utilisateur est primordiale. Le code, c'est bien — mais du code <strong>que les chercheurs comprennent et peuvent maintenir</strong>, c'est mieux.
    </p>

    <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 20px;">
      <strong>Impact réel :</strong> Avoir livré un outil ayant <strong>remplacé une solution 15 ans plus vieille</strong> (Vector NTI) m'a montré que l'ingénierie logicielle n'est pas qu'un jeu académique — c'est un levier permettant aux scientifiques de progresser plus vite. Cette expérience a consolidé ma conviction que je peux être un profil rare capable de mêler <strong>rigueur technique et enjeu métier</strong>.
    </p>
  </section>

  <section style="margin-top: 60px; padding-top: 60px; border-top: 1px solid rgba(0,0,0,0.06);">
    <h4 style="color: var(--text-medium); font-weight: 500; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px;">
      Compétences du BUT Informatique Validées
    </h4>
    <div class="competences-tag" style="margin-top: 15px;">
      <span class="tag-c1">C1 - Réaliser : Architecture & Implémentation</span>
      <span class="tag-c2">C2 - Optimiser : Performance & Algorithmique</span>
      <span class="tag-c5">C5 - Conduire : Gestion de Projet Autonome</span>
      <span class="tag-c6">C6 - Collaborer : Travail d'Équipe Pluridisciplinaire</span>
    </div>
  </section>

</section>
`;