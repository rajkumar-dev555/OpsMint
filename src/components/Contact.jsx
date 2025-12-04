import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear result message when user starts typing
    if (result) setResult('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult('Sending....')
    
    const formDataToSend = new FormData(e.target)
    formDataToSend.append("access_key", "06c93e34-3466-4ccf-8dfc-07f8c7cd218e") // Replace with your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully!")
        e.target.reset()
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        console.log("Error", data)
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setResult("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: 'fa-envelope', title: 'Email', value: 'hello@opsmintech.com' },
    { icon: 'fa-phone', title: 'Phone', value: '+91 99408 04524' },
    { icon: 'fa-map-marker-alt', title: 'Location', value: '145 lg Nager Irugur Coimbatore 641103' },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {/* Ready to transform your business with cutting-edge IT solutions?
              Let's discuss your project and create something amazing together. */}
              Let’s discuss your next big idea. Whether you need custom software, cloud transformation, or AI solutions, our team is ready to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-instagram rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-gray-50 focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-gray-50 focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-gray-50 focus:ring-4 focus:ring-primary/15"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-gray-50 focus:ring-4 focus:ring-primary/15 resize-y min-h-[120px]"
              ></textarea>
            </div>
            
            {/* Result Message */}
            {result && (
              <div className={`p-4 rounded-xl text-center font-medium ${
                result.includes('Successfully') 
                  ? 'bg-green-50 text-green-700 border-2 border-green-200' 
                  : result.includes('Sending')
                  ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                  : 'bg-red-50 text-red-700 border-2 border-red-200'
              }`}>
                {result}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-instagram text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

