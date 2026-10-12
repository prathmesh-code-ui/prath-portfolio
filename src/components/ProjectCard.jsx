import { ArrowUpRight, Check, Code2 } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'

export default function ProjectCard({ project, featuredLabel }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {project.imageUrl && (project.liveUrl ? <a className="project-image-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live project`}><img className="project-image" src={project.imageUrl} alt={project.imageAlt || `${project.name} project preview`} /></a> : <img className="project-image" src={project.imageUrl} alt={project.imageAlt || `${project.name} project preview`} />)}
        <div className="screen-top"><span /><span /><span /></div>
        <div className="screen-body">
          <div className="screen-nav"><b>MM</b><i /><i /><i /></div>
          <div className="screen-content"><div className="balance-block"><small>Current balance</small><strong>₹ 24,850</strong></div><div className="chart-lines"><i /><i /><i /><i /><i /><i /></div><div className="mini-cards"><i /><i /><i /></div></div>
        </div>
      </div>
      <div className="project-copy">
        <div className="project-label"><Code2 size={16} /> {featuredLabel}</div>
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="feature-list">
          {project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
        </ul>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        {(project.liveUrl || project.githubUrl) && <div className="project-actions">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source <GitHubIcon size={16} /></a>}
        </div>}
      </div>
    </article>
  )
}
