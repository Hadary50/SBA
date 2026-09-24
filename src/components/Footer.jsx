import './Footer.css'
import { Phone, Mail } from 'lucide-react'

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#methodology' },
  { label: 'Deliverables', href: '#deliverables' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Operations Excellence', href: '#operations' },
  { label: 'Commercial Growth', href: '#commercial' },
  { label: 'People & HR', href: '#people' },
  { label: 'Digital Transformation', href: '#digital' },
  { label: 'Tenant Relations', href: '#tenant' },
  { label: 'Marketing Support', href: '#marketing' },
  { label: 'SOPs & Policies', href: '#sops' },
  { label: 'Customer Experience', href: '#cx' },
]

export default function Footer() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main container">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__monogram">SBA</div>
            <div>
              <div className="footer__brand-name">Strategic Business Advisory Agency</div>
              <div className="footer__brand-sub">Business, Operations &amp; Management Consultancy</div>
            </div>
          </div>
          <p className="footer__tagline">
            From recommendations to operating systems — helping organizations build practical,
            measurable, and sustainable business frameworks.
          </p>
          <div className="footer__contact-links">
            <a href="tel:+201129723459" className="footer__contact-link">
              <Phone size={14} />
              01129723459
            </a>
            <a href="mailto:Moustafaabdelmoniem98@gmail.com" className="footer__contact-link">
              <Mail size={14} />
              Moustafaabdelmoniem98@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__nav-group">
          <div className="footer__nav-title">Navigation</div>
          <ul className="footer__nav-list">
            {footerNav.map(link => (
              <li key={link.label}>
                <a href={link.href} className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-group">
          <div className="footer__nav-title">Services</div>
          <ul className="footer__nav-list">
            {serviceLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-group">
          <div className="footer__nav-title">Approach</div>
          <ul className="footer__nav-list">
            {['Methodology', 'Deliverables', 'Engagement Models', 'Industries', 'Who Can Benefit', 'Value Proposition'].map(item => (
              <li key={item}>
                <span className="footer__nav-link footer__nav-link--plain">{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <a
              href="#contact"
              className="btn btn--primary"
              style={{ fontSize: '0.82rem', padding: '10px 20px' }}
              onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Strategic Business Advisory Agency. All rights reserved.
          </p>
          <p className="footer__credit">
            Business, Operations &amp; Management Consultancy
          </p>
        </div>
      </div>
    </footer>
  )
}
