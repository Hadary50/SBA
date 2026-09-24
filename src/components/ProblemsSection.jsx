import './ProblemsSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { AlertTriangle, UserX, TrendingDown, Wifi, Megaphone, Building2 } from 'lucide-react'

const problems = [
  {
    icon: Building2,
    title: 'Operational Inefficiencies',
    desc: 'Processes without structure, unclear responsibilities, inconsistent service delivery, and lack of operational controls leading to poor performance.',
  },
  {
    icon: AlertTriangle,
    title: 'Tenant Complaints & Relationships',
    desc: 'Unresolved complaints, poor communication channels, missing handover procedures, and the absence of structured ticketing and SLA systems.',
  },
  {
    icon: UserX,
    title: 'HR & Manpower Challenges',
    desc: 'Overstaffing or understaffing, unclear job descriptions, absence of KPIs, poor onboarding, and lack of structured performance management.',
  },
  {
    icon: TrendingDown,
    title: 'Limited Revenue & Growth',
    desc: 'Untapped commercial opportunities, unused spaces, underdeveloped partnerships, and missing business development frameworks.',
  },
  {
    icon: Wifi,
    title: 'Lack of Digital Systems',
    desc: 'Manual workflows, fragmented data, no dashboards, and the absence of digital tools for operations, reporting, and tenant management.',
  },
  {
    icon: Megaphone,
    title: 'Ineffective Marketing & CX',
    desc: 'Marketing disconnected from business goals, unmeasured campaigns, poor customer experience mapping, and lack of engagement strategies.',
  },
]

export default function ProblemsSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section--light problems" id="problems" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="section-eyebrow section-eyebrow--center">What We Solve</div>
          <h2 className="section-title">Problems We Solve</h2>
          <p className="section-subtitle section-subtitle--center">
            Every organization faces operational friction. We diagnose, design, and implement
            the systems to solve these challenges at their root.
          </p>
        </div>

        <div className={`problems__grid ${visible ? 'problems--visible' : ''}`} ref={ref}>
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="problems__card"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="problems__icon">
                <Icon size={22} />
              </div>
              <h3 className="problems__title">{title}</h3>
              <p className="problems__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
