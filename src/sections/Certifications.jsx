import { Award } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Certifications({ certifications, content }) { return <section className="section certifications-section"><SectionHeading eyebrow={content.eyebrow} title={content.heading} /><div className="certification-grid">{certifications.map((certificate, index) => <article className="certification-card" key={certificate.name}><span>0{index + 1}</span><Award size={22} /><h3>{certificate.name}</h3><p>{certificate.issuer}</p></article>)}</div></section> }
