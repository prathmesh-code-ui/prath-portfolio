import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import portfolio from './data/portfolio'

export default function App() {
  return <><Navbar personalInfo={portfolio.personalInfo} navigation={portfolio.navigation} /><main><Hero personalInfo={portfolio.personalInfo} hero={portfolio.hero} /><About about={portfolio.about} /><Skills skills={portfolio.skills} content={portfolio.sections.skills} /><Experience experience={portfolio.experience} content={portfolio.sections.experience} /><Projects projects={portfolio.projects} content={portfolio.sections.projects} /><Education education={portfolio.education} content={portfolio.sections.education} /><Certifications certifications={portfolio.certifications} content={portfolio.sections.certifications} /><Contact personalInfo={portfolio.personalInfo} contact={portfolio.contact} /></main><Footer personalInfo={portfolio.personalInfo} message={portfolio.footer} /></>
}
