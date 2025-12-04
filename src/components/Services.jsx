const Services = () => {
  const services = [
    {
      icon: 'fa-laptop-code',
      title: 'Full-Stack Development',
      description: 'Modern web and mobile applications using the latest technologies and frameworks.',
      features: ['React, Vue.js, Angular', 'Node.js, Python, Java', 'Mobile App Development'],
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for optimal performance.',
      features: ['AWS, Azure, GCP', 'Cloud Migration', 'Serverless Architecture'],
    },
    {
      icon: 'fa-cogs',
      title: 'DevOps & Automation',
      description: 'Streamlined development workflows and automated deployment pipelines.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
    },
    {
      icon: 'fa-shield-alt',
      title: 'Security & DevSecOps',
      description: 'Comprehensive security solutions integrated into your development process.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management'],
    },
    {
      icon: 'fa-brain',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Custom AI Models', 'Workflow Automation', 'Process Automation'],
    },
    {
      icon: 'fa-chart-line',
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies for modern business growth.',
      features: ['Strategy Consulting', 'Technology Assessment', 'Implementation Support'],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions for modern businesses - from full-stack development to cloud infrastructure and security
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 hover:-translate-y-2.5 hover:shadow-lg transition-all duration-300 group border-1 border-blue-600"
            >
              <div className="w-20 h-20 bg-gradient-instagram rounded-3xl flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="list-none space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

