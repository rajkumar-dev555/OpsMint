import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 70
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-[70px]">
        <div className="nav-logo">
          <h2 className="text-gradient text-3xl font-bold">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>OpsMint</a>
          </h2>
        </div>
        
        <ul className={`hidden md:flex list-none gap-8`}>
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                className="text-gray-700 font-medium transition-all duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-instagram after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed left-0 top-[70px] w-full bg-white text-center transition-all duration-300 shadow-lg ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {['Home', 'Services', 'About', 'testimonials', 'Contact'].map((item) => (
          <li key={item} className="py-4 border-b border-gray-200">
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
              className="text-gray-700 font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

