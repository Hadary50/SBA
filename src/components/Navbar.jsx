import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Operations Excellence', href: '#operations' },
      { label: 'Commercial Growth', href: '#commercial' },
      { label: 'People & Organization', href: '#people' },
      { label: 'Digital Transformation', href: '#digital' },
      { label: 'Tenant Relations', href: '#tenant' },
      { label: 'Marketing Support', href: '#marketing' },
    ]
  },
  { label: 'Approach', href: '#methodology' },
  { label: 'Deliverables', href: '#deliverables' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdownOpen(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    setDropdownOpen(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} ref={navRef}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo" href="#home" onClick={() => handleNavClick('#home')} aria-label="Strategic Business Advisory Agency">
          <div className="navbar__monogram">SBA</div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Strategic Business Advisory</span>
            <span className="navbar__brand-sub">Business & Operations Consultancy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__item">
              {link.children ? (
                <>
                  <button
                    className="navbar__link navbar__link--dropdown"
                    onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                    aria-expanded={dropdownOpen === link.label}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`navbar__chevron ${dropdownOpen === link.label ? 'navbar__chevron--open' : ''}`} />
                  </button>
                  {dropdownOpen === link.label && (
                    <div className="navbar__dropdown" role="menu">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="navbar__dropdown-item"
                          role="menuitem"
                          onClick={(e) => { e.preventDefault(); handleNavClick(child.href) }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="navbar__actions">
          <a
            href="#contact"
            className="btn btn--primary navbar__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Get in Touch
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          <div className="navbar__mobile-inner">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="navbar__mobile-children">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="navbar__mobile-child"
                        onClick={(e) => { e.preventDefault(); handleNavClick(child.href) }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="btn btn--primary"
              style={{marginTop: '8px', width: '100%', justifyContent: 'center'}}
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
