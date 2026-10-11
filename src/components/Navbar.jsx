import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ personalInfo, navigation }) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={`${personalInfo.name} home`}>
          <span className="brand-mark">PS</span>
          <span>{personalInfo.firstName}<i>.</i></span>
        </a>
        <button className="menu-button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {navigation.map((item) => <a href={item.href} onClick={closeMenu} key={item.href}>{item.label}</a>)}
          <a className="nav-resume" href={personalInfo.resumeUrl} download={personalInfo.resumeFileName}>Resume</a>
        </div>
      </nav>
    </header>
  )
}
