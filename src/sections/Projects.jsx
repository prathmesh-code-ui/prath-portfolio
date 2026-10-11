import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

export default function Projects({ projects, content }) { return <section id="projects" className="section projects-section"><SectionHeading eyebrow={content.eyebrow} title={content.heading} />{projects.map((project) => <ProjectCard key={project.name} project={project} featuredLabel={content.featuredLabel} />)}</section> }
