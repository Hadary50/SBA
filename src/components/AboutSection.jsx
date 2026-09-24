import './AboutSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CheckCircle, Target, Layers, TrendingUp } from 'lucide-react'

const journey = [
  { num: '01', label: 'Assessment', desc: 'Evaluate the current state of operations, people, and systems.' },
  { num: '02', label: 'Analysis', desc: 'Identify gaps, inefficiencies, and commercial opportunities.' },
  { num: '03', label: 'Action Plan', desc: 'Develop a structured roadmap aligned with business goals.' },
  { num: '04', label: 'Implementation', desc: 'Execute systems, SOPs, workflows, and frameworks.' },
  { num: '05', label: 'Monitoring', desc: 'Track KPIs and performance against defined benchmarks.' },
  { num: '06', label: 'Continuous Improvement', desc: 'Refine systems based on data, feedback, and results.' },
]

const pillars = [
  { icon: Target, label: 'Precision' },
  { icon: Layers, label: 'Systems' },
  { icon: CheckCircle, label: 'Accountability' },
  { icon: TrendingUp, label: 'Growth' },
]

export default function AboutSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className={`about__inner ${visible ? 'about--visible' : ''}`}>
          {/* Left: Content */}
          <div className="about__content">
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">More Than Advice.<br />We Build Operating Systems.</h2>
            <p className="about__lead">
              Strategic Business Advisory Agency is a business, operations, and management
              consultancy that goes beyond recommendations — we turn business challenges
              into practical, measurable operating frameworks.
            </p>
            <p className="about__body">
              We work alongside organizations to assess, design, and implement systems for
              operations, tenant relations, people management, commercial development, customer
              experience, and digital transformation.
            </p>
            <p className="about__body">
              Our approach is structured, hands-on, and results-oriented. We don't leave after
              the report — we stay until the system works.
            </p>

            <div className="about__pillars">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="about__pillar">
                  <Icon size={18} color="var(--blue-accent)" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Journey */}
          <div className="about__journey">
            <div className="about__journey-title">Our Engagement Journey</div>
            <div className="about__timeline">
              {journey.map((step, i) => (
                <div key={step.num} className="about__step" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="about__step-left">
                    <div className="about__step-num">{step.num}</div>
                    {i < journey.length - 1 && <div className="about__step-line" />}
                  </div>
                  <div className="about__step-content">
                    <div className="about__step-label">{step.label}</div>
                    <div className="about__step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
