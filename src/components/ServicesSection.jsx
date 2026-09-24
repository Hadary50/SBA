import './ServicesSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Cog, TrendingUp, Users, Zap } from 'lucide-react'

const pillars = [
  {
    id: 'operations',
    icon: Cog,
    num: '01',
    title: 'Operations Excellence',
    tagline: 'Build the backbone of operational performance.',
    color: '#0D47A1',
    items: [
      'Operational Assessment & Gap Analysis',
      'Responsibility Matrix & Role Clarity',
      'Daily Operations Management',
      'Issue Management & Escalation',
      'Operational Controls & Quick Wins',
      'Operational Manuals & Facility Guides',
      'SOPs, Policies & Checklists',
      'Forms, Templates & Reporting',
    ],
  },
  {
    id: 'commercial',
    icon: TrendingUp,
    num: '02',
    title: 'Commercial Growth',
    tagline: 'Turn unused opportunities into structured initiatives.',
    color: '#1E6EDB',
    items: [
      'Business Development Planning',
      'Leasing Strategy & Pipeline',
      'Commercial Opportunities Mapping',
      'Revenue Opportunities & Income Sources',
      'Utilization of Unused Spaces',
      'Commercial Partnerships',
      'Pop-Up Activities & Advertising',
      'Events, Activations & Service Development',
    ],
  },
  {
    id: 'people',
    icon: Users,
    num: '03',
    title: 'People & Organization',
    tagline: 'People, structure, and workforce efficiency.',
    color: '#0D47A1',
    items: [
      'Manpower Assessment & Workforce Planning',
      'Organizational Structure Design',
      'Job Descriptions & Profiles',
      'Recruitment Planning & Screening',
      'Interview, Selection & Onboarding',
      'Performance Evaluation & KPIs',
      'Attendance, Leave & Employee Relations',
      'Workforce Cost & Reports',
    ],
  },
  {
    id: 'digital',
    icon: Zap,
    num: '04',
    title: 'Digital Transformation',
    tagline: 'Operations powered by technology and data.',
    color: '#1E6EDB',
    items: [
      'Digital Operations & Workflows',
      'ERP Requirements & Documentation',
      'Process Mapping & Digitization',
      'Dashboards & Reporting Systems',
      'Platform Selection Support',
      'System Adoption & Training',
      'Digital Tenant Management',
      'Digital KPI Tracking',
    ],
  },
]

export default function ServicesSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section--navy services" id="services" ref={ref}>
      <div className="container">
        <div className={`section-header section-header--center ${visible ? 'services--visible' : ''}`}>
          <div className="section-eyebrow section-eyebrow--center section-eyebrow--light">
            Main Service Pillars
          </div>
          <h2 className="section-title section-title--light">
            Four Pillars of Transformation
          </h2>
          <p className="section-subtitle section-subtitle--light section-subtitle--center">
            A comprehensive consultancy framework covering every dimension of business performance.
          </p>
        </div>

        <div className={`services__grid ${visible ? 'services--visible' : ''}`}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="services__pillar"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${pillar.id}`)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <div className="services__pillar-head">
                  <div className="services__pillar-icon">
                    <Icon size={24} color={pillar.color} />
                  </div>
                  <span className="services__pillar-num">{pillar.num}</span>
                </div>
                <h3 className="services__pillar-title">{pillar.title}</h3>
                <p className="services__pillar-tagline">{pillar.tagline}</p>
                <ul className="services__pillar-list">
                  {pillar.items.map(item => (
                    <li key={item} className="services__pillar-item">
                      <span className="services__pillar-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="services__pillar-cta">
                  Learn More →
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
