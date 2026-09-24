import './MethodologySection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Assessment',
    desc: 'Comprehensive review of current operational status, structures, processes, and performance gaps.',
  },
  {
    num: '02',
    title: 'Analysis',
    desc: 'Deep analysis of findings, root causes, and prioritization of key issues and opportunities.',
  },
  {
    num: '03',
    title: 'Recommendations',
    desc: 'Clear, practical recommendations aligned with business objectives and operational realities.',
  },
  {
    num: '04',
    title: 'Action Plan',
    desc: 'A structured roadmap with defined deliverables, owners, timelines, and success metrics.',
  },
  {
    num: '05',
    title: 'Implementation',
    desc: 'Hands-on support for executing systems, SOPs, frameworks, and operational tools.',
  },
  {
    num: '06',
    title: 'Monitoring',
    desc: 'Ongoing tracking of KPIs, system adoption, and performance against the action plan.',
  },
  {
    num: '07',
    title: 'Continuous Improvement',
    desc: 'Regular review cycles to refine systems, update processes, and maintain performance gains.',
  },
]

export default function MethodologySection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section methodology" id="methodology" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="section-eyebrow section-eyebrow--center">Our Approach</div>
          <h2 className="section-title">Our Methodology</h2>
          <p className="section-subtitle section-subtitle--center">
            A structured journey from assessment to continuous improvement — delivering real,
            measurable, and lasting results.
          </p>
        </div>

        <div className={`methodology__steps ${visible ? 'methodology--visible' : ''}`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="methodology__step"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="methodology__connector" aria-hidden="true">
                {i < steps.length - 1 && <div className="methodology__line" />}
              </div>
              <div className="methodology__num">{step.num}</div>
              <h3 className="methodology__title">{step.title}</h3>
              <p className="methodology__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
