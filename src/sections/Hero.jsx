import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'

export default function Hero({ personalInfo, hero }) {
  return <section id="top" className="hero"><div className="hero-grid">
    <div className="hero-copy">
      <p className="availability"><span />{hero.availability}</p>
      <p className="hero-greeting">{hero.greeting}</p>
      <h1>{personalInfo.name}<em>.</em></h1>
      <p className="hero-title">{personalInfo.title}</p>
      <p className="hero-headline">{hero.headline}</p>
      <p className="hero-description">{hero.description}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">{hero.primaryCta} <ArrowDown size={17} /></a><a className="button button-secondary" href={personalInfo.resumeUrl} download={personalInfo.resumeFileName}><Download size={17} />{hero.secondaryCta}</a></div>
      <div className="social-row"><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedInIcon size={19} /></a><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitHubIcon size={19} /></a><a className="email-link" href={`mailto:${personalInfo.email}`}>{personalInfo.email}<ArrowUpRight size={15} /></a></div>
    </div>
    <div className="code-window" aria-label="Decorative code-inspired illustration">
      <div className="window-bar"><span /><span /><span /><p>developer.js</p></div>
      <pre><code><span className="syntax-key">const</span> developer = {'{'}{`\n`}  name: <span className="syntax-string">'{personalInfo.name}'</span>,{`\n`}  role: <span className="syntax-string">'{personalInfo.title}'</span>,{`\n`}  stack: [<span className="syntax-string">'Java'</span>, <span className="syntax-string">'React'</span>],{`\n`}  builds: <span className="syntax-bool">true</span>,{`\n`}  location: <span className="syntax-string">'{personalInfo.location}'</span>{`\n`}{'}'};</code></pre>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="cursor-dot" />
    </div>
  </div></section>
}
