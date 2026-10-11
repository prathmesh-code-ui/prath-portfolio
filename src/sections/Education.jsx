import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Education({ education, content }) { return <section className="section education-section"><SectionHeading eyebrow={content.eyebrow} title={content.heading} /><div className="education-grid">{education.map((item) => <article className="education-card" key={item.degree}><div className="education-icon"><GraduationCap size={22} /></div><div><p className="duration">{item.duration}</p><h3>{item.degree}</h3><p>{item.institution}</p></div><div className="result"><small>{item.resultLabel}</small><strong>{item.result}</strong></div></article>)}</div></section> }
