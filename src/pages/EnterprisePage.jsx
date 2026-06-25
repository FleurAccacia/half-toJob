import "../App.css";
import { useEffect, useRef, useState } from "react";
import {
  FaBell,
  FaChevronDown,
  FaClipboardCheck,
  FaFacebook,
  FaFileInvoiceDollar,
  FaQuestionCircle,
  FaSignOutAlt,
  FaThLarge,
  FaRegCompass,
  FaRocket,
  FaTools,
  FaUser,
  FaInstagram,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function EnterprisePage() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isUserMenuOpen]);

  return (
    <div className="app-root enterprise-root">
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
          <Link to="/">Etudiants</Link>
          <Link className="active" to="/entreprises">
            Entreprises
          </Link>
          <a href="#jobs">Jobs</a>
          <a href="#about">A propos de nous</a>
        </nav>

        <div
          className="topbar-right"
          aria-label="Actions utilisateur"
          ref={userMenuRef}
        >
          <button className="icon-btn" type="button" aria-label="Notifications">
            <span className="bell-dot" />
            <FaBell aria-hidden="true" />
          </button>
          <button
            className="avatar-btn"
            type="button"
            aria-label="Profil utilisateur"
            aria-expanded={isUserMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          >
            <span className="avatar" aria-hidden="true" />
            <span className="caret" aria-hidden="true">
              <FaChevronDown />
            </span>
          </button>

          {isUserMenuOpen ? (
            <div
              className="enterprise-user-menu"
              role="menu"
              aria-label="Menu utilisateur"
            >
              <div className="enterprise-user-menu-head">
                <span className="avatar mini" aria-hidden="true" />
                <div>
                  <p>Olivier</p>
                  <small>olivier@gmail.com</small>
                </div>
              </div>

              <button
                type="button"
                className="enterprise-user-menu-item"
                role="menuitem"
              >
                <FaUser aria-hidden="true" />
                Profil
              </button>

              <button
                type="button"
                className="enterprise-user-menu-item"
                role="menuitem"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  navigate("/dashboard");
                }}
              >
                <FaThLarge aria-hidden="true" />
                Dashboard
              </button>

              <button
                type="button"
                className="enterprise-user-menu-item"
                role="menuitem"
              >
                <FaQuestionCircle aria-hidden="true" />
                Support
              </button>

              <button
                type="button"
                className="enterprise-user-menu-item danger"
                role="menuitem"
              >
                <FaSignOutAlt aria-hidden="true" />
                Deconnexion
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <main className="hero-wrap">
        <section className="hero" id="entreprises">
          <div className="hero-frame" aria-hidden="true" />

          <div className="hero-left">
            <h1>
              Recrutez <span>mieux</span> et
              <br />
              plus <span>vite</span> !
            </h1>

            <p className="hero-copy">
              Confiez vos missions à des étudiants briefés et motivés,
              <br />
              partout à <span>Lomé</span>
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-images">
              <div className="hero-image hero-image-1" aria-label="Étudiante 1">
                <img src="/images/student-1.svg" alt="Étudiante" />
              </div>
              <div className="hero-image hero-image-2" aria-label="Étudiant 2">
                <img src="/images/student-2.svg" alt="Étudiant" />
              </div>
              <div className="hero-image hero-image-3" aria-label="Étudiante 3">
                <img src="/images/student-3.svg" alt="Étudiante" />
              </div>
            </div>
          </div>
          <div className="enterprise-blob" aria-hidden="true" />
        </section>

        <section className="enterprise-sectors" id="jobs">
          <h2>
            Half-toJob sélectionne les <span>meilleurs talents</span> pour
            chacune de vos <span>missions</span>
          </h2>

          <div className="enterprise-sectors-grid">
            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Evenementiel</h3>
              <p>La planification, la coordination.....</p>
            </article>

            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
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

            <article className="enterprise-roles-stack" aria-label="Roles">
              <p>Hote</p>
              <p>Hotesse</p>
              <p>Serveur (se)</p>
              <p>-</p>
            </article>

            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Communication</h3>
              <p>Gestion de réseaux sociaux ....</p>
            </article>

            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
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

            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Logistique</h3>
              <p>Livraison</p>
              <p>Courses</p>
            </article>

            <article className="enterprise-sector-card">
              <p className="enterprise-sector-icon" aria-hidden="true">
                <FaTools />
              </p>
              <h3>Administratif</h3>
              <p>Rédaction de documents</p>
            </article>
          </div>
        </section>

        <section className="enterprise-process" id="about">
          <h2>
            Décrivez votre mission et on
            <br />
            s&apos;occupe du reste !
          </h2>

          <div className="enterprise-process-panel">
            <article className="enterprise-process-item">
              <div className="enterprise-process-icon lilac" aria-hidden="true">
                <FaClipboardCheck />
              </div>
              <div>
                <h3>Inscription et vérification</h3>
                <p>
                  Validation rigoureuse des profils des étudiants et de leurs
                  garants.
                </p>
              </div>
            </article>

            <article className="enterprise-process-item">
              <div className="enterprise-process-icon blush" aria-hidden="true">
                <FaRegCompass />
              </div>
              <div>
                <h3>Briefing des étudiants</h3>
                <p>
                  Préparation rapide des étudiants et coordination logistique.
                </p>
              </div>
            </article>

            <article className="enterprise-process-item">
              <div className="enterprise-process-icon sky" aria-hidden="true">
                <FaRocket />
              </div>
              <div>
                <h3>Staffing des missions</h3>
                <p>
                  Assignation des missions avec un plan B prêt à tout moment en
                  cas d&apos;annulation.
                </p>
              </div>
            </article>

            <article className="enterprise-process-item">
              <div className="enterprise-process-icon pink" aria-hidden="true">
                <FaFileInvoiceDollar />
              </div>
              <div>
                <h3>Gestion administrative</h3>
                <p>
                  Administration, couverture d&apos;assurance et transactions
                  financières.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="enterprise-support">
          <h2>
            Nos étudiants sont des travailleurs autonomes,
            <br />
            soutenons-les ensemble !
          </h2>
          <p>
            Avec Half-toJob, les étudiants peuvent choisir librement des
            missions adaptées à leur emploi du temps sans engagement à long
            terme. Un système de remplacement permet de maintenir une qualité de
            service, même en cas de désistement.
            <strong>
              {" "}
              Half-toJob vise à offrir un équilibre entre revenus
              complémentaires et réussite scolaire,
            </strong>{" "}
            tout en luttant contre les discriminations et les pratiques
            exploitantes. Enfin, la plateforme se positionne comme un tremplin
            pour aider les étudiants à entrer sur le marché du travail, en leur
            offrant un soutien axé sur la bienveillance et l&apos;exigence.
          </p>
        </section>

        <section className="enterprise-testimonials" id="temoignages">
          <div className="enterprise-testimonials-head">
            <div>
              <h2>Les témoignages</h2>
              <p>
                Découvrez ce que nos entreprises partenaires pensent de leur
                expérience avec Half-toJob.
              </p>
            </div>
            <div className="enterprise-testimonials-nav">
              <button type="button">‹ Précédent</button>
              <button type="button" className="active">
                Suivant ›
              </button>
            </div>
          </div>

          <div className="enterprise-testimonials-grid">
            <article className="enterprise-testimonial-card">
              <div className="enterprise-testimonial-top">
                <div className="enterprise-logo enterprise-logo-red">
                  airtel
                </div>
                <p className="enterprise-stars" aria-label="4 étoiles sur 5">
                  ★ ★ ★ ★ ☆
                </p>
              </div>
              <h3>
                Half-toJob !
                <br />
                on adore
              </h3>
              <p>
                Grâce à cette plateforme, nous avons trouvé des jeunes
                travailleurs qualifiés pour nos événements, qu&apos;il
                s&apos;agisse de serveurs, de techniciens ou de coordinateurs.
                Leur énergie et leur professionnalisme ont grandement contribué
                au succès de nos événements.
              </p>
            </article>

            <article className="enterprise-testimonial-card">
              <div className="enterprise-testimonial-top">
                <div className="enterprise-logo enterprise-logo-photo">
                  <img src="/images/student-2.svg" alt="Temoin" />
                </div>
                <p className="enterprise-stars" aria-label="4 étoiles sur 5">
                  ★ ★ ★ ★ ☆
                </p>
              </div>
              <h3>
                Plateforme efficace,
                <br />
                réactive et flexible
              </h3>
              <p>
                C&apos;est un réel plaisir de travailler avec Half-toJob,
                plateforme efficace, réactive et flexible, nous garantissant des
                étudiants souriants et performants! Plus qu&apos;un service,
                c&apos;est une épaule solide sur laquelle on peut s&apos;appuyer
                en toute confiance !
              </p>
            </article>

            <article className="enterprise-testimonial-card">
              <div className="enterprise-testimonial-top">
                <div className="enterprise-logo enterprise-logo-blue">COLS</div>
                <p className="enterprise-stars" aria-label="4 étoiles sur 5">
                  ★ ★ ★ ★ ☆
                </p>
              </div>
              <h3>
                Nous travaillons en toute confiance
                <br />
                Half-toJob
              </h3>
              <p>
                Nous avons utilisé la plateforme pour trouver des animateurs
                commerciaux dynamiques qui ont su capter l&apos;attention du
                public et augmenter les ventes lors de nos campagnes. Leur
                enthousiasme et leur efficacité ont fait toute la différence.
              </p>
            </article>
          </div>

          <div className="enterprise-dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
          </div>
        </section>
      </main>

      <footer className="site-footer enterprise-footer">
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
              La plateforme qui connecte les jeunes en quête d&apos;opportunités
              et les entreprises à la recherche de main-d&apos;oeuvre ponctuelle
            </p>
          </div>

          <div className="footer-col">
            <h3>Accueil</h3>
            <a href="#jobs">Jobs</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#privacy">Politique de confidentialité</a>
          </div>

          <div className="footer-col">
            <h3>Resources</h3>
            <Link to="/entreprises">Entreprises</Link>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-col footer-newsletter" id="contact">
            <h3>Souscrivez aux nouvelles</h3>
            <p>Les dernières nouvelles sur les missions, les entreprises.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" aria-label="Email" />
              <button type="submit">Souscrire</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2024 @ Half-toJob. Tous droits réservés.</p>

          <div className="social-links" aria-label="Reseaux sociaux">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="icon-social" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="icon-social" />
            </a>
            <a href="#" aria-label="Web">
              <FaGlobe className="icon-social" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="icon-social" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="icon-social" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EnterprisePage;
