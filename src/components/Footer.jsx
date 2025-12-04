const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Full-Stack Development', 'Cloud Solutions', 'DevOps & Automation', 'Security & DevSecOps'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog'],
    },
    {
      title: 'Contact',
      links: ['Get in Touch', 'Support', 'Privacy Policy', 'Terms of Service'],
    },
  ]

  const socialLinks = [
    { icon: 'fa-linkedin', href: 'https://www.linkedin.com/company/opsmint-technologies/', label: 'LinkedIn' },
    { icon: 'fa-github', href: 'https://github.com/OpsMint-tech/', label: 'GitHub' },
    { icon: 'fa-instagram', href: 'https://www.instagram.com/opsmint_tech?igsh=emJjMDFnNjA3aGhj', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">OpsMint</h3>
            <p className="text-gray-400 mb-4">
              AI-powered IT solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-instagram hover:-translate-y-0.5 transition-all duration-300"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-gray-800 text-gray-400">
          <p>&copy; 2025 OpsMint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

