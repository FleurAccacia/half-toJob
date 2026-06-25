import { useState } from "react";
import "../styles/Dashboard.css";
import "../styles/NewMission.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const SUGGESTIONS = [
  "Plonge",
  "Livraison",
  "Prospection",
  "Restauration",
  "Commerce",
];

function formatDate(dateStr) {
  if (!dateStr) return "–";
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function bulletList(text) {
  const lines = text.split("\n").filter((l) => l.trim());
  if (!lines.length) return <p className="nm-recap-empty">–</p>;
  return (
    <ul className="nm-recap-list">
      {lines.map((line, i) => (
        <li key={i}>{line.trim()}</li>
      ))}
    </ul>
  );
}

function NewMissionPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    titre: "",
    categorie: "",
    dateDebut: "",
    // étape 2
    description: "",
    taches: "",
    profil: "",
    dateFin: "",
    montant: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addSuggestion(tag) {
    setForm((prev) => ({
      ...prev,
      categorie: prev.categorie ? `${prev.categorie}, ${tag}` : tag,
    }));
  }

  function handleContinue() {
    if (step < 3) setStep((s) => s + 1);
    else navigate("/missions");
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
    else navigate("/missions");
  }

  return (
    <div className="db-root">
      {/* ─── Sidebar ─── */}
      <DashboardSidebar activePage="missions" />

      {/* ─── Zone principale ─── */}
      <main className="db-main nm-main">
        {/* Barre du haut */}
        <div className="db-topbar nm-topbar">
          <h1 className="db-page-title">Missions</h1>
        </div>

        {/* Carte formulaire */}
        <div className="nm-form-card">
          {/* Barre de progression */}
          <div className="nm-progress" aria-label={`Étape ${step} sur 3`}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`nm-step-bar${i + 1 <= step ? " active" : ""}`}
              />
            ))}
          </div>

          {/* Intro */}
          <p className="nm-intro">
            Remplissez les champs importants suivants, certains dépôts sont
            obligatoires
            <br />
            Vous pouvez également vérifier l&apos;aperçu de l&apos;offre
            d&apos;emploi en un seul clic
          </p>

          <hr className="nm-divider" />

          {/* ══ ÉTAPE 1 ══ */}
          {step === 1 && (
            <>
              {/* Titre */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="titre">
                    Titre de l&apos;offre <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Le titre du poste doit indiquer le nom correct du poste et
                    la désignation, par exemple développeur Android junior.
                  </p>
                </div>
                <div className="nm-field-control">
                  <input
                    id="titre"
                    name="titre"
                    className="nm-input"
                    type="text"
                    placeholder="Entrer le titre de l'offre ici"
                    value={form.titre}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Catégorie */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="categorie">
                    Categorie de l&apos;offre{" "}
                    <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Le titre du poste doit indiquer le nom correct du poste et
                    la désignation, par exemple développeur Android junior.
                  </p>
                </div>
                <div className="nm-field-control">
                  <input
                    id="categorie"
                    name="categorie"
                    className="nm-input"
                    type="text"
                    placeholder="choisir la categorie"
                    value={form.categorie}
                    onChange={handleChange}
                  />
                  <div className="nm-suggestions">
                    <span className="nm-suggestions-label">Suggestions</span>
                    <div className="nm-chips">
                      {SUGGESTIONS.map((tag, i) => (
                        <button
                          key={i}
                          type="button"
                          className="nm-chip"
                          onClick={() => addSuggestion(tag)}
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Date de début */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="dateDebut">
                    Date de debut <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Le titre du poste doit indiquer le nom correct du poste et
                    la désignation, par exemple développeur Android junior.
                  </p>
                </div>
                <div className="nm-field-control">
                  <div className="nm-date-wrap">
                    <input
                      id="dateDebut"
                      name="dateDebut"
                      className="nm-input"
                      type="date"
                      placeholder="Choisir la date"
                      value={form.dateDebut}
                      onChange={handleChange}
                    />
                    <FaCalendarAlt
                      className="nm-date-icon"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ══ ÉTAPE 2 ══ */}
          {step === 2 && (
            <>
              {/* Description */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="description">
                    Détails de l&apos;annonce{" "}
                    <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Décrivez le poste, les objectifs et le contexte de la
                    mission.
                  </p>
                </div>
                <div className="nm-field-control">
                  <textarea
                    id="description"
                    name="description"
                    className="nm-input nm-textarea"
                    placeholder="Ex : Dans le cadre de notre expansion, nous recherchons…"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Tâches principales */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="taches">
                    Taches principales <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Une tâche par ligne. Chaque ligne deviendra un point de la
                    liste.
                  </p>
                </div>
                <div className="nm-field-control">
                  <textarea
                    id="taches"
                    name="taches"
                    className="nm-input nm-textarea"
                    placeholder={
                      "Prospection et développement commercial\nNégociation et vente\nSuivi des clients"
                    }
                    value={form.taches}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Profil recherché */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="profil">
                    Profil recherché <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Une compétence ou qualité par ligne.
                  </p>
                </div>
                <div className="nm-field-control">
                  <textarea
                    id="profil"
                    name="profil"
                    className="nm-input nm-textarea"
                    placeholder={
                      "Capacités relationnelles\nAutonomie\nRigueur et organisation"
                    }
                    value={form.profil}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Date de fin */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="dateFin">
                    Date de fin <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Date à laquelle la mission doit être terminée.
                  </p>
                </div>
                <div className="nm-field-control">
                  <div className="nm-date-wrap">
                    <input
                      id="dateFin"
                      name="dateFin"
                      className="nm-input"
                      type="date"
                      value={form.dateFin}
                      onChange={handleChange}
                    />
                    <FaCalendarAlt
                      className="nm-date-icon"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <hr className="nm-divider" />

              {/* Montant */}
              <div className="nm-field-row">
                <div className="nm-field-meta">
                  <label className="nm-label" htmlFor="montant">
                    Montant de l&apos;offre (FCFA / jour){" "}
                    <span className="nm-required">*</span>
                  </label>
                  <p className="nm-hint">
                    Indiquez la rémunération journalière proposée pour cette
                    mission.
                  </p>
                </div>
                <div className="nm-field-control">
                  <input
                    id="montant"
                    name="montant"
                    className="nm-input"
                    type="number"
                    min="0"
                    placeholder="Ex : 5000"
                    value={form.montant}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          )}

          {/* ══ ÉTAPE 3 — RÉCAPITULATIF ══ */}
          {step === 3 && (
            <div className="nm-recap">
              <h2 className="nm-recap-title">Recaptutilatif</h2>

              <div className="nm-recap-body">
                {/* ── Colonne gauche ── */}
                <div className="nm-recap-left">
                  {/* En-tête offre */}
                  <div className="nm-recap-offer-head">
                    <span className="nm-recap-avatar">
                      {form.titre ? form.titre[0].toUpperCase() : "O"}
                    </span>
                    <div>
                      <p className="nm-recap-offer-title">
                        {form.titre || "Titre non renseigné"}
                      </p>
                      <p className="nm-recap-offer-meta">
                        Lomé &bull; {form.categorie || "–"}
                      </p>
                    </div>
                  </div>

                  {/* Entreprise */}
                  <p className="nm-recap-company">Olivier Arafat</p>
                  <p className="nm-recap-company-desc">Patisserie</p>

                  <hr className="nm-divider" />

                  {/* Détails */}
                  <p className="nm-recap-section-title">
                    Détails de l&apos;annonce
                  </p>
                  <p className="nm-recap-text">{form.description || "–"}</p>

                  <p className="nm-recap-section-title">Taches principales</p>
                  {bulletList(form.taches)}

                  <p className="nm-recap-section-title">Profil recherché</p>
                  {bulletList(form.profil)}
                </div>

                {/* ── Colonne droite ── */}
                <div className="nm-recap-right">
                  <p className="nm-recap-info">
                    <strong>Montant de l&apos;offre :</strong>{" "}
                    {form.montant ? `${form.montant} FCFA par jours` : "–"}
                  </p>
                  <p className="nm-recap-info">
                    <strong>Date de debut :</strong>{" "}
                    {formatDate(form.dateDebut)}
                  </p>
                  <p className="nm-recap-info">
                    <strong>Date de fin :</strong> {formatDate(form.dateFin)}
                  </p>

                  <p
                    className="nm-recap-section-title"
                    style={{ marginTop: "24px" }}
                  >
                    Localisation
                  </p>
                  <div className="nm-recap-map">
                    <iframe
                      title="Localisation"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=1.14%2C6.10%2C1.22%2C6.18&amp;layer=mapnik"
                      style={{ border: "none", width: "100%", height: "100%" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── Pied de formulaire ─── */}
        <div className="nm-footer">
          <button className="nm-footer-profile" type="button">
            Modifier le profil de l&apos;entreprise
          </button>
          <div className="nm-footer-actions">
            <button
              className="nm-btn-cancel"
              type="button"
              onClick={handleBack}
            >
              {step === 3 ? "Revenir" : "Annuler"}
            </button>
            <button
              className="nm-btn-continue"
              type="button"
              onClick={handleContinue}
            >
              {step === 3 ? "Poster" : "Continuer"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewMissionPage;
