import './ExperienceSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Clock, ArrowRight } from 'lucide-react'

const placeholders = [
  { id: 1 }, { id: 2 }, { id: 3 },
]

export default function ExperienceSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section--bg experience" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="section-eyebrow section-eyebrow--center">Track Record</div>
          <h2 className="section-title">Experience &amp; Success Stories</h2>
          <p className="section-subtitle section-subtitle--center">
            Case studies and success stories are being documented. They will be published as
            client engagements are formalized and results are verified.
          </p>
        </div>

        <div className={`experience__grid ${visible ? 'experience--visible' : ''}`}>
          {placeholders.map(({ id }, i) => (
            <div
              key={id}
              className="experience__card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="experience__placeholder">
                <Clock size={28} color="rgba(13,71,161,0.3)" />
                <span className="experience__placeholder-label">Case Study Coming Soon</span>
              </div>
              <div className="experience__meta">
                <div className="experience__field">
                  <div className="experience__field-label">Client / Project</div>
                  <div className="experience__field-value experience__field-value--empty">To be published</div>
                </div>
                <div className="experience__field">
                  <div className="experience__field-label">Challenge</div>
                  <div className="experience__field-value experience__field-value--empty">—</div>
                </div>
                <div className="experience__field">
                  <div className="experience__field-label">Approach</div>
                  <div className="experience__field-value experience__field-value--empty">—</div>
                </div>
                <div className="experience__field">
                  <div className="experience__field-label">Result / Impact</div>
                  <div className="experience__field-value experience__field-value--empty">—</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience__note">
          <p>
            We are committed to transparency. Success stories will only be published with
            verified outcomes and client consent.
          </p>
        </div>
      </div>
    </section>
  )
}
