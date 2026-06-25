import "./Dashboard.css";
import {
  FaBriefcase,
  FaBoxOpen,
  FaCalendarAlt,
  FaChevronDown,
  FaCog,
  FaCreditCard,
  FaEllipsisH,
  FaGlobe,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaThLarge,
  FaTrashAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const missionRows = [
  {
    id: "#876364",
    poste: "Commerciale",
    tache: "Prospections, repondre aux appels...",
    debut: "08 Sept, 2024",
    fin: "12 Sept, 2024",
    status: "Terminé",
    statusClass: "done",
  },
  {
    id: "#076364",
    poste: "Graphyste",
    tache: "Conception de flyers, carte de visit...",
    debut: "05 Sept, 2024",
    fin: "18 Sept, 2024",
    status: "En cours",
    statusClass: "progress",
  },
  {
    id: "#176364",
    poste: "Livreur",
    tache: "Distributions des produits",
    debut: "16 Sept, 2024",
    fin: "16 Sept, 2024",
    status: "Non commencé",
    statusClass: "todo",
  },
  {
    id: "#876364",
    poste: "Commerciale",
    tache: "Prospections, repondre aux appels...",
    debut: "08 Sept, 2024",
    fin: "12 Sept, 2024",
    status: "Terminé",
    statusClass: "done",
  },
  {
    id: "#176364",
    poste: "Livreur",
    tache: "Distributions des produits",
    debut: "16 Sept, 2024",
    fin: "16 Sept, 2024",
    status: "Non commencé",
    statusClass: "todo",
  },
];

function DashboardPage() {
  return (
    <div className="db-root">
      {/* ─── Sidebar ─── */}
      <aside className="db-sidebar">
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

        <nav className="db-nav" aria-label="Navigation dashboard">
          <Link className="db-nav-item active" to="/dashboard">
            <FaThLarge />
            <span>Dashboard</span>
          </Link>
          <a className="db-nav-item" href="#missions">
            <FaBriefcase />
            <span>Missions</span>
          </a>
          <a className="db-nav-item" href="#candidatures">
            <FaUsers />
            <span>Candidatures</span>
          </a>
          <a className="db-nav-item" href="#payements">
            <FaCreditCard />
            <span>Payements</span>
          </a>
          <a className="db-nav-item" href="#parametre">
            <FaCog />
            <span>Parametre</span>
          </a>
          <a className="db-nav-item" href="#siteweb">
            <FaGlobe />
            <span>Site web</span>
          </a>
        </nav>

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

      {/* ─── Zone principale ─── */}
      <main className="db-main">
        {/* Barre du haut */}
        <div className="db-topbar">
          <h1 className="db-page-title">Dashboard</h1>
          <div className="db-date-filters">
            <button className="db-date-btn" type="button">
              01-09-2024 <FaChevronDown />
            </button>
            <button className="db-date-btn" type="button">
              20-09-2024 <FaChevronDown />
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="db-stats-grid">
          <div className="db-stat-card">
            <span className="db-stat-icon sky">
              <FaBriefcase />
            </span>
            <div>
              <p className="db-stat-value">12+</p>
              <p className="db-stat-label">Jobs postés</p>
            </div>
          </div>
          <div className="db-stat-card">
            <span className="db-stat-icon sand">
              <FaBoxOpen />
            </span>
            <div>
              <p className="db-stat-value">07</p>
              <p className="db-stat-label">Mission achevés</p>
            </div>
          </div>
          <div className="db-stat-card">
            <span className="db-stat-icon pink">
              <FaBriefcase />
            </span>
            <div>
              <p className="db-stat-value">05</p>
              <p className="db-stat-label">Postes</p>
            </div>
          </div>
          <div className="db-stat-card money">
            <span className="db-stat-icon green">
              <FaMoneyBillWave />
            </span>
            <div>
              <p className="db-stat-value">
                120.000 <span className="db-fcfa">FCFA</span>
              </p>
              <p className="db-stat-label">investis</p>
            </div>
          </div>
        </div>

        {/* Tableau des missions */}
        <div className="db-table-section">
          <div className="db-table-header">
            <h2 className="db-table-title">Les missions</h2>
            <a className="db-voir-plus" href="#missions">
              Voir plus
            </a>
          </div>
          <table className="db-table">
            <thead>
              <tr>
                <th>
                  <span className="db-checkbox" />
                </th>
                <th>
                  Id <FaChevronDown />
                </th>
                <th>
                  Postes <FaChevronDown />
                </th>
                <th>
                  Taches <FaChevronDown />
                </th>
                <th>
                  Date de fin <FaChevronDown />
                </th>
                <th>
                  Date de fin <FaChevronDown />
                </th>
                <th>
                  Status <FaChevronDown />
                </th>
                <th>
                  <FaTrashAlt className="db-trash-th" />
                </th>
              </tr>
            </thead>
            <tbody>
              {missionRows.map((row, i) => (
                <tr key={i}>
                  <td>
                    <span className="db-checkbox" />
                  </td>
                  <td className="db-id">{row.id}</td>
                  <td>{row.poste}</td>
                  <td className="db-tache">{row.tache}</td>
                  <td>
                    <span className="db-date-cell">
                      <FaCalendarAlt className="db-cal-icon" /> {row.debut}
                    </span>
                  </td>
                  <td>
                    <span className="db-date-cell">
                      <FaCalendarAlt className="db-cal-icon" /> {row.fin}
                    </span>
                  </td>
                  <td>
                    <span className={`db-badge ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="db-dots"
                      type="button"
                      aria-label="Actions"
                    >
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
