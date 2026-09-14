const html_home = `
<section id="hero" class="hero-section">
  <div class="hero-content">
    <h1>Nicolas ZAGO</h1>
    <p class="hero-tagline">Développeur passionné par l'intersection entre l'ingénierie logicielle rigoureuse et l'innovation narrative.</p>
    <div class="hero-cta">
      <a href="#" data-view="projets" class="btn-primary">Voir mes projets</a>
      <a href="#" data-view="tuf" class="btn-secondary">Découvrir TUF</a>
    </div>
  </div>
</section>

<section class="apropos-section">
  <div class="apropos-container">
    
    <div class="bio-content enhanced-bio">
      <h3>
        <span style="color: var(--accent-blue);">Ingénierie</span> & <span style="color: var(--accent-red);">Créativité</span>
      </h3>

      <div class="bio-intro-block">
        <p>
          Je m'appelle <span class="bio-highlight">Nicolas ZAGO</span>. Actuellement en troisième année de 
          <strong>BUT Informatique (spécialité RACDV - Réalisation d'Applications)</strong>, je me spécialise 
          dans la conception, le développement et la validation de solutions logicielles robustes.
        </p>
        <p>
          Mon parcours académique et mes expériences professionnelles, notamment lors de mon stage au <strong>CNRS</strong>, 
          m'ont permis d'acquérir de solides compétences en architecture logicielle, en développement web et en 
          gestion de bases de données. Au-delà du code pur, je suis convaincu que la maîtrise technologique est 
          le meilleur vecteur pour concevoir des expériences interactives et transmettre des histoires.
        </p>
      </div>

      <!-- Boîte formelle Profil Technique -->
      <div class="professional-box">
        <div class="prof-header">
          <div class="prof-icon">👨‍💻</div>
          <div class="prof-title">PROFIL TECHNIQUE & STATUT ACTUEL</div>
        </div>

        <div class="prof-body">
          <ul class="status-list">
            <li>
              <span class="status-label">Formation :</span> 
              BUT Informatique (3ème année - RACDV)
            </li>
            <li>
              <span class="status-label">Expertise technique :</span> 
              Java, Développement Web, Bases de données, Architectures Logicielles
            </li>
            <li>
              <span class="status-label">Expérience pro :</span> 
              Développement d'interfaces web pour la recherche en biologie (CNRS)
            </li>
            <li>
              <span class="status-label">Projet d'envergure :</span> 
              Auteur et chef de projet sur l'édition indépendante de <em>The Ultimate Fight</em>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h3 style="margin-top: 50px; text-align: center;">Mes Domaines de Compétences</h3>
    <div class="interests-column">

      <div class="interest-card">
        <div class="icon">💻</div>
        <div class="text">
          <h4>Développement Logiciel</h4>
          <p>Conception d'applications métier complètes, du back-end (Java, algorithmique) à l'interface utilisateur, en appliquant les méthodes agiles.</p>
        </div>
      </div>

      <div class="interest-card">
        <div class="icon">📖</div>
        <div class="text">
          <h4>Édition & Gestion de Projet</h4>
          <p>Auteur indépendant, gestion de financements participatifs (Ulule), direction artistique et coordination avec des illustrateurs professionnels.</p>
        </div>
      </div>

      <div class="interest-card">
        <div class="icon">⚙️</div>
        <div class="text">
          <h4>Ingénierie Expérientielle</h4>
          <p>Liaison entre le matériel et le logiciel. Automatisation de systèmes complexes et développement d'outils sur-mesure pour des projets narratifs ou ludiques.</p>
        </div>
      </div>
    </div>
    
  </div>
</section>

<style>
  /* --- Section Héro (En-tête) --- */
  .hero-section {
    background: linear-gradient(135deg, var(--bg-main) 0%, var(--bg-subtle) 100%);
    padding: 120px 40px !important;
    text-align: center;
    border: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04) !important;
  }

  .hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--accent-red), var(--accent-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-tagline {
    font-size: 1.3rem;
    color: var(--text-medium);
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.8;
  }

  .hero-cta {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 16px 40px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition, all 0.3s ease);
    display: inline-block;
    cursor: pointer;
    border: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--accent-red), #D62828);
    color: white;
    box-shadow: 0 4px 16px rgba(230, 57, 70, 0.25);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(230, 57, 70, 0.35);
  }

  .btn-secondary {
    background: var(--bg-white, white);
    color: var(--accent-red);
    border: 2px solid var(--accent-red);
  }

  .btn-secondary:hover {
    background: var(--accent-red);
    color: white;
    transform: translateY(-3px);
  }

  /* --- Section À Propos --- */
  .apropos-section {
    padding: 60px 20px 80px;
  }

  .apropos-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .bio-content h3 {
    font-size: 2rem;
    margin-bottom: 25px;
    text-align: center;
  }

  .bio-intro-block {
    background: var(--bg-subtle, #f8f9fa);
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 40px;
    line-height: 1.7;
    font-size: 1.05rem;
  }

  .bio-intro-block p {
    margin-bottom: 15px;
  }

  .bio-intro-block p:last-child {
    margin-bottom: 0;
  }

  .bio-highlight {
    font-weight: bold;
    color: var(--accent-red);
  }

  /* --- Design de la nouvelle boîte de Profil Technique --- */
  .professional-box {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .prof-header {
    background: var(--accent-blue, #1D3557);
    color: white;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .prof-title {
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 0.95rem;
  }

  .prof-body {
    padding: 25px;
  }

  .status-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .status-list li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .status-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .status-label {
    font-weight: 700;
    color: var(--accent-red, #D62828);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* --- Grille des domaines de compétences --- */
  .interests-column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .interest-card {
    background: var(--bg-subtle, #f8f9fa);
    padding: 25px;
    border-radius: 12px;
    transition: transform 0.2s;
    border: 1px solid rgba(0,0,0,0.03);
  }

  .interest-card:hover {
    transform: translateY(-5px);
  }

  .interest-card .icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .interest-card h4 {
    margin-bottom: 10px;
    color: var(--accent-blue);
    font-size: 1.2rem;
  }

  .interest-card p {
    color: var(--text-medium);
    line-height: 1.5;
    font-size: 0.95rem;
  }
</style>
`;