import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'

export default function Contact({ personalInfo, contact }) {
  const contacts = [{ icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` }, { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phoneHref}` }, { icon: MapPin, label: 'Location', value: personalInfo.location }, { icon: LinkedInIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin }, { icon: GitHubIcon, label: 'GitHub', value: 'Explore GitHub', href: personalInfo.github }]
  return <section id="contact" className="section contact-section"><div className="contact-intro"><SectionHeading eyebrow={contact.eyebrow} title={contact.heading} description={contact.description} /><a className="button button-primary" href={`mailto:${personalInfo.email}`}>{contact.emailCta}<ArrowUpRight size={17} /></a></div><div className="contact-list">{contacts.map(({ icon: Icon, label, value, href }) => <div className="contact-item" key={label}><Icon size={19} /><div><small>{label}</small>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}<ArrowUpRight size={14} /></a> : <p>{value}</p>}</div></div>)}</div></section>
}
