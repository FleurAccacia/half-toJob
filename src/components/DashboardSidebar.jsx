import {
  FaBriefcase,
  FaCog,
  FaCreditCard,
  FaGlobe,
  FaSignOutAlt,
  FaThLarge,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Sidebar partagée entre Dashboard, Missions et NewMission.
 * @prop {string} activePage  — "dashboard" | "missions" | "candidatures" | ...
 */
// eslint-disable-next-line react/prop-types
function DashboardSidebar({ activePage }) {
  function navClass(page) {
    return `db-nav-item${activePage === page ? " active" : ""}`;
  }

  return (
    <aside className="db-sidebar">
      {/* Logo */}
      <Link className="db-logo" to="/entreprises" aria-label="Half-toJob">
        <span className="db-logo-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="db-logo-text">
          <span>Half</span>
          <span>toJob</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="db-nav" aria-label="Navigation dashboard">
        <Link className={navClass("dashboard")} to="/dashboard">
          <FaThLarge />
          <span>Dashboard</span>
        </Link>
        <Link className={navClass("missions")} to="/missions">
          <FaBriefcase />
          <span>Missions</span>
        </Link>
        <a className={navClass("candidatures")} href="#candidatures">
          <FaUsers />
          <span>Candidatures</span>
        </a>
        <a className={navClass("payements")} href="#payements">
          <FaCreditCard />
          <span>Payements</span>
        </a>
        <a className={navClass("parametre")} href="#parametre">
          <FaCog />
          <span>Parametre</span>
        </a>
        <a className={navClass("siteweb")} href="#siteweb">
          <FaGlobe />
          <span>Site web</span>
        </a>
      </nav>

      {/* Utilisateur */}
      <div className="db-user">
        <span className="db-avatar" aria-hidden="true" />
        <div className="db-user-info">
          <p className="db-user-name">Olivier Arafat</p>
          <p className="db-user-role">Patisserie</p>
        </div>
        <button className="db-logout" type="button" aria-label="Déconnexion">
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
