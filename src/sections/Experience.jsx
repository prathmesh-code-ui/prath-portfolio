import { BriefcaseBusiness, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Experience({ experience, content }) {
  return <section id="experience" className="section experience-section"><SectionHeading eyebrow={content.eyebrow} title={content.heading} /> <div className="experience-list">{experience.map((item) => <article className="experience-card" key={`${item.company}-${item.role}`}><div className="experience-heading"><div className="experience-role"><div className="experience-icon"><BriefcaseBusiness size={19} /></div><div><p className="duration">{item.duration}</p><h3>{item.role}</h3><p className="company">{item.company}</p></div></div><div className="project-name"><span>{content.projectLabel}</span><strong>{item.project}</strong></div></div><div className="experience-detail"><ul>{item.responsibilities.map((responsibility) => <li key={responsibility}><Check size={16} />{responsibility}</li>)}</ul><div className="experience-stack"><p>Technology used</p><div className="tag-list">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></div></article>)}</div></section>
}
