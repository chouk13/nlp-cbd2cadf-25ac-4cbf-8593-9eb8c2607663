import Head from "next/head";

const PROJECT_NAME = "cbd2cadf-25ac-4cbf-8593-";
const PROJECT_TAGLINE = "Transforme tes idées en revenus avec une IA qui bosse pour toi.";
const PROJECT_PITCH = "Une landing page optimisée pour la conversion, pensée pour vendre ton mini-SaaS 24h/24 sur autopilote.";
const IDEA_BRIEF = "Tu es un expert en création de mini-SaaS viraux, ultra rentables, optimisés pour la pub et la scalabilité.\n\nTâche:\n- À partir de la tendance suivante, conçois un mini-SaaS complet.\n\nTendance:\n\"Nom du mini-SaaS : NotionLeadAI\nPromesse principale : Gérez vos leads, factures et contenus en un seul espace Notion boosté à l'IA, sans prise de tête.\nPain point principal : Les freelances perdent du temps à organiser leurs clients, factures et idées de contenu, avec des outils dispersés et sans automatisation.\nFonctionnalités clés :\n- Templates Notion prêts à l'emploi pour la gestion des leads, facture";

const features = [
  {
    title: "Landing ultra focus revenu",
    description:
      "Une structure pensée pour convertir : promesse forte, preuves, plan clair et CTA toujours visibles."
  },
  {
    title: "Storytelling orienté problème",
    description:
      "On parle d'abord douleur client, puis solution. Tu n'as plus qu'à brancher ton produit."
  },
  {
    title: "Sections prêtes pour la pub",
    description:
      "Chaque bloc peut devenir un script TikTok / Reels ou une créa statique pour Meta Ads."
  }
];

const steps = [
  {
    label: "01",
    title: "Capte l'attention",
    text: "Un hook visuel + une promesse directe qui parle à ton marché en 3 secondes."
  },
  {
    label: "02",
    title: "Prouve ta valeur",
    text: "Explique comment ton mini-SaaS retire une douleur concrète, chiffres et exemples à l'appui."
  },
  {
    label: "03",
    title: "Convertis en clients",
    text: "Un appel à l'action clair, sans friction, pour transformer les visiteurs chauds en revenus."
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{PROJECT_NAME} — mini-SaaS IA</title>
        <meta name="description" content={PROJECT_PITCH} />
      </Head>

      <main className="page">
        <div className="grid-shell">
          {/* HERO */}
          <section className="card hero">
            <div className="hero-left">
              <p className="eyebrow">Mini-SaaS IA</p>
              <h1 className="hero-title">{PROJECT_NAME}</h1>
              <p className="hero-tagline">{PROJECT_TAGLINE}</p>
              <p className="hero-pitch">{PROJECT_PITCH}</p>

              <div className="hero-cta-row">
                <a className="btn-primary" href="#cta">
                  🚀 Lancer ma machine à revenus
                </a>
                <p className="hero-note">
                  Aucun code requis. Tu connectes ton produit, la landing fait le reste.
                </p>
              </div>

              <div className="hero-metrics">
                <div className="metric-pill">
                  <span className="metric-label">Pensé pour la pub</span>
                  <span className="metric-value">TikTok • Meta • UGC</span>
                </div>
                <div className="metric-pill">
                  <span className="metric-label">Orienté conversion</span>
                  <span className="metric-value">Sections AIDA</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-panel">
                <div className="hero-panel-header">
                  <span className="dot red" />
                  <span className="dot amber" />
                  <span className="dot green" />
                  <span className="hero-panel-title">Aperçu de ta proposition</span>
                </div>
                <div className="hero-panel-body">
                  <p className="hero-idea-label">Brief d'origine :</p>
                  <pre className="hero-idea">
{IDEA_BRIEF}
                  </pre>
                  <p className="hero-idea-foot">
                    Tu peux adapter ce texte, mais la structure reste orientée vente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="card">
            <header className="section-heading">
              <p className="eyebrow">Ce que tu obtiens</p>
              <h2 className="section-title">
                Une landing page construite pour scaler, pas pour faire joli.
              </h2>
              <p className="section-subtitle">
                Design sombre premium, hiérarchie claire, sections prêtes à être transformées en créas pubs.
              </p>
            </header>

            <div className="feature-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* STEPS */}
          <section className="card">
            <header className="section-heading">
              <p className="eyebrow">Parcours client</p>
              <h2 className="section-title">Du scroll à la vente en trois blocs.</h2>
            </header>

            <ol className="steps-grid">
              {steps.map((step) => (
                <li key={step.label} className="step-card">
                  <span className="step-label">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <section id="cta" className="card cta-card">
            <div className="cta-main">
              <h2>Lance ton mini-SaaS en quelques heures, pas en quelques mois.</h2>
              <p>
                Branche ton produit, ajuste le texte, connecte ton système de paiement préféré.
                Tu es prêt à envoyer du trafic payant ou organique.
              </p>
            </div>
            <div className="cta-side">
              <a className="btn-primary wide" href="#top">
                ✨ Commencer à personnaliser
              </a>
              <p className="cta-note">
                Tip : enregistre des variantes pour tes tests A/B directement dans ton
                outil d&apos;analytics.
              </p>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="page-footer">
            <span>
              Projet <span className="mono">{PROJECT_NAME}</span>
            </span>
            <span className="made-by">
              Généré par <span className="accent">NLP Factory</span>
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}