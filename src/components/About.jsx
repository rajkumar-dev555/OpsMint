const About = () => {
  const expertise = [
    {
      icon: 'fa-shield-alt',
      title: 'Security-First Approach',
      description: 'We integrate security at every stage of development, ensuring your systems are protected from the ground up.',
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Excellence',
      description: 'Our cloud solutions are optimized for performance, scalability, and cost-efficiency across all major platforms.',
    },
    {
      icon: 'fa-robot',
      title: 'AI Integration',
      description: 'We leverage cutting-edge AI technologies to automate processes and deliver intelligent solutions.',
    },
    {
      icon: 'fa-code',
      title: 'Full-Stack Development',
      description: 'Our expert developers create seamless, end-to-end solutions using the latest technologies for both frontend and backend systems.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose OpsMint?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a forward-thinking IT service company that combines technical expertise
              with innovative AI-powered solutions. Our team of experienced professionals
              delivers cutting-edge development, cloud, DevOps, and security services
              that drive business success.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-instagram rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${item.icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border-l-4 border-primary relative">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-instagram rounded-full flex items-center justify-center">
                <i className="fas fa-quote-left text-white"></i>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 mb-6 italic">
                OpsMint's team brought deep technical insight and strategic thinking to every stage of our project. From development to cloud and security, they've been a trusted partner in driving innovation.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">CTO, TechInnovate</p>
              </div>
            </div>
          </div>

          {/* Visual Animation */}
          <div className="flex justify-center items-center backgroundColor-red-500">
            <div className="relative w-80 h-80">
              {[1, 2, 3, 4].map((orbit, idx) => (
                <div
                  key={idx}
                  className="absolute border-2 border-primary/30 rounded-full animate-spin"
                  style={{
                    width: `${100 + idx * 50}px`,
                    height: `${100 + idx * 50}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDuration: `${10 + idx * 5}s`,
                    animationDirection: idx % 2 === 0 ? 'normal' : 'reverse',
                  }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-instagram text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {['AI', 'Cloud', 'DevOps', 'Security'][idx]}
                  </div>
                </div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-instagram rounded-full flex items-center justify-center text-white text-2xl animate-pulse">
                <i className="fas fa-infinity"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

