import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [infoMessage, setInfoMessage] = useState("");
  const [activeRegion, setActiveRegion] = useState("asia");
  
  // Dynamic Simulated States
  const [workloadType, setWorkloadType] = useState("AI Automation");
  const [cloudScale, setCloudScale] = useState(50);
  const [serverEfficiency, setServerEfficiency] = useState(82);

  // 👇 ADD THESE
  const [representativeName, setRepresentativeName] = useState("");
  const [corporateEmail, setCorporateEmail] = useState("");
  const [operationalParameters, setOperationalParameters] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const regionData = {
    asia: { name: "Global Engineering HQ (Bengaluru Core)", staff: "140,000+", centers: 12, details: "Advanced Cognitive Systems Hub & Global Technical Command Operations Center." },
    americas: { name: "Americas Strategic Innovation Centers", staff: "45,000+", centers: 8, details: "Enterprise Multi-Cloud Architecture and Generative AI business systems incubation network." },
    europe: { name: "Europe & UK Compliance Hubs", staff: "35,000+", centers: 6, details: "Sovereign data governance, fintech security compliance frameworks, and sustainable computing research nodes." }
  };

  return (
    <div className="app-wrapper navy-theme">
      {infoMessage && (
        <div className="info-banner">
          <p>{infoMessage}</p>
        </div>
      )}

      {/* Global Navbar */}
      <header className="navbar">
        <div className="logo" onClick={() => setCurrentPage("home")} style={{ cursor: "pointer" }}>
          <h2>FutureSoft<span>.</span></h2>
          <p className="tagline">Technology Transformed</p>
        </div>

        <nav className="nav-menu">
          <button onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>Home</button>
          <button onClick={() => setCurrentPage("services")} className={currentPage === "services" ? "active" : ""}>Capabilities</button>
          <button onClick={() => setCurrentPage("sandbox")} className={currentPage === "sandbox" ? "active" : ""}>Innovation Core</button>
          <button onClick={() => setCurrentPage("locations")} className={currentPage === "locations" ? "active" : ""}>Global Infrastructure</button>
          <button onClick={() => setCurrentPage("contact")} className={currentPage === "contact" ? "active" : ""}>RFP Intake</button>
          <button className="cta-button" onClick={() => {
            setInfoMessage("🎯 Corporate Gateway Activated. Initiating structural technical alignment pipelines.");
            setTimeout(() => setInfoMessage(""), 4000);
          }}>Get Started</button>
        </nav>
      </header>

      {/* Real-Time Security Intelligence Ticker */}
      <div className="threat-ticker">
        <div className="ticker-wrap">
          <span className="ticker-title">⚠️ LIVE THREAT INTEL:</span>
          <span className="ticker-item">AWS-EAST Cluster: DDoS Mitigation [100% Secure Node Isolation]</span>
          <span className="ticker-item">APAC Infrastructure: Cryptographic Hash Integrity Verified</span>
          <span className="ticker-item">EMEA Core Data Network: Zero-Trust Verification Sync Finalized</span>
        </div>
      </div>

      <main className="main-content">
        {currentPage === "home" && (
          <>
            <section className="hero-section">
              <div className="hero-overlay"></div>
              <div className="container hero-container">
                <div className="hero-text-block">
                  <div className="badge">Next-Generation Systems Integration</div>
                  <h1>Engineering Tomorrow's Autonomous Digital Systems</h1>
                  <p>Deploy elastic cloud computing infrastructure, high-velocity cognitive pipelines, and end-to-end cryptographic security frameworks optimized for maximum corporate efficiency.</p>
                  <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => setCurrentPage("services")}>Explore Solutions</button>
                    <button className="btn-secondary" onClick={() => setCurrentPage("sandbox")}>Launch AI Sandbox</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="stats-strip">
              <div className="container stats-grid">
                <div className="stat-card">
                  <h3>$11.3B</h3>
                  <p>Global Revenue Asset base</p>
                </div>
                <div className="stat-card">
                  <h3>65+</h3>
                  <p>Countries Present</p>
                </div>
                <div className="stat-card">
                  <h3>240K+</h3>
                  <p>Systems Innovators Worldwide</p>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === "services" && (
          <section className="page-section fade-in">
            <div className="container">
              <div className="section-header">
                <h2>Enterprise Capabilities</h2>
                <p className="section-subtitle">Scalable infrastructure models integrated with modern corporate systems management frameworks.</p>
              </div>

              <div className="cards">
                {/* Capability Card 1 */}
                <div className="card service-card">
                  <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=500&q=80" alt="Cloud Engineering" className="service-img" />
                  <div className="card-body">
                    <h3>Full-Stack Cloud Core</h3>
                    <p>Agile cloud transitions driven by hyper-automated elastic container patterns designed for sustained data volume throughput.</p>
                  </div>
                </div>

                {/* Capability Card 2 */}
                <div className="card service-card">
                  <img src="https://images.pexels.com/photos/4432037/pexels-photo-4432037.jpeg" alt="Cognitive Intelligence" className="service-img" />
                  <div className="card-body">
                    <h3>Cognitive AI Engines</h3>
                    <p>Orchestrate scalable private Language Models and contextual database vector indexes mapped to secure enterprise data policies.</p>
                  </div>
                </div>

                {/* Capability Card 3 */}
                <div className="card service-card">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" alt="Cyber Security Operations" className="service-img" />
                  <div className="card-body">
                    <h3>Zero-Trust Cyber Operations</h3>
                    <p>Continuous validation architectures monitoring secure endpoints and deploying immediate isolation rules against emerging network vectors.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === "sandbox" && (
          <section className="page-section fade-in">
            <div className="container">
              <div className="section-header">
                <h2>Interactive Innovation Core</h2>
                <p className="section-subtitle">Simulate computational runtimes and environmental carbon offset ratios in real-time.</p>
              </div>

              <div className="sandbox-grid">
                {/* Control Panel Widget */}
                <div className="sandbox-module">
                  <h3>Compute Infrastructure Simulator</h3>
                  <div className="input-group">
                    <label>Target Architecture Paradigm:</label>
                    <select value={workloadType} onChange={(e) => setWorkloadType(e.target.value)}>
                      <option value="AI Automation">Generative AI Infrastructure</option>
                      <option value="Cloud Migration">Hyperscale Cloud Compute</option>
                      <option value="Edge Systems">Distributed Edge Data Matrix</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Simulated Operations Scale: {cloudScale}%</label>
                    <input type="range" min="10" max="100" value={cloudScale} onChange={(e) => setCloudScale(Number(e.target.value))} />
                  </div>

                  <div className="metric-box">
                    <h4>Estimated ROI Multiplier</h4>
                    <span className="metric-value">{(cloudScale * 2.4).toFixed(1)}%</span>
                  </div>
                </div>

                {/* ESG Sustainability Index */}
                <div className="sandbox-module esg-module">
                  <h3>Green-Ops Carbon Offset Index</h3>
                  <p className="esg-tagline">Align technical compute configurations directly with corporate Net-Zero commitments.</p>
                  
                  <div className="input-group">
                    <label>Server Rack Energy Efficiency: {serverEfficiency}%</label>
                    <input type="range" min="50" max="100" value={serverEfficiency} onChange={(e) => setServerEfficiency(Number(e.target.value))} />
                  </div>

                  <div className="esg-readout">
                    <div className="esg-stat">
                      <span className="label">Carbon Tonnage Avoided</span>
                      <span className="metric-value green">{(serverEfficiency * 4.2).toFixed(0)} Tons</span>
                    </div>
                    <div className="esg-stat">
                      <span className="label">PUE Coefficient</span>
                      <span className="metric-value green">{(2.0 - (serverEfficiency / 100)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === "locations" && (
          <section className="page-section fade-in">
            <div className="container">
              <div className="section-header">
                <h2>Global Infrastructure Map</h2>
                <p className="section-subtitle">Explore operational delivery logistics and multi-region nodes across oceans.</p>
              </div>

              <div className="map-interface-grid">
                <div className="interactive-map-canvas">
                  <svg viewBox="0 0 1000 450" className="world-svg-graph">
                    <path d="M150,150 Q250,100 350,180 T650,120 T850,220" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
                    <path d="M100,280 Q300,320 500,240 T900,350" stroke="rgba(255,255,255,0.04)" strokeWidth="3" fill="none" />
                    
                    <circle cx="280" cy="160" r={activeRegion === "americas" ? 14 : 8} className="map-node node-us" onClick={() => setActiveRegion("americas")} />
                    <circle cx="510" cy="140" r={activeRegion === "europe" ? 14 : 8} className="map-node node-eu" onClick={() => setActiveRegion("europe")} />
                    <circle cx="720" cy="240" r={activeRegion === "asia" ? 14 : 8} className="map-node node-asia" onClick={() => setActiveRegion("asia")} />
                    
                    <text x="250" y="130" fill="#fff" className="map-label">Americas Hub</text>
                    <text x="490" y="110" fill="#fff" className="map-label">Europe Hub</text>
                    <text x="700" y="210" fill="#fff" className="map-label">Asia HQ Node</text>
                  </svg>
                </div>

                <div className="map-data-readout">
                  <div className="tab-triggers">
                    <button className={activeRegion === "asia" ? "tab-active" : ""} onClick={() => setActiveRegion("asia")}>Asia Pacific</button>
                    <button className={activeRegion === "americas" ? "tab-active" : ""} onClick={() => setActiveRegion("americas")}>Americas Hub</button>
                    <button className={activeRegion === "europe" ? "tab-active" : ""} onClick={() => setActiveRegion("europe")}>Europe & UK</button>
                  </div>
                  
                  <div className="readout-card">
                    <h3>{regionData[activeRegion].name}</h3>
                    <div className="readout-stat-row">
                      <div>
                        <span className="label">Staff Deployment</span>
                        <p className="val">{regionData[activeRegion].staff}</p>
                      </div>
                      <div>
                        <span className="label">Invention Matrix Nodes</span>
                        <p className="val">{regionData[activeRegion].centers}</p>
                      </div>
                    </div>
                    <p className="readout-details">{regionData[activeRegion].details}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === "contact" && (
          <section className="page-section fade-in">
            <div className="container">
              <div className="section-header">
                <h2>Initialize RFP Pipeline</h2>
                <p className="section-subtitle">Connect immediately with corporate systems engineering divisions.</p>
              </div>

              <div className="contact-content">
                <div className="contact-info">
                  <div className="contact-item-card">
                    <h4>Corporate Headquarters</h4>
                    <p>FutureSoft Limited, Doddakannelli,</p>
                    <p>Sarjapur Road, Bangalore - 560035</p>
                  </div>
                  <div className="contact-item-card">
                    <h4>Direct Intercom</h4>
                    <p>📧 enterprise.intake@futuresoft.com</p>
                    <p>📞 +9025134221</p>
                  </div>
                </div>

                <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/rfp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          representativeName,
          corporateEmail,
          operationalParameters,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setInfoMessage("✅ " + data.message);

        setRepresentativeName("");
        setCorporateEmail("");
        setOperationalParameters("");

        setTimeout(() => {
          setInfoMessage("");
        }, 4000);
      } else {
        setInfoMessage("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      setInfoMessage("❌ Unable to connect to server.");
    }
  }}
>
  <input
    type="text"
    placeholder="Representative Name"
    value={representativeName}
    onChange={(e) => setRepresentativeName(e.target.value)}
    required
  />
  <input
    type="email"
    placeholder="Business Corporate Email"
    value={corporateEmail}
    onChange={(e) => setCorporateEmail(e.target.value)}
    required
  />
  <textarea
    rows="4"
    placeholder="Specify operational parameters or multi-region system targets..."
    value={operationalParameters}
    onChange={(e) => setOperationalParameters(e.target.value)}
    required
  />

  <button type="submit" className="btn-primary">
    Submit Architecture Brief
  </button>
</form>     
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FutureSoft Corporate Operations. All rights reserved. Encrypted Navy Dashboard.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;