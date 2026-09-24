import './IndustriesSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  ShoppingBag, Home, Building2, Hotel, Heart, Layers, Briefcase, BookOpen
} from 'lucide-react'

const industries = [
  { icon: ShoppingBag, label: 'Malls & Commercial Centers' },
  { icon: Home, label: 'Communities & Mixed-Use Projects' },
  { icon: Building2, label: 'Administrative Complexes & Companies' },
  { icon: Hotel, label: 'Hotels & Hospitality' },
  { icon: Heart, label: 'Medical Complexes' },
  { icon: Layers, label: 'Residential Projects' },
  { icon: Briefcase, label: 'Service Businesses' },
  { icon: BookOpen, label: 'Institutions & Organizations' },
]

const valueBlocks = [
  {
    title: 'Better Systems',
    items: [
      'Better operations & operational controls',
      'Better tenant relations management',
      'Better customer experience systems',
    ],
  },
  {
    title: 'Better People',
    items: [
      'Better HR & people management',
      'Better workforce planning & structure',
      'Better performance management',
    ],
  },
  {
    title: 'Better Business',
    items: [
      'Better business development results',
      'Better commercial & leasing outcomes',
      'Better control & digital visibility',
    ],
  },
]

export default function IndustriesSection() {
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <>
      {/* Who Can Benefit */}
      <section className="section section--light industries" id="industries" ref={ref}>
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-eyebrow section-eyebrow--center">Who Can Benefit?</div>
            <h2 className="section-title">Not Limited to Malls or Property.</h2>
            <p className="section-subtitle section-subtitle--center">
              Our consultancy framework is adaptable to any organization that manages
              operations, people, tenants, or customers.
            </p>
          </div>

          <div className={`industries__grid ${visible ? 'industries--visible' : ''}`}>
            {industries.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="industries__card"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="industries__icon">
                  <Icon size={22} />
                </div>
                <span className="industries__label">{label}</span>
              </div>
            ))}
          </div>

          <div className="industries__tagline">
            <div className="industries__tagline-line" />
            <p>One consultancy framework — customized to each business.</p>
            <div className="industries__tagline-line" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section section--navy value" id="value" ref={ref2}>
        <div className="container">
          <div className="section-header section-header--center">
            <div className="section-eyebrow section-eyebrow--center section-eyebrow--light">Value Proposition</div>
            <h2 className="section-title section-title--light">Better Systems. Better People. Better Business.</h2>
            <p className="section-subtitle section-subtitle--light section-subtitle--center">
              The core value our clients experience across every engagement.
            </p>
          </div>

          <div className={`value__grid ${visible2 ? 'value--visible' : ''}`}>
            {valueBlocks.map(({ title, items }, i) => (
              <div key={title} className="value__block" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="value__block-title">{title}</div>
                <ul className="value__block-items">
                  {items.map(item => (
                    <li key={item} className="value__block-item">
                      <span className="value__check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
