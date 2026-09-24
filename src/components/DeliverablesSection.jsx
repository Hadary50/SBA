import './DeliverablesSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FileText, BookOpen, Users, Layout, Package, BarChart3, Map, TrendingUp, CheckSquare, Globe, Target, Layers } from 'lucide-react'

const deliverables = [
  { icon: BarChart3, title: 'Operational Assessment Report', desc: 'Comprehensive review of current operations with gap analysis and prioritized recommendations.' },
  { icon: BookOpen, title: 'Operational Manual / Facility Guide', desc: 'Complete operational procedures and standards for daily operations management.' },
  { icon: Users, title: 'Tenant Handbook', desc: 'Complete guide for tenant onboarding, rules, procedures, and facility protocols.' },
  { icon: Layout, title: 'Tenant Relations System', desc: 'Full system for managing the tenant lifecycle from onboarding to performance reporting.' },
  { icon: Package, title: 'Tenant Ticketing Package', desc: 'End-to-end ticketing workflow with forms, SLA structure, and escalation framework.' },
  { icon: TrendingUp, title: 'Tenant Mix / Revenue Study', desc: 'Analysis of commercial mix, revenue potential, and leasing strategy recommendations.' },
  { icon: Target, title: 'Business Development Plan', desc: 'Structured plan for commercial opportunities, activations, partnerships, and revenue growth.' },
  { icon: Users, title: 'Manpower & HR Plan', desc: 'Complete workforce plan with org structure, JDs, recruitment, performance, and HR tools.' },
  { icon: FileText, title: 'SOPs / Policies', desc: 'Standard operating procedures and policies across all operational functions.' },
  { icon: CheckSquare, title: 'Forms / Templates / Checklists', desc: 'Ready-to-use operational documents for daily use across all departments.' },
  { icon: Layers, title: 'KPI Framework', desc: 'Performance measurement framework covering operations, leasing, digital, and people KPIs.' },
  { icon: Map, title: 'Action Plan / Roadmap', desc: 'Phased implementation roadmap with clear milestones, owners, and timelines.' },
  { icon: BarChart3, title: 'Leasing Strategy & Pipeline', desc: 'Commercial leasing strategy with pipeline tracking and occupancy improvement plan.' },
  { icon: Globe, title: 'Website & Digital Platform Support', desc: 'Guidance and requirements for digital presence and platform development.' },
  { icon: Layout, title: 'ERP Requirements & Process Mapping', desc: 'Digital transformation documentation for system selection and implementation readiness.' },
]

export default function DeliverablesSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section--light deliverables" id="deliverables" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="section-eyebrow section-eyebrow--center">What You Receive</div>
          <h2 className="section-title">Deliverables</h2>
          <p className="section-subtitle section-subtitle--center">
            Tangible, ready-to-use outputs that the client can implement, operate, and build upon.
          </p>
        </div>

        <div className={`deliverables__grid ${visible ? 'deliverables--visible' : ''}`}>
          {deliverables.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="deliverables__card"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="deliverables__icon">
                <Icon size={18} />
              </div>
              <h3 className="deliverables__title">{title}</h3>
              <p className="deliverables__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
