import { useEffect, useState } from 'react'

const Hero = () => {
  const [particles, setParticles] = useState([])
  const [blobs, setBlobs] = useState([])

  useEffect(() => {
    // Create more particles with variety
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 4,
    }))
    setParticles(particleArray)

    // Create animated gradient blobs
    const blobArray = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: `${20 + i * 25}%`,
      left: `${10 + i * 20}%`,
      delay: i * 0.5,
      size: `${200 + i * 100}px`,
    }))
    setBlobs(blobArray)
  }, [])

  const techItems = [
    { icon: 'fa-code', label: 'Full-Stack' },
    { icon: 'fa-cloud', label: 'Cloud' },
    { icon: 'fa-shield-alt', label: 'Security' },
    { icon: 'fa-cogs', label: 'DevOps' },
    { icon: 'fa-brain', label: 'AI/ML' },
    { icon: 'fa-database', label: 'DataOps' },
  ]

  const metrics = [
    { label: 'Security', value: 100 },
    { label: 'Performance', value: 99 },
    { label: 'Compliance', value: 100 },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden pt-20 pb-10"
    >
      {/* Animated Gradient Blobs Background - Darker */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {blobs.map((blob, index) => {
          const gradients = [
            'linear-gradient(to right, rgba(64, 93, 230, 0.4), rgba(131, 58, 180, 0.35), rgba(225, 48, 108, 0.3))',
            'linear-gradient(to right, rgba(131, 58, 180, 0.4), rgba(225, 48, 108, 0.35), rgba(253, 29, 29, 0.3))',
            'linear-gradient(to right, rgba(225, 48, 108, 0.4), rgba(253, 29, 29, 0.35), rgba(64, 93, 230, 0.3))',
            'linear-gradient(to right, rgba(253, 29, 29, 0.4), rgba(64, 93, 230, 0.35), rgba(131, 58, 180, 0.3))',
          ]
          return (
            <div
              key={blob.id}
              className="absolute rounded-full blur-3xl animate-blob"
              style={{
                top: blob.top,
                left: blob.left,
                width: blob.size,
                height: blob.size,
                background: gradients[index],
                animationDelay: `${blob.delay}s`,
                animationDuration: `${8 + index * 2}s`,
              }}
            />
          )
        })}
      </div>

      {/* Animated Grid Pattern - Darker */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(64, 93, 230, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(131, 58, 180, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }} />
      </div>

      {/* Floating Particles - Darker */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle) => {
          const colorMap = {
            0: 'rgba(64, 93, 230, 0.6)',   // primary - darker
            1: 'rgba(131, 58, 180, 0.6)',  // accent - darker
            2: 'rgba(225, 48, 108, 0.6)',  // pink - darker
            3: 'rgba(253, 29, 29, 0.6)',   // orange - darker
          }
          const colorIndex = particle.id % 4
          const particleColor = colorMap[colorIndex]
          return (
            <div
              key={particle.id}
              className="absolute rounded-full animate-float"
              style={{
                top: particle.top,
                left: particle.left,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particleColor,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                boxShadow: `0 0 ${particle.size * 3}px ${particleColor}`,
              }}
            />
          )
        })}
      </div>

      {/* Floating Shapes - Darker */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-lg bg-gradient-instagram opacity-20 animate-float-shape"
            style={{
              top: `${30 + i * 30}%`,
              left: `${70 + i * 10}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i * 2}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-gray-900">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="block mb-2">Innovative</span>
              <span className="block text-gradient">Technology Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transforming businesses through cutting-edge technology and expert consulting.
              We deliver custom solutions that drive growth, efficiency, and innovation
              for organizations of all sizes.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              {['Enterprise Solutions', 'Cloud Expertise', 'Security Focused'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-instagram text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md">
                <span>Challenge Us</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="bg-transparent text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 hover:border-primary hover:-translate-y-0.5 transition-all duration-300">
                <i className="fas fa-code"></i>
                <span>View Skills</span>
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex flex-col gap-8 items-center">
            {/* Tech Grid */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {techItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-gray-200 rounded-2xl p-4 text-center text-gray-900 hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center gap-2 shadow-sm"
                >
                  <i className={`fas ${item.icon} text-2xl text-primary`}></i>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Dashboard */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 w-full max-w-sm text-gray-900 shadow-lg">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <span className="font-semibold text-base">DevSecOps Command</span>
              </div>
              <div className="flex flex-col gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 font-medium min-w-[80px]">{metric.label}</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-[fillBar_2s_ease-out_forwards]"
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-green-500 min-w-[40px] text-right">{metric.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

