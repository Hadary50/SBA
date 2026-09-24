import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProblemsSection from './components/ProblemsSection'
import ServicesSection from './components/ServicesSection'
import {
  OperationsSection,
  TenantSection,
  BusinessDevSection,
  MarketingSection,
  HRSection,
  SOPsSection,
  CustomerExperienceSection,
  PreOpeningSection,
  ReportingSection,
  DigitalSection,
} from './components/DetailedSections'
import MethodologySection from './components/MethodologySection'
import DeliverablesSection from './components/DeliverablesSection'
import EngagementSection from './components/EngagementSection'
import IndustriesSection from './components/IndustriesSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="app" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero />
        <AboutSection />
        <ProblemsSection />
        <ServicesSection />

        {/* Detailed Service Sections */}
        <OperationsSection />
        <TenantSection />
        <BusinessDevSection />
        <MarketingSection />
        <HRSection />
        <SOPsSection />
        <CustomerExperienceSection />
        <PreOpeningSection />
        <ReportingSection />
        <DigitalSection />

        {/* Methodology & Deliverables */}
        <MethodologySection />
        <DeliverablesSection />
        <EngagementSection />
        <IndustriesSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
