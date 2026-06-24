import "../App.css";
import {
  FaBell,
  FaChevronDown,
  FaFacebook,
  FaGlobe,
  FaMapMarkerAlt,
  FaSearch,
  FaTools,
  FaInstagram,
  FaArrowRight,
  FaCube,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function StudentPage() {
  const partners = [
    "TOGODIS",
    "LE SOLSTICE",
    "314",
    "Bar La Fierte",
    "O'Foyer de la ville",
    "vade",
  ];

  const conditions = [
    {
      title: "Être Majeur",
      text: "Tu dois avoir 18 ans minimum au moment de la mission. Cette condition est demandée pour garantir un cadre légal clair avec nos entreprises partenaires.",
    },
    {
      title: "Avoir une carte étudiante valide",
      text: "Une carte étudiante en cours de validité est nécessaire pour confirmer ton statut. Elle permet aussi de te proposer des missions adaptées à ton rythme d'études.",
    },
    {
      title: "Avoir une personne garante",
      text: "Tu dois renseigner une personne de confiance joignable en cas de besoin administratif. Cette information sécurise la collaboration entre toi, la plateforme et l'employeur.",
    },
    {
      title: "Être SUPER motivé",
      text: "Nous recherchons des profils ponctuels, dynamiques et prêts à s'impliquer sur le terrain. Ta motivation fait souvent la différence pour être repris sur plusieurs missions.",
    },
    {
      title: "Être toujours souriant et professionnel",
      text: "Le savoir-être est essentiel: politesse, respect des consignes et bonne présentation. Tu représentes à la fois ton image et celle de HALFTOJOB chez chaque client.",
    },
    {
      title: "S'inscrire et compléter son profil",
      text: "Ton inscription doit être finalisée avec tes informations, compétences et disponibilités. Un profil complet augmente tes chances d'être contacté rapidement pour une mission.",
    },
  ];

  const missions = [
    { company: "GCIAP", city: "Agoe", slots: "2 lions", color: "mint" },
    {
      company: "Solex",
      city: "Agoe",
      slots: "2 lions",
      color: "gray",
      highlight: true,
    },
    { company: "KPlaza", city: "Agoe", slots: "2 lions", color: "gold" },
    { company: "Vendeur+", city: "Agoe", slots: "2 lions", color: "pink" },
    { company: "COLS", city: "Agoe", slots: "2 lions", color: "gray" },
    { company: "MBUS", city: "Agoe", slots: "2 lions", color: "gray" },
    { company: "Airtel", city: "Agoe", slots: "2 lions", color: "blue" },
    { company: "TresorPay", city: "Agoe", slots: "2 lions", color: "blue" },
    { company: "MTN", city: "Agoe", slots: "2 lions", color: "pink" },
  ];

  const testimonials = [
    {
      name: "Kossi Adeb",
      quote:
        "Merci à toute l&apos;équipe pour votre écoute et votre réactivité. Continuez comme ça, ça donne envie de travailler.",
    },
    {
      name: "Isabelle KAKO",
      quote:
        "Grâce à cette plateforme, j&apos;ai trouvé un job étudiant en moins d&apos;une semaine. L&apos;équipe est réactive et les entreprises sont sérieuses.",
    },
    {
      name: "Kokoe MABE",
      quote:
        "La flexibilité des missions est parfaite pour mes études. Je recommande cette plateforme à tous les étudiants qui veulent gagner en expérience.",
    },
  ];

  return (
    <div className="app-root student-root">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Half-toJob accueil">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-text">Half-toJob</span>
        </Link>

        <nav className="menu" aria-label="Navigation principale">
          <a className="active" href="#etudiants">
            Etudiants
          </a>
          <Link to="/entreprises">Entreprises</Link>
          <a href="#jobs">Jobs</a>
          <a href="#about">A propos de nous</a>
        </nav>

        <div className="topbar-right" aria-label="Actions utilisateur">
          <button className="icon-btn" type="button" aria-label="Notifications">
            <span className="bell-dot" />
            <FaBell aria-hidden="true" />
          </button>
          <button
            className="avatar-btn"
            type="button"
            aria-label="Profil utilisateur"
          >
            <span className="avatar" aria-hidden="true" />
            <span className="caret" aria-hidden="true">
              <FaChevronDown />
            </span>
          </button>
        </div>
      </header>

      <main className="hero-wrap">
        <section className="hero" id="etudiants">
          <div className="hero-frame" aria-hidden="true" />

          <p className="eyebrow">SUR Half-toJob</p>
          <h1>
            Trouver des <span>missions</span>,<br />
            c&apos;est <span>maintenant</span> simple et rapide
          </h1>

          <p className="hero-copy">
            La plateforme qui connecte les jeunes en quête d&apos;opportunités
            et les entreprises à la recherche de main-d&apos;œuvre ponctuelle
          </p>

          <form className="search-card" onSubmit={(e) => e.preventDefault()}>
            <label className="search-cell" aria-label="Domaine recherche">
              <span className="cell-icon" aria-hidden="true">
                <FaSearch />
              </span>
              <input type="text" placeholder="Domaine recherche" />
            </label>

            <label className="search-cell" aria-label="Ville">
              <span className="cell-icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <select defaultValue="">
                <option value="" disabled>
                  Ville
                </option>
                <option>Paris</option>
                <option>Lyon</option>
                <option>Abidjan</option>
              </select>
            </label>

            <button className="btn-search" type="submit">
              Chercher
            </button>
          </form>
        </section>

        <section
          className="partners-strip"
          aria-label="Entreprises partenaires"
        >
          <div className="partners-row">
            {partners.map((partner) => (
              <article
                key={partner}
                className="partner-item"
                aria-label={partner}
              >
                {partner}
              </article>
            ))}
          </div>
        </section>

        <section className="sectors" id="jobs">
          <h2>
            Explorez nos <span>secteurs demploi.</span>
          </h2>

          <div className="sectors-grid">
            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Evenementiel</h3>
              <p>La planification, la coordination.....</p>
            </article>

            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>
                Animation
                <br />
                Commerciale
              </h3>
              <p>Distribution de flyers</p>
              <p>Prospection</p>
            </article>

            <article className="roles-stack" aria-label="Roles">
              <p>Hote</p>
              <p>Hotesse</p>
              <p>Serveur (se)</p>
              <p>-</p>
            </article>

            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Communication</h3>
              <p>Gestion de reseaux sociaux ....</p>
            </article>

            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>
                Vente et support
                <br />
                client
              </h3>
              <p>Vente en boutique</p>
              <p>Gestion de stock</p>
            </article>

            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Logistique</h3>
              <p>Livraison</p>
              <p>Courses</p>
            </article>

            <article className="sector-card">
              <p className="sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Administratif</h3>
              <p>Redaction de documents</p>
            </article>
          </div>
        </section>

        <section className="conditions" id="about">
          <div className="conditions-inner">
            <h2>
              Pour nous rejoindre , il te faut <span>remplir</span>
              <br />
              ces quelques <span>conditions</span>
            </h2>

            <div className="conditions-list">
              {conditions.map((condition, index) => (
                <article className="condition-card" key={condition.title}>
                  <div className="condition-number" aria-hidden="true">
                    {index + 1}
                  </div>

                  <div className="condition-content">
                    <h3>{condition.title}</h3>
                    <p>{condition.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="missions" id="entreprises">
          <div className="missions-head">
            <h2>
              Missions <span>récentes</span>
            </h2>
            <button type="button" className="link-more">
              Voir plus
              <span aria-hidden="true">
                <FaArrowRight />
              </span>
            </button>
          </div>

          <div className="missions-grid">
            {missions.map((mission, index) => (
              <article
                key={`${mission.company}-${index}`}
                className={`mission-card${mission.highlight ? " is-highlight" : ""}`}
              >
                <div className={`mission-logo ${mission.color}`}>
                  {mission.company.slice(0, 2)}
                </div>

                <div className="mission-content">
                  <h3>Commerciale</h3>
                  <p>
                    {mission.city} • {mission.slots}
                  </p>

                  <div className="mission-tags">
                    <span>Pour 09 jours</span>
                    <span>5.000 FCFA/jours</span>
                    <span>0/5 profils</span>
                  </div>
                </div>

                <span className="mission-badge" aria-hidden="true">
                  <FaCube />
                </span>

                {mission.highlight ? (
                  <div className="mission-overlay">
                    <button type="button">En savoir plus</button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials" id="temoignages">
          <div className="testimonials-head">
            <h2>Les témoignages</h2>
            <div className="testimonials-nav">
              <button type="button">‹ Précédent</button>
              <button type="button" className="active">
                Suivant ›
              </button>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="testimonial-top">
                  <span className="avatar-mini" aria-hidden="true" />
                  <p className="stars" aria-label="4 étoiles sur 5">
                    ★ ★ ★ ★ ☆
                  </p>
                </div>
                <h3>{item.name}</h3>
                <p>{item.quote}</p>
              </article>
            ))}
          </div>

          <div className="dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-col brand-col">
            <Link
              className="brand footer-brand"
              to="/"
              aria-label="Half-toJob accueil"
            >
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="brand-text">Half-toJob</span>
            </Link>
            <p>
              La plateforme qui connecte les jeunes en quete d&apos;opportunites
              et les entreprises a la recherche de main-d&apos;oeuvre ponctuelle
            </p>
          </div>

          <div className="footer-col">
            <h3>Accueil</h3>
            <a href="#jobs">Jobs</a>
            <a href="#tarifs">Tarifs</a>
            {/* <a href="#privacy">Politique de confidentialite</a> */}
          </div>

          <div className="footer-col">
            <h3>Resources</h3>
            <Link to="/entreprises">Entreprises</Link>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-col footer-newsletter" id="contact">
            <h3>Souscrivez aux nouvelles</h3>
            <p>Les dernieres nouvelles sur les missions, les entreprises.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" aria-label="Email" />
              <button type="submit">Souscrire</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2024 @ Half-toJob. Tous droits reserves.</p>

          <div className="social-links" aria-label="Reseaux sociaux">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="icon-social" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="icon-social" />
            </a>
            <a href="#" aria-label="Whatsapp">
              <FaWhatsapp className="icon-social" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="icon-social" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="icon-social" />
            </a>
            <a href="#" aria-label="Web">
              <FaGlobe className="icon-social" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StudentPage;
