import { Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function About({ about }) {
  return <section id="about" className="section about-section"><div className="about-layout"><SectionHeading eyebrow={about.eyebrow} title={about.heading} /><div className="about-content"><div className="about-text">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="focus-list">{about.focus.map((item) => <div key={item}><Check size={16} /><p>{item}</p></div>)}</div></div></div></section>
}
