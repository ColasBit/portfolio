// 1. On déclare la fonction JS dans le fichier (elle sera lue par le navigateur)
function handleContactForm(event) {
  event.preventDefault();
  
  // Récupérer les données du formulaire
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Encoder les données pour mailto (utilisation de concaténation standard + pour ne pas casser les backticks)
  const mailtoLink = "mailto:nicolaszago08@gmail.com?subject=" + encodeURIComponent(data.subject) + 
                     "&body=" + encodeURIComponent("Nom: " + data.name + "\nEmail: " + data.email + "\n\nMessage:\n" + data.message);
  
  // Ouvrir le client email
  window.location.href = mailtoLink;
}

// 2. On stocke le HTML dans la variable (sans la balise script !)
const html_contact = `
<section>
  <h2>Contact</h2>
  
  <div class="contact-container">
    <div class="contact-info">
      <p>
        Vous avez une question, une proposition de collaboration, ou vous souhaitez discuter 
        de développement, d'innovation narrative, ou d'ingénierie expérientielle ?
      </p>
      <p>
        Je suis toujours intéressé par les projets qui mêlent rigueur technique et créativité.
      </p>

      <div class="contact-links">
            <a href="mailto:nicolas.zago@etu.umontpellier.fr" class="contact-card">
              <div class="icon-box"><i class="devicon-google-plain"></i></div> <span>nicolas.zago@etu.umontpellier.fr</span>
            </a>

            <a href="https://www.linkedin.com/in/nicolas-zago-6bb948389/" target="_blank" class="contact-card">
              <div class="icon-box"><i class="devicon-linkedin-plain"></i></div>
              <span>Mon Profil LinkedIn</span>
            </a>

            <a href="https://gitlabinfo.iutmontp.univ-montp2.fr/zagon" target="_blank" class="contact-card">
              <div class="icon-box"><i class="devicon-gitlab-plain"></i></div>
              <span>Mon GitLab</span>
            </a>

            <a href="https://nicolas-zago.itch.io/" target="_blank" class="contact-card">
              <div class="icon-box"><i class="devicon-bash-plain"></i></div> <span>Mon profil Itch.io</span>
            </a>

            <a href="https://github.com/ColasBit/" target="_blank" class="contact-card">
              <div class="icon-box"><i class="devicon-github-original"></i></div>
              <span>Mon GitHub</span>
            </a>
          </div>
    </div>

    <form class="contact-form" onsubmit="handleContactForm(event)">
      <div>
        <input type="text" name="name" placeholder="Votre nom" required>
      </div>
      <div>
        <input type="email" name="email" placeholder="Votre email" required>
      </div>
      <div>
        <input type="text" name="subject" placeholder="Sujet" required>
      </div>
      <div>
        <textarea name="message" placeholder="Votre message..." required></textarea>
      </div>
      <button type="submit" class="btn-submit">Envoyer</button>
    </form>
  </div>
</section>
`;