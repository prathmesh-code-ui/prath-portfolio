import { ArrowUp } from 'lucide-react'

export default function Footer({ personalInfo, message }) {
  return <footer className="footer"><p>{message}</p><a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} /></a><p>© {new Date().getFullYear()} {personalInfo.name}</p></footer>
}
