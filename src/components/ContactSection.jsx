import './ContactSection.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Phone, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [ref, visible] = useScrollReveal()
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const services = [
    'Operations Excellence',
    'Commercial Growth & Business Development',
    'People, HR & Manpower',
    'Digital Transformation',
    'Tenant Relations System',
    'Marketing Support',
    'SOPs & Policies',
    'Customer Experience',
    'Pre-Opening Readiness',
    'Management Reporting',
    'General Consultancy',
  ]

  return (
    <section className="contact-wrapper" id="contact" ref={ref}>
      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="container cta-banner__inner">
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">Let's Build Your Success Together.</h2>
            <p className="cta-banner__desc">
              Let's turn your operational challenges into practical systems, measurable
              performance, and sustainable growth.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a href="#contact-form" className="btn btn--primary btn--lg"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get in Touch
            </a>
            <a href="#services" className="btn btn--outline-light btn--lg"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Contact section body */}
      <div className="container contact__inner" id="contact-form">
        {/* Info */}
        <div className={`contact__info ${visible ? 'contact--visible' : ''}`}>
          <div className="section-eyebrow">Contact Us</div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact__desc">
            Ready to transform your operations? Reach out directly or fill out the inquiry
            form and we'll be in touch.
          </p>

          <div className="contact__channels">
            <a href="tel:+201129723459" className="contact__channel">
              <div className="contact__channel-icon">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact__channel-label">Phone</div>
                <div className="contact__channel-value">01129723459</div>
              </div>
            </a>

            <a href="mailto:Moustafaabdelmoniem98@gmail.com" className="contact__channel">
              <div className="contact__channel-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact__channel-label">Email</div>
                <div className="contact__channel-value">Moustafaabdelmoniem98@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="contact__person">
            <div className="contact__person-avatar">MA</div>
            <div>
              <div className="contact__person-name">Mostafa Abd EL Moniem</div>
              <div className="contact__person-role">Founder & Principal Consultant</div>
              <div className="contact__person-role">Strategic Business Advisory Agency</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={`contact__form-wrap ${visible ? 'contact--visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Inquiry Sent Successfully</h3>
              <p>Thank you for reaching out. We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} id="inquiry-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company" className="form-label">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Your organization"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+20 xxx xxx xxxx"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-service" className="form-label">Service Needed</label>
                <select
                  id="contact-service"
                  name="service"
                  className="form-input form-select"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service area...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Briefly describe your challenge or what you're looking for..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary btn--lg contact__submit" id="submit-inquiry">
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
