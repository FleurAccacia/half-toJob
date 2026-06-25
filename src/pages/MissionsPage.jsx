import "../styles/Dashboard.css";
import "../styles/Missions.css";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaEllipsisH,
  FaPlus,
  FaSearch,
  FaTrashAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

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
    id: "#876364",
    poste: "Commerciale",
    tache: "Prospections, repondre aux appels...",
    debut: "08 Sept, 2024",
    fin: "12 Sept, 2024",
    status: "Terminé",
    statusClass: "done",
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
];

function MissionsPage() {
  const navigate = useNavigate();
  return (
    <div className="db-root">
      {/* ─── Sidebar ─── */}
      <DashboardSidebar activePage="missions" />

      {/* ─── Zone principale ─── */}
      <main className="db-main">
        {/* Barre du haut */}
        <div className="db-topbar">
          <h1 className="db-page-title">Missions</h1>
          <div className="db-missions-actions">
            <div className="db-search-box">
              <input
                type="text"
                placeholder="chercher"
                aria-label="Rechercher une mission"
              />
              <FaSearch className="db-search-icon" />
            </div>
            <button
              className="db-new-btn"
              type="button"
              onClick={() => navigate("/missions/nouveau")}
            >
              <FaPlus /> Nouveau
            </button>
          </div>
        </div>

        {/* Tableau complet des missions */}
        <div className="db-table-section">
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

export default MissionsPage;
