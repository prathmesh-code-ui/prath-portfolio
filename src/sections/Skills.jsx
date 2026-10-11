import { ArrowUpRight, Braces, Database, LayoutPanelTop, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const icons = [Braces, LayoutPanelTop, Database, Wrench]

export default function Skills({ skills, content }) {
  return <section id="skills" className="section skills-section"><SectionHeading eyebrow={content.eyebrow} title={content.heading} description={content.description} /><div className="skills-grid">{skills.map((group, index) => { const Icon = icons[index % icons.length]; return <article className="skill-group" key={group.category}><div className="skill-category"><div className="skill-icon"><Icon size={18} /></div><h3>{group.category}</h3><ArrowUpRight size={17} /></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div></section>
}
