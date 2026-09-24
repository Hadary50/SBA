import './DetailedSections.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  Cog, Package, FileCheck, Clipboard, AlertCircle, BarChart3,
  Users, UserCheck, BookOpen, ShieldCheck, CheckSquare,
  TrendingUp, Target, Megaphone, Star, Wifi, Map, Monitor,
  Building2, Mail, Phone, Calendar, Flag, Bell, Layout,
  ArrowRight
} from 'lucide-react'

/* ---------- REUSABLE ---------- */
function SectionHeader({ eyebrow, title, subtitle, light, center }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      <div className={`section-eyebrow ${light ? 'section-eyebrow--light' : ''} ${center ? 'section-eyebrow--center' : ''}`}>
        {eyebrow}
      </div>
      <h2 className={`section-title ${light ? 'section-title--light' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'section-subtitle--light' : ''} ${center ? 'section-subtitle--center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function TagGrid({ tags, light }) {
  return (
    <div className="tag-list">
      {tags.map(t => (
        <span key={t} className={`tag ${light ? 'tag--light' : ''}`}>{t}</span>
      ))}
    </div>
  )
}

function ProcessFlow({ steps, light }) {
  return (
    <div className="ds-flow">
      {steps.map((step, i) => (
        <div key={step} className="ds-flow__item">
          <div className={`ds-flow__label ${light ? 'ds-flow__label--light' : ''}`}>{step}</div>
          {i < steps.length - 1 && (
            <div className={`ds-flow__arrow ${light ? 'ds-flow__arrow--light' : ''}`}>→</div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ============================================================
   OPERATIONS SECTION
   ============================================================ */
export function OperationsSection() {
  const [ref, visible] = useScrollReveal()

  const items = [
    { icon: Cog, label: 'Operational Assessment & Gap Analysis' },
    { icon: Clipboard, label: 'Responsibility Matrix & Org Clarity' },
    { icon: Calendar, label: 'Daily Operations Management' },
    { icon: AlertCircle, label: 'Issue Management & Escalation' },
    { icon: ShieldCheck, label: 'Operational Controls & Quick Wins' },
    { icon: BookOpen, label: 'Operational Manuals & Facility Guide' },
    { icon: FileCheck, label: 'SOPs, Policies & Checklists' },
    { icon: BarChart3, label: 'Forms, Templates & Reporting' },
  ]

  return (
    <section className="section section--light ds-section" id="operations" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Pillar 01"
              title="Operations Excellence"
              subtitle="Build the operational backbone of your organization with structured systems, clear responsibilities, and performance controls."
            />
            <div className="ds-items">
              {items.map(({ icon: Icon, label }) => (
                <div key={label} className="ds-item">
                  <div className="ds-item__icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ds-visual">
            <div className="ds-card ds-card--accent">
              <div className="ds-card__head">Operations Framework</div>
              <div className="ds-card__section">
                <div className="ds-card__label">Assessment Phase</div>
                <TagGrid tags={['Current State Review', 'Gap Analysis', 'Priority Matrix', 'Quick Wins']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Documentation Output</div>
                <TagGrid tags={['Operational Manual', 'SOPs', 'Policies', 'Checklists', 'Forms']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Controls & Reporting</div>
                <TagGrid tags={['KPI Dashboard', 'Daily Reports', 'Issue Logs', 'Performance Tracking']} light />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TENANT RELATIONS SECTION
   ============================================================ */
export function TenantSection() {
  const [ref, visible] = useScrollReveal()

  const lifecycle = ['Onboarding', 'Handover', 'Fit-Out', 'Operate', 'Tickets', 'Inspect', 'Report']

  const govItems = [
    { icon: BookOpen, title: 'RULES', desc: 'Tenant Handbook & Rules & Regulations' },
    { icon: Mail, title: 'COMMUNICATION', desc: 'Channels, notifications & escalation' },
    { icon: ShieldCheck, title: 'COMPLIANCE', desc: 'Inspections, violations & warnings' },
    { icon: Package, title: 'SERVICE', desc: 'Requests, tickets & SLA management' },
    { icon: Star, title: 'PERFORMANCE', desc: 'Tenant satisfaction & performance tracking' },
    { icon: BarChart3, title: 'REPORTING', desc: 'Monthly tenant performance dashboard' },
  ]

  const docs = [
    'Tenant Onboarding', 'Handover / Return', 'Tenant Request',
    'Complaint', 'Service / Maintenance Ticket', 'Fit-Out Permit',
    'Labor Access Permit', 'Loading / Unloading', 'Event / Activation Request',
    'Inspection Checklist', 'Violation / Warning', 'Incident Report',
  ]

  const ticketFlow = ['Request', 'Ticket', 'Assign', 'Follow-up', 'Resolve', 'Close', 'Report']

  return (
    <section className="section section--navy ds-section" id="tenant" ref={ref}>
      <div className="container">
        <div className={`${visible ? 'ds--visible' : ''}`}>
          <SectionHeader
            eyebrow="Tenant Relations System"
            title="From Onboarding to Performance."
            subtitle="A complete system for managing the entire tenant lifecycle — from first onboarding to ongoing performance reporting."
            light center
          />

          {/* Lifecycle Flow */}
          <div className="tenant__lifecycle">
            <div className="tenant__lifecycle-label">Tenant Lifecycle</div>
            <ProcessFlow steps={lifecycle} light />
          </div>

          {/* Ticketing workflow */}
          <div className="tenant__ticketing">
            <div className="tenant__tick-title">Tenant Ticketing Workflow</div>
            <ProcessFlow steps={ticketFlow} light />
            <div className="tenant__tick-props">
              {['Priority', 'SLA', 'Owner', 'History', 'Status', 'Dashboard'].map(p => (
                <span key={p} className="tag tag--light">{p}</span>
              ))}
            </div>
          </div>

          {/* Documentation Package */}
          <div className="tenant__docs-title">Tenant Documentation Package</div>
          <div className="tenant__docs">
            {docs.map(doc => (
              <div key={doc} className="tenant__doc-item">
                <FileCheck size={14} />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          {/* Governance grid */}
          <div className="tenant__gov-title">Tenant Governance Framework</div>
          <div className="tenant__gov">
            {govItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="tenant__gov-item">
                <div className="ds-item__icon ds-item__icon--light"><Icon size={16} /></div>
                <div>
                  <div className="tenant__gov-item-title">{title}</div>
                  <div className="tenant__gov-item-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   BUSINESS DEVELOPMENT SECTION
   ============================================================ */
export function BusinessDevSection() {
  const [ref, visible] = useScrollReveal()

  const opportunities = [
    { icon: TrendingUp, label: 'Revenue Opportunities & Additional Income Sources' },
    { icon: Building2, label: 'Utilization of Unused Spaces' },
    { icon: Users, label: 'Commercial Partnerships' },
    { icon: Calendar, label: 'Pop-Up Activities' },
    { icon: Megaphone, label: 'Advertising Opportunities' },
    { icon: Star, label: 'Activations & Events' },
    { icon: Package, label: 'Development of Services to Customers & Tenants' },
  ]

  return (
    <section className="section section--light ds-section" id="commercial" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Pillar 02"
              title="Business Development"
              subtitle="Turn unused opportunities into structured commercial initiatives with clear feasibility and expected returns."
            />
            <ProcessFlow steps={['Opportunity', 'Feasibility', 'Expected Return', 'Action Plan']} />
            <div className="ds-items" style={{ marginTop: 24 }}>
              {opportunities.map(({ icon: Icon, label }) => (
                <div key={label} className="ds-item">
                  <div className="ds-item__icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ds-visual">
            <div className="ds-card ds-card--accent">
              <div className="ds-card__head">Business Development Plan</div>
              <div className="ds-card__section">
                <div className="ds-card__label">Commercial Opportunities</div>
                <TagGrid tags={['Gap Analysis', 'Space Audit', 'Revenue Mapping', 'Pipeline']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Activations & Events</div>
                <TagGrid tags={['Pop-Ups', 'Campaigns', 'Brand Partnerships', 'Activations']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Leasing Strategy</div>
                <TagGrid tags={['Leasing KPIs', 'Occupancy', 'Pipeline', 'Vacancy Rate']} light />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   MARKETING SECTION
   ============================================================ */
export function MarketingSection() {
  const [ref, visible] = useScrollReveal()

  const items = [
    'Marketing Plan & Strategy',
    'Events & Activations Planning',
    'Promotional Ideas & Campaigns',
    'Customer Engagement Programs',
    'Content Support & Direction',
    'Content Calendar Development',
    'Brand Positioning & Messaging',
    'Reporting & Results Measurement',
  ]

  return (
    <section className="section section--bg ds-section" id="marketing" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Marketing Support"
              title="Marketing Connected to Operations and Commercial Value."
              subtitle="Marketing plans that are aligned with operational capability and tied to measurable commercial outcomes."
            />
            <div className="ds-items">
              {items.map(item => (
                <div key={item} className="ds-item">
                  <div className="ds-item__icon"><Megaphone size={16} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ds-visual">
            <div className="ds-card ds-card--accent">
              <div className="ds-card__head">Marketing Framework</div>
              <div className="ds-card__section">
                <div className="ds-card__label">Planning & Strategy</div>
                <TagGrid tags={['Annual Plan', 'Seasonal Campaigns', 'Brand Calendar']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Engagement</div>
                <TagGrid tags={['Events', 'Activations', 'Content', 'Social']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Measurement</div>
                <TagGrid tags={['KPIs', 'Reports', 'Results', 'ROI Tracking']} light />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   HR & MANPOWER SECTION
   ============================================================ */
export function HRSection() {
  const [ref, visible] = useScrollReveal()

  const items = [
    { icon: Users, label: 'Manpower Assessment & Workforce Planning' },
    { icon: Layout, label: 'Organizational Structure Design' },
    { icon: FileCheck, label: 'Job Descriptions & Profiles' },
    { icon: UserCheck, label: 'Recruitment Planning & Screening' },
    { icon: CheckSquare, label: 'Interview, Selection & Onboarding' },
    { icon: BarChart3, label: 'Performance Evaluation & KPIs' },
    { icon: Calendar, label: 'Attendance & Leave Management' },
    { icon: Flag, label: 'Employee Relations' },
  ]

  return (
    <section className="section section--light ds-section" id="people" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Pillar 03"
              title="Manpower & HR"
              subtitle="Build a structured, efficient workforce with the right people, the right roles, and the right performance systems."
            />
            <ProcessFlow steps={['Current', 'Required', 'Gap', 'Plan']} />
            <div className="ds-items" style={{ marginTop: 24 }}>
              {items.map(({ icon: Icon, label }) => (
                <div key={label} className="ds-item">
                  <div className="ds-item__icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ds-visual">
            <div className="ds-card ds-card--accent">
              <div className="ds-card__head">HR Output Package</div>
              <div className="ds-card__section">
                <div className="ds-card__label">Structure & Roles</div>
                <TagGrid tags={['Org Chart', 'Job Descriptions', 'Role Matrix', 'Grading']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Recruitment</div>
                <TagGrid tags={['Recruitment Plan', 'Screening Guide', 'Interview Templates', 'Onboarding Pack']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Performance & HR Tools</div>
                <TagGrid tags={['KPI Framework', 'Evaluation Forms', 'HR Reports', 'Workforce Cost']} light />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SOPs & POLICIES SECTION
   ============================================================ */
export function SOPsSection() {
  const [ref, visible] = useScrollReveal()

  const categories = [
    'Operations', 'Tenant Relations', 'Security', 'Housekeeping',
    'Customer Service', 'HR', 'Maintenance', 'Coordination',
    'Complaint Handling', 'Emergency', 'Incident Reporting',
  ]

  const outputs = ['Checklists', 'Forms', 'Reports', 'Templates', 'Approval Workflows']

  return (
    <section className="section section--bg ds-section" id="sops" ref={ref}>
      <div className="container">
        <div className={`${visible ? 'ds--visible' : ''}`} style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeader
            eyebrow="SOPs & Policies"
            title="Build the Operating Language of the Organization."
            subtitle="Standard operating procedures, policies, and compliance frameworks across every business function."
            center
          />
          <div className="sops__categories">
            {categories.map(cat => (
              <div key={cat} className="sops__cat">
                <CheckSquare size={14} color="var(--blue-primary)" />
                <span>{cat}</span>
              </div>
            ))}
          </div>
          <div className="sops__outputs">
            <div className="sops__outputs-label">Documentation Output Formats</div>
            <div className="tag-list" style={{ justifyContent: 'center' }}>
              {outputs.map(o => <span key={o} className="tag">{o}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CUSTOMER EXPERIENCE SECTION
   ============================================================ */
export function CustomerExperienceSection() {
  const [ref, visible] = useScrollReveal()

  const painPoints = [
    'Customer pain points & friction areas',
    'Reasons for complaints',
    'Quality of interaction & service',
    'Cleanliness & organization',
    'Ease of movement & wayfinding',
    'Information accessibility',
  ]

  return (
    <section className="section section--light ds-section" id="cx" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Customer Experience"
              title="Map the Journey. Find the Friction. Improve the Experience."
              subtitle="Identify exactly where customers experience frustration and design practical improvements."
            />
            <ProcessFlow steps={['Arrival', 'Entrance', 'Service Experience', 'Exit']} />
            <div style={{ marginTop: 24 }}>
              <div className="ds-card__label" style={{marginBottom: 12}}>Pain Points We Address</div>
              <div className="ds-items">
                {painPoints.map(p => (
                  <div key={p} className="ds-item">
                    <div className="ds-item__icon"><AlertCircle size={15} /></div>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ds-visual">
            <div className="ds-card ds-card--accent">
              <div className="ds-card__head">CX Output</div>
              <div className="ds-card__section">
                <div className="ds-card__label">Journey Mapping</div>
                <TagGrid tags={['Touchpoint Map', 'Emotion Curve', 'Friction Points', 'Moments of Truth']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label">Improvement Plan</div>
                <TagGrid tags={['Quick Wins', 'Standard Responses', 'Training Guide', 'Recovery Process']} light />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PRE-OPENING SECTION
   ============================================================ */
export function PreOpeningSection() {
  const [ref, visible] = useScrollReveal()

  const checklist = [
    'Operational Structure', 'Manpower Plan', 'Recruitment Plan',
    'SOPs & Procedures', 'Operational Manual', 'Tenant Readiness',
    'Unit Handover', 'Security & Housekeeping', 'Customer Service Setup',
    'Staff Training', 'Opening Checklists', 'Readiness Assessment',
  ]

  return (
    <section className="section section--navy ds-section" id="preopening" ref={ref}>
      <div className="container">
        <div className={`${visible ? 'ds--visible' : ''}`}>
          <SectionHeader
            eyebrow="Pre-Opening Readiness"
            title="Prepare the Operation Before Opening Day."
            subtitle="A structured readiness program ensuring every dimension of the operation is prepared, documented, and ready to deliver."
            light center
          />
          <div className="preopening__grid">
            {checklist.map((item, i) => (
              <div key={item} className="preopening__item" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="preopening__check">
                  <CheckSquare size={16} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   MANAGEMENT REPORTING SECTION
   ============================================================ */
export function ReportingSection() {
  const [ref, visible] = useScrollReveal()

  const reportItems = [
    { icon: BarChart3, label: 'Current Status Overview' },
    { icon: AlertCircle, label: 'Key Findings & Operational Gaps' },
    { icon: Flag, label: 'Tenant Issues & Action Items' },
    { icon: Users, label: 'Manpower & Staffing Analysis' },
    { icon: TrendingUp, label: 'Commercial Opportunities' },
    { icon: ShieldCheck, label: 'Risks & Mitigations' },
    { icon: Target, label: 'Action Plan & Roadmap' },
  ]

  const kpis = [
    'Leasing KPIs', 'Digital KPIs', 'Occupancy Rate',
    'Vacancy Rate', 'Pipeline', 'SLA Compliance', 'System Adoption',
  ]

  return (
    <section className="section section--light ds-section" id="reporting" ref={ref}>
      <div className="container">
        <div className={`${visible ? 'ds--visible' : ''}`}>
          <SectionHeader
            eyebrow="Management Reporting"
            title="From Operational Data to Management Decisions."
            subtitle="Structured reporting frameworks that turn operational data into actionable insights for management."
            center
          />

          <div className="reporting__main">
            <div className="reporting__items">
              {reportItems.map(({ icon: Icon, label }) => (
                <div key={label} className="reporting__item">
                  <div className="ds-item__icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="reporting__flow">
              <div className="reporting__flow-box">KPIs</div>
              <ArrowRight size={20} color="var(--blue-accent)" />
              <div className="reporting__flow-box">Monthly Performance Reports</div>
              <ArrowRight size={20} color="var(--blue-accent)" />
              <div className="reporting__flow-box reporting__flow-box--accent">Management Decision</div>
            </div>

            <div className="reporting__kpis">
              <div className="ds-card__label" style={{ textAlign: 'center', marginBottom: 12 }}>KPI Categories Tracked</div>
              <div className="tag-list" style={{ justifyContent: 'center' }}>
                {kpis.map(k => <span key={k} className="tag">{k}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   DIGITAL TRANSFORMATION SECTION
   ============================================================ */
export function DigitalSection() {
  const [ref, visible] = useScrollReveal()

  const items = [
    { icon: Monitor, label: 'Digital Operations & Workflow Design' },
    { icon: Map, label: 'ERP Requirements & Documentation' },
    { icon: Layout, label: 'Process Mapping & Digitization' },
    { icon: BarChart3, label: 'Dashboards & Reporting Systems' },
    { icon: Wifi, label: 'Platform Selection Support' },
    { icon: CheckSquare, label: 'System Adoption & Change Management' },
  ]

  return (
    <section className="section section--bg ds-section" id="digital" ref={ref}>
      <div className="container">
        <div className={`ds-inner ${visible ? 'ds--visible' : ''}`}>
          <div className="ds-visual">
            <div className="ds-card ds-card--navy">
              <div className="ds-card__head ds-card__head--light">Digital Transformation</div>
              <div className="ds-card__section">
                <div className="ds-card__label ds-card__label--light">Workflows</div>
                <TagGrid tags={['Process Maps', 'Digital SOPs', 'Automation', 'Notifications']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label ds-card__label--light">Systems</div>
                <TagGrid tags={['ERP', 'CMMS', 'Ticketing', 'HRMS', 'CRM']} light />
              </div>
              <div className="ds-card__section">
                <div className="ds-card__label ds-card__label--light">Reporting</div>
                <TagGrid tags={['Live Dashboards', 'KPI Tracker', 'Management Reports']} light />
              </div>
            </div>
          </div>
          <div className="ds-content">
            <SectionHeader
              eyebrow="Pillar 04"
              title="Digital Transformation"
              subtitle="Operations powered by technology — from process mapping to platform implementation and digital reporting."
            />
            <div className="ds-items">
              {items.map(({ icon: Icon, label }) => (
                <div key={label} className="ds-item">
                  <div className="ds-item__icon"><Icon size={16} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
