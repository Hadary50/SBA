import './EngagementSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FileText, Search, Calendar, Cog, Beaker, Zap } from 'lucide-react'

const models = [
  {
    icon: FileText,
    title: 'Project-Based',
    desc: 'Defined scope with clear deliverables, duration, and expected outcomes. Ideal for specific system builds.',
    tags: ['Fixed Scope', 'Clear Timeline', 'Defined Deliverables'],
  },
  {
    icon: Search,
    title: 'Audit / Assessment',
    desc: 'Specialized operational or functional review producing a detailed findings and recommendations report.',
    tags: ['Diagnostic Report', 'Gap Analysis', 'Specialized Review'],
  },
  {
    icon: Calendar,
    title: 'Monthly Consultancy',
    desc: 'Ongoing advisory support delivered monthly. Keeps your team aligned, informed, and continuously improving.',
    tags: ['Continuous Support', 'Monthly Reviews', 'Ongoing Advisory'],
  },
  {
    icon: Cog,
    title: 'Implementation Support',
    desc: 'Active participation in the implementation of systems, procedures, and frameworks with follow-up monitoring.',
    tags: ['Hands-On Support', 'Follow-Up', 'Implementation'],
  },
  {
    icon: Beaker,
    title: 'Pilot Project',
    desc: 'A limited trial engagement to test the consultancy approach before full-scale commitment and scaling.',
    tags: ['Limited Trial', 'Evaluation', 'Scalable'],
  },
  {
    icon: Zap,
    title: 'Digital Transformation Support',
    desc: 'Focused engagement on ERP requirements, digital workflows, dashboards, and platform implementation.',
    tags: ['ERP', 'Digital Workflows', 'Dashboards', 'Platforms'],
  },
]

export default function EngagementSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section--navy engagement" id="engagement" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="section-eyebrow section-eyebrow--center section-eyebrow--light">
            How We Work
          </div>
          <h2 className="section-title section-title--light">Engagement Models</h2>
          <p className="section-subtitle section-subtitle--light section-subtitle--center">
            Flexible engagement structures tailored to your business need, scale, and readiness.
          </p>
        </div>

        <div className={`engagement__grid ${visible ? 'engagement--visible' : ''}`}>
          {models.map(({ icon: Icon, title, desc, tags }, i) => (
            <div
              key={title}
              className="engagement__card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="engagement__icon">
                <Icon size={20} />
              </div>
              <h3 className="engagement__title">{title}</h3>
              <p className="engagement__desc">{desc}</p>
              <div className="engagement__tags">
                {tags.map(t => <span key={t} className="tag tag--light">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
