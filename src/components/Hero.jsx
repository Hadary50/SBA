import './Hero.css'
import {
  ArrowRight, ChevronRight, BarChart2, Users, Globe, TrendingUp, Layers, FileText
} from 'lucide-react'

const dashboardItems = [
  { icon: BarChart2, label: 'Operations', color: '#1E6EDB' },
  { icon: Users, label: 'People', color: '#0D47A1' },
  { icon: TrendingUp, label: 'Commercial', color: '#1E6EDB' },
  { icon: Globe, label: 'Digital', color: '#0D47A1' },
  { icon: Layers, label: 'Tenant Relations', color: '#1E6EDB' },
  { icon: FileText, label: 'Reporting', color: '#0D47A1' },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        {/* Left */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Business, Operations &amp; Management Consultancy
          </div>
          <h1 className="hero__headline">
            From <span className="hero__headline-accent">Recommendations</span>
            {' '}to Operating Systems
          </h1>
          <p className="hero__desc">
            We turn operational challenges into practical, measurable systems that improve
            performance, control, customer experience, people, and commercial growth.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary btn--lg"
              onClick={() => scrollTo('#contact')}
            >
              Let's Talk <ArrowRight size={18} />
            </button>
            <button
              className="btn btn--outline-light btn--lg"
              onClick={() => scrollTo('#services')}
            >
              Explore Our Services <ChevronRight size={18} />
            </button>
          </div>

          {/* Pillars quick row */}
          <div className="hero__pillars">
            {['Operations', 'Tenant Relations', 'HR & People', 'Commercial Growth', 'Digital Transformation'].map(p => (
              <span key={p} className="hero__pillar-tag">{p}</span>
            ))}
          </div>
        </div>

        {/* Right: Dashboard visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__dashboard">
            <div className="hero__dash-header">
              <div className="hero__dash-dots">
                <span /><span /><span />
              </div>
              <span className="hero__dash-title">SBA Operations Framework</span>
            </div>

            <div className="hero__dash-grid">
              {dashboardItems.map(({ icon: Icon, label, color }) => (
                <div key={label} className="hero__dash-card">
                  <div className="hero__dash-icon" style={{ background: `${color}18`, color }}>
                    <Icon size={20} />
                  </div>
                  <span className="hero__dash-label">{label}</span>
                  <div className="hero__dash-bar">
                    <div className="hero__dash-bar-fill" style={{ background: color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Process strip */}
            <div className="hero__dash-flow">
              {['Assess', 'Analyze', 'Plan', 'Implement', 'Monitor'].map((step, i, arr) => (
                <div key={step} className="hero__flow-item">
                  <div className="hero__flow-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="hero__flow-label">{step}</div>
                  {i < arr.length - 1 && <div className="hero__flow-arrow">→</div>}
                </div>
              ))}
            </div>

            {/* Status row */}
            <div className="hero__dash-status">
              <div className="hero__status-item">
                <span className="hero__status-dot hero__status-dot--green" />
                <span>Systems Active</span>
              </div>
              <div className="hero__status-item">
                <span className="hero__status-dot hero__status-dot--blue" />
                <span>KPIs Tracked</span>
              </div>
              <div className="hero__status-item">
                <span className="hero__status-dot hero__status-dot--amber" />
                <span>Reporting Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
