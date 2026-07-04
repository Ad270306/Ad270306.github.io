export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      
      {/* BARRE DE NAVIGATION STICKY BLUR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-semibold tracking-tight text-slate-900">Alpha Oumar Diallo</span>
          <nav className="flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#profil" className="hover:text-indigo-600 transition-colors">Profil</a>
            <a href="#competences" className="hover:text-indigo-600 transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-indigo-600 transition-colors">Projets</a>
            <a href="#parcours" className="hover:text-indigo-600 transition-colors">Parcours</a>
          </nav>
        </div>
      </header>

      {/* SECTION INTRODUCTIVE (HERO) */}
      <section id="profil" className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge de statut */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Recherche d'alternance — Développeur Full-Stack, Data, BI & IA
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            Apprenti Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">IA & Logiciel</span>.
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
           Étudiant en Bac+3 à l'EPSI, je suis passionné par le développement informatique, la Data et l'Intelligence Artificielle. J'acquiers des compétences en développement Full Stack, gestion et analyse de données, Business Intelligence et conception de solutions logicielles. À travers mes projets, je cherche à concevoir des applications et des outils fiables, performants et adaptés aux besoins des utilisateurs.

          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projets" className="h-11 inline-flex items-center justify-center px-6 font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors text-sm">
              Explorer les projets
            </a>
            <a href="https://github.com/Ad270306" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center justify-center px-6 font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors text-sm">
              Code source GitHub
            </a>
            <a href="https://www.linkedin.com/in/alpha-oumar-diallo-" target="_blank" rel="noopener noreferrer" className="h-11 inline-flex items-center justify-center px-6 font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES CLASSÉES */}
      <section id="competences" className="border-t border-slate-200/60 bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Expertise Technique</h2>
            <p className="text-sm text-slate-500 mt-1">Technologies maîtrisées et environnements d'ingénierie applicative.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Langages</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Python</li>
                <li>TypeScript / JavaScript</li>
                <li>Java</li>
                <li>C#</li>
                <li>SQL (PostgreSQL, SQL Server)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Frameworks & API</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Next.js / React</li>
                <li>Spring Boot</li>
                <li>WPF</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Data & Intelligence Artificielle</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Power BI</li>
                <li>Supabase / Stockage relationnel</li>
                <li>Jupyter / Google Colab</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">DevOps & Infrastructure</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Docker / Docker Compose</li>
                <li>Git / CI-CD GitHub Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION GRILLE DE PROJETS ÉPURÉE */}
      <section id="projets" className="border-t border-slate-200/60 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Projets Sélectionnés</h2>
            <p className="text-sm text-slate-500 mt-1">Dépôts, architectures et livrables techniques récents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SmartGamble */}
            <a href="https://github.com/joakim707/smartgamble" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-slate-200/80 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-md transition-all duration-300">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50/70 px-2 py-0.5 rounded">Stage EPSI — En cours</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">SmartGamble</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Plateforme d'analyse et outil d'aide à la décision dédié aux prédictions des cinq grands championnats de football en Europe. Conception de flux d'importation de données et d'une interface utilisateur dynamique et facile à utiliser.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>Next.js</span>•<span>TypeScript</span>•<span>Python</span>•<span>Supabase</span>
              </div>
            </a>

            {/* Dashaalia */}
            <a href="https://github.com/ad270306/dashaalia" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-slate-200/80 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-md transition-all duration-300">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Ingénierie de données</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">Dashaalia</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Application conteneurisée de traitement de données massives. Développement d'un pipeline automatisé d'ingestion de fichiers structurés (CSV) vers un système relationnel SQL encapsulé.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>Python</span>•<span>Docker</span>•<span>Docker Compose</span>•<span>SQL</span>
              </div>
            </a>

            {/* Rest-Service */}
            <a href="https://github.com/ad270306/rest-service" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-slate-200/80 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-md transition-all duration-300">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Architecture Backend</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">Rest-Service API</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Conception d'un service web backend d'architecture REST conforme aux standards industriels. Implémentation de tests unitaires rigoureux et automatisation du cycle via une intégration continue.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>Java</span>•<span>Spring Boot</span>•<span>Maven</span>•<span>GitHub Actions</span>
              </div>
            </a>

            {/* L'atelier d'Archimède */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-xl relative">
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Lauréat — 1ère Place Techday</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Code source indisponible (ancien dépôt école)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-3">L'atelier d'Archimède</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Logiciel de modélisation 3D destiné à l'architecture d'intérieur et au prototypage de décors de jeux vidéo. Projet récompensé pour sa fluidité algorithmique à l'ESIEA.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>C#</span>•<span>React</span>•<span>Visual Studio</span>
              </div>
            </div>

            {/* Bricks */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-xl relative">
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Lauréat — 1ère Place Techday</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Code source indisponible (ancien dépôt école)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-3">Bricks</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Application ludo-éducative permettant aux jeunes profils d'appréhender la logique algorithmique et la création de scénarios de jeux sans barrière de syntaxe de code.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>C#</span>•<span>Python</span>•<span>Logiciels ESIEA</span>
              </div>
            </div>

            {/* ObRail Europe */}
            <a href="https://github.com/Ad270306/obrail-europe" target="_blank" rel="noopener noreferrer" className="group block bg-white border border-slate-200/80 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-md transition-all duration-300">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Projet académique — EPSI (groupe de 3)</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">ObRail Europe</h3>
              <p className="text-sm text-slate-600 mt-2 mb-4 leading-relaxed">
                Plateforme data & IA pour un observatoire ferroviaire européen fictif, réalisée en trois volets : pipeline ETL harmonisant 3 sources GTFS (SNCF, Deutsche Bahn, SNCB) vers une base PostgreSQL, industrialisation complète avec API REST, frontend, conteneurisation Docker, pipeline CI/CD et supervision Grafana/Prometheus, puis modèles de machine learning (Random Forest, régression logistique) prédisant les émissions de CO2 (random forest) et détectant les gares sous-desservies (régression logistique).
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                <span>Python</span>•<span>FastAPI</span>•<span>PostgreSQL</span>•<span>scikit-learn</span>•<span>Docker</span>•<span>React/Next.js</span>•<span>Airflow</span>•<span>Grafana</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* SECTION TIMELINE / PARCOURS ACADÉMIQUE */}
      <section id="parcours" className="border-t border-slate-200/60 bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Parcours Académique</h2>
            <p className="text-sm text-slate-500 mt-1">Cursus d'ingénierie et de spécialisation en informatique.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:right-auto before:left-3.5 before:w-px before:bg-slate-200">
            
            {/* EPSI */}
            <div className="relative pl-10 group">
              <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-indigo-600 border-4 border-white ring-1 ring-indigo-600"></div>
              <span className="text-xs font-semibold text-slate-400">2025 — Présent</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Bachelor en Développement IA</h3>
              <p className="text-sm text-slate-500 font-medium">EPSI, Courbevoie, France</p>
            </div>

            {/* ESIEA */}
            <div className="relative pl-10 group">
              <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-4 border-white ring-1 ring-slate-300 group-hover:bg-indigo-600 group-hover:ring-indigo-600 transition-colors"></div>
              <span className="text-xs font-semibold text-slate-400">2024 — 2025</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Bachelor en Ingénierie Logicielle</h3>
              <p className="text-sm text-slate-500 font-medium">ESIEA, Ivry-Sur-Seine, France</p>
            </div>

            {/* IIT */}
            <div className="relative pl-10 group">
              <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-4 border-white ring-1 ring-slate-300 group-hover:bg-indigo-600 group-hover:ring-indigo-600 transition-colors"></div>
              <span className="text-xs font-semibold text-slate-400">2021 — 2024</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Licence en Sciences Informatiques</h3>
              <p className="text-sm text-slate-500 font-medium">Institut Ivoirien de Technologie, Côte d'Ivoire</p>
            </div>

          </div>
        </div>
      </section>

      {/* PIED DE PAGE */}
      <footer className="border-t border-slate-200/60 py-10 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Alpha Oumar Diallo. Conçu avec Next.js et Tailwind CSS.</p>
        </div>
      </footer>

    </main>
  );
}