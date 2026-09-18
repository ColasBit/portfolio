const html_stageCnrs = `
<section>
  <h2>Stage au CNRS — IMGT</h2>

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
      
      <p><strong>Période :</strong> Avril — Juillet 2026 | <strong>Lieu :</strong> IMGT (CNRS, Montpellier)</p>
      <p><strong>Technos :</strong> JavaScript ES6+, D3.js, Fetch API, IntersectionObserver, Proxy, localStorage</p>
      
      <p><strong>Mission :</strong> Remplacer Vector NTI (logiciel obsolète depuis 2011) par une application web moderne 
      permettant aux bio-informaticiens de visualiser, éditer et annoter interactivement des séquences génomiques, 
      avec intégration automatisée aux serveurs IMGT/V-QUEST.</p>
    </div>
  </section>

  <section style="margin: 60px 0;">
    <h3>Les 3 Défis Clés</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 25px;">
      <div style="background: linear-gradient(135deg, rgba(29, 53, 87, 0.05), rgba(29, 53, 87, 0.1)); padding: 30px; border-radius: 8px; border-left: 4px solid var(--accent-blue);">
        <h4 style="margin-top: 0; color: var(--accent-blue);">⚡ Performance</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Gérer des séquences de <strong>500+ kilobases</strong> sans gel du navigateur
          <br><br>
          <strong>✓ Solution :</strong> Virtual scrolling (IntersectionObserver + TreeWalker)
        </p>
      </div>

      <div style="background: linear-gradient(135deg, rgba(230, 57, 70, 0.05), rgba(230, 57, 70, 0.1)); padding: 30px; border-radius: 8px; border-left: 4px solid var(--accent-red);">
        <h4 style="margin-top: 0; color: var(--accent-red);">🔗 Intégration</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Communiquer avec les serveurs distants (IMGT/V-QUEST) sans rechargement
          <br><br>
          <strong>✓ Solution :</strong> Proxy Apache + Fetch API + gestion CORS
        </p>
      </div>

      <div style="background: linear-gradient(135deg, rgba(255, 158, 62, 0.05), rgba(255, 158, 62, 0.1)); padding: 30px; border-radius: 8px; border-left: 4px solid var(--accent-orange);">
        <h4 style="margin-top: 0; color: var(--accent-orange);">🛡️ Sécurité</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Édition d'annotations sans corruption de données génomiques
          <br><br>
          <strong>✓ Solution :</strong> State centralisé + détection collision automatique
        </p>
      </div>
    </div>
  </section>

  <section style="margin: 60px 0; background: var(--bg-subtle); padding: 40px; border-radius: 8px;">
    <h3 style="margin-top: 0;">Architecture en Modules Découplés</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
      <div>
        <p><strong style="color: var(--accent-blue);">store.js</strong> — État centralisé</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">Sanctuarise séquence ADN, annotations, cadres de lecture via Proxy</p>
      </div>

      <div>
        <p><strong style="color: var(--accent-red);">editeur.js</strong> — Édition sécurisée</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">C.R.U.D + validation contraintes + détection collisions</p>
      </div>

      <div>
        <p><strong style="color: var(--accent-orange);">visualiseur.js</strong> — Rendu graphique</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">D3.js interactif + zoom/pan fluide sur 500k+ nucléotides</p>
      </div>

      <div>
        <p><strong style="color: var(--accent-green, #2A9D8F);">moteur.js</strong> — Logique métier</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">Algorithmes purs (audit génomique, traduction ADN→AA)</p>
      </div>

      <div>
        <p><strong style="color: #27ae60;">promesse.js</strong> — Asynchrone</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">Orchestration fetch + communication serveurs IMGT</p>
      </div>

      <div>
        <p><strong style="color: #9b59b6;">persistence.js</strong> — Sauvegarde</p>
        <p style="font-size: 0.85rem; color: var(--text-medium);">localStorage + sauvegarde différentielle (delta)</p>
      </div>
    </div>
  </section>

  <section style="margin: 60px 0;">
    <h3>Résultats Mesurables</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
      <div style="text-align: center; padding: 25px; background: var(--bg-subtle); border-radius: 8px;">
        <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-red); margin-bottom: 10px;">500k+</div>
        <p style="color: var(--text-medium); margin: 0;">Nucléotides traités</p>
        <p style="font-size: 0.8rem; color: var(--text-light);">sans ralentissement</p>
      </div>

      <div style="text-align: center; padding: 25px; background: var(--bg-subtle); border-radius: 8px;">
        <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-blue); margin-bottom: 10px;">2.5s</div>
        <p style="color: var(--text-medium); margin: 0;">Temps de chargement</p>
        <p style="font-size: 0.8rem; color: var(--text-light);">vs Vector NTI (30s)</p>
      </div>

      <div style="text-align: center; padding: 25px; background: var(--bg-subtle); border-radius: 8px;">
        <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-orange); margin-bottom: 10px;">✓</div>
        <p style="color: var(--text-medium); margin: 0;">Production</p>
        <p style="font-size: 0.8rem; color: var(--text-light);">utilisée quotidiennement</p>
      </div>
    </div>
  </section>

  <section style="margin: 60px 0; background: linear-gradient(135deg, rgba(29, 53, 87, 0.04), rgba(42, 157, 143, 0.04)); padding: 40px; border-radius: 8px;">
    <h3 style="margin-top: 0;">Fonctionnalités Clés</h3>
    
    <ul style="color: var(--text-medium); line-height: 1.8; padding-left: 20px;">
      <li><strong>Visualisation multi-couches</strong> — Brin sens, brin antisens, acides aminés (traduction 6 cadres)</li>
      <li><strong>Édition interactive</strong> — Modification d'annotations avec validation en temps réel</li>
      <li><strong>Audit automatisé</strong> — Classification génique (Fonctionnel / ORF / Pseudogène)</li>
      <li><strong>Interrogation IMGT/V-QUEST</strong> — Identification gène germinal le plus proche</li>
      <li><strong>Export Excel</strong> — Rapports structurés pour analyse BLAST ultérieure</li>
      <li><strong>Sauvegarde locale</strong> — Persistance sans serveur backend (localStorage)</li>
    </ul>
  </section>

  <section style="margin: 60px 0;">
    <h3>Méthodologie & Apprentissages</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
      <div>
        <h4 style="color: var(--accent-blue); margin-top: 0;">🔄 Approche Itérative</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Prototypage rapide → validation biologistes (biquotidienne) → refactoring production
          <br><br>
          Passage crucial de "code qui marche" à "code robuste et maintenable"
        </p>
      </div>

      <div>
        <h4 style="color: var(--accent-orange); margin-top: 0;">🏛️ Architecture SOLID</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Séparation des responsabilités (SRP), patterns Observer/Pub-Sub, tests unitaires
          <br><br>
          Aucun framework lourd : Vanilla JS + bonnes pratiques
        </p>
      </div>

      <div>
        <h4 style="color: var(--accent-red); margin-top: 0;">📚 Compétences Validées</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          <strong>C1 :</strong> Architecture & implémentation complète
          <br><strong>C2 :</strong> Optimisation performance (virtual scrolling)
          <br><strong>C5 :</strong> Gestion projet autonome avec feedback itératif
        </p>
      </div>

      <div>
        <h4 style="color: var(--accent-green, #2A9D8F); margin-top: 0;">🤝 Impact Réel</h4>
        <p style="color: var(--text-medium); font-size: 0.9rem;">
          Remplacé un outil 15 ans plus vieux
          <br><br>
          Utilisé en production par les chercheurs du CNRS
          <br><br>
          Preuve qu'on peut mêler rigueur technique et enjeu scientifique
        </p>
      </div>
    </div>
  </section>

  <section style="margin-top: 60px; padding-top: 60px; border-top: 1px solid rgba(0,0,0,0.06);">
    <div style="display: flex; gap: 30px; align-items: center;">
      <div>
        <h4 style="color: var(--text-medium); font-weight: 500; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">
          Compétences Validées
        </h4>
        <div class="competences-tag">
          <span class="tag-c1">C1 - Réaliser</span>
          <span class="tag-c2">C2 - Optimiser</span>
          <span class="tag-c5">C5 - Conduire</span>
          <span class="tag-c6">C6 - Collaborer</span>
        </div>
      </div>
      
      <div style="text-align: center;">
        <p style="color: var(--text-medium); font-size: 0.9rem; margin: 0;">
          <strong>Tuteur :</strong> Guilhem Zetoun
          <br><strong>Équipe :</strong> Sofia Kossida, Noé Mathieux, Alexandre Guichard
        </p>
      </div>
    </div>
  </section>

</section>
`;