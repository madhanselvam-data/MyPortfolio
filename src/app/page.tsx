export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Madhan<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">DATA ANALYST • POWER BI • MICROSOFT FABRIC</p>

          <h1>
            Hi, I'm <span>Madhan</span>
          </h1>

          <h2>
            Turning Data Into
            <br />
            <span className="highlight">Meaningful Insights.</span>
          </h2>

          <p className="hero-description">
            I build interactive dashboards, analytical solutions and
            data-driven reports using Power BI, SQL, DAX and Microsoft
            Fabric.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <span className="status-dot"></span>
            Data Analytics
          </div>

          <div className="analytics-card">
            <div className="mini-bar bar-one"></div>
            <div className="mini-bar bar-two"></div>
            <div className="mini-bar bar-three"></div>
            <div className="mini-bar bar-four"></div>
            <div className="mini-bar bar-five"></div>
          </div>

          <div className="card-footer">
            <span>Data</span>
            <span>→</span>
            <span>Insights</span>
            <span>→</span>
            <span>Decisions</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-title">
          <p>01 — ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am an aspiring Data Analyst and Power BI Developer passionate
              about transforming raw business data into clear and actionable
              insights.
            </p>

            <p>
              My focus is on understanding business requirements, preparing
              data, building meaningful data models and creating interactive
              dashboards that help people make better decisions.
            </p>

            <p>
              I am continuously developing my skills across Power BI, SQL,
              DAX, Power Query and Microsoft Fabric.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>Power BI</h3>
              <p>Data Visualization</p>
            </div>

            <div className="stat-card">
              <h3>SQL</h3>
              <p>Data Analysis</p>
            </div>

            <div className="stat-card">
              <h3>DAX</h3>
              <p>Business Analytics</p>
            </div>

            <div className="stat-card">
              <h3>Fabric</h3>
              <p>Modern Data Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-dark">
        <div className="section-title">
          <p>02 — SKILLS</p>
          <h2>Tools & Technologies</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>Business Intelligence</h3>
            <p>
              Power BI, Power BI Service, Dashboards, Reports, KPIs and
              Interactive Visualizations.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Data Analysis</h3>
            <p>
              SQL, DAX, Power Query, Data Cleaning, Data Transformation and
              Business Analysis.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Data Modeling</h3>
            <p>
              Star Schema, Relationships, Measures, Calculated Columns and
              Semantic Models.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Microsoft Fabric</h3>
            <p>
              Lakehouse, OneLake, Data Pipelines, Dataflows, Warehouse and
              Power BI integration.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-title">
          <p>03 — PROJECTS</p>
          <h2>Featured Work</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <span>POWER BI</span>
            </div>

            <div className="project-content">
              <p className="project-category">01 / BUSINESS ANALYTICS</p>

              <h3>Sales & Profitability Analytics</h3>

              <p>
                An interactive Power BI dashboard designed to analyze sales,
                profitability, product performance and regional trends.
              </p>

              <div className="technology-list">
                <span>Power BI</span>
                <span>SQL</span>
                <span>DAX</span>
              </div>

              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image project-image-two">
              <span>DATA ANALYTICS</span>
            </div>

            <div className="project-content">
              <p className="project-category">02 / PRODUCT ANALYTICS</p>

              <h3>GitHub Copilot Usage Analytics</h3>

              <p>
                A data analytics project focused on understanding developer
                activity, Copilot usage, code completions and usage trends.
              </p>

              <div className="technology-list">
                <span>Power BI</span>
                <span>API</span>
                <span>Power Query</span>
              </div>

              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image project-image-three">
              <span>MICROSOFT FABRIC</span>
            </div>

            <div className="project-content">
              <p className="project-category">03 / DATA PLATFORM</p>

              <h3>Fabric Analytics Platform</h3>

              <p>
                An end-to-end analytics solution demonstrating data ingestion,
                transformation, modeling and reporting using Microsoft Fabric.
              </p>

              <div className="technology-list">
                <span>Fabric</span>
                <span>Lakehouse</span>
                <span>Power BI</span>
              </div>

              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section section-dark">
        <div className="section-title">
          <p>04 — CERTIFICATIONS</p>
          <h2>Learning & Certifications</h2>
        </div>

        <div className="certification-list">
          <div className="certification">
            <div className="cert-number">01</div>

            <div>
              <h3>Microsoft Power BI Data Analyst</h3>
              <p>Microsoft Certified</p>
            </div>
          </div>

          <div className="certification">
            <div className="cert-number">02</div>

            <div>
              <h3>Microsoft Fabric</h3>
              <p>Microsoft Certified / Learning Path</p>
            </div>
          </div>

          <div className="certification">
            <div className="cert-number">03</div>

            <div>
              <h3>Azure Data Fundamentals</h3>
              <p>Microsoft Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <p className="eyebrow">05 — CONTACT</p>

          <h2>
            Let's Build Something
            <br />
            <span>Data Driven.</span>
          </h2>

          <p>
            I'm open to opportunities, collaborations and conversations around
            Data Analytics, Power BI and Microsoft Fabric.
          </p>

          <div className="contact-buttons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Madhan. Built with Next.js.</p>
      </footer>
    </main>
  );
}

