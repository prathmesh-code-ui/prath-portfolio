import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Mail, MapPin, Phone, Send, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export default function Contact({ personalInfo, contact }) {
  const [formOpen, setFormOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const contacts = [{ icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` }, { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phoneHref}` }, { icon: MapPin, label: 'Location', value: personalInfo.location }, { icon: LinkedInIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin }, { icon: GitHubIcon, label: 'GitHub', value: 'Explore GitHub', href: personalInfo.github }]

  const openForm = () => {
    setError('')
    setStatus('idle')
    setFormOpen(true)
  }

  const sendMessage = async (event) => {
    event.preventDefault()

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setError('The contact form is not configured yet. Please email me directly instead.')
      return
    }

    setStatus('sending')
    setError('')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        reply_to: formData.get('from_email'),
        to_email: personalInfo.email,
      }, { publicKey: emailjsConfig.publicKey })
      form.reset()
      setStatus('success')
    } catch {
      setStatus('idle')
      setError('Message could not be sent. Please try again or email me directly.')
    }
  }

  return <section id="contact" className="section contact-section"><div className="contact-intro"><SectionHeading eyebrow={contact.eyebrow} title={contact.heading} description={contact.description} /><button className="button button-primary" type="button" onClick={openForm}>{contact.emailCta}<ArrowUpRight size={17} /></button>{formOpen && <form className="contact-form" onSubmit={sendMessage}><div className="form-heading"><div><p>Send a message</p><small>I’ll get back to you as soon as possible.</small></div><button className="form-close" type="button" aria-label="Close contact form" onClick={() => setFormOpen(false)}><X size={18} /></button></div><label>Name<input name="from_name" type="text" autoComplete="name" required /></label><label>Email<input name="from_email" type="email" autoComplete="email" required /></label><label>Subject<input name="subject" type="text" required /></label><label>Message<textarea name="message" rows="5" required /></label>{error && <p className="form-message form-error" role="alert">{error}</p>}{status === 'success' && <p className="form-message form-success" role="status">Thanks — your message has been sent.</p>}<button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : <>Send message <Send size={16} /></>}</button></form>}</div><div className="contact-list">{contacts.map(({ icon: Icon, label, value, href }) => <div className="contact-item" key={label}><Icon size={19} /><div><small>{label}</small>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}<ArrowUpRight size={14} /></a> : <p>{value}</p>}</div></div>)}</div></section>
}
