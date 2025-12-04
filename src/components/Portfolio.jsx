// import { useState } from 'react'

// const Portfolio = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null)

//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'Full-stack development with AI-powered recommendations',
//     },
//     {
//       title: 'Cloud Migration',
//       description: 'Seamless migration to AWS with 99.9% uptime',
//     },
//     {
//       title: 'DevOps Automation',
//       description: 'CI/CD pipeline reducing deployment time by 80%',
//     },
//   ]

//   return (
//     <section id="testimonials" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-5">
//         <header className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
//             Our Work
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Showcasing our expertise through successful projects
//           </p>
//         </header>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="relative rounded-3xl overflow-hidden shadow-sm hover:-translate-y-2.5 hover:shadow-lg transition-all duration-300"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="h-72 bg-gradient-instagram relative overflow-hidden">
//                 <div
//                   className={`absolute inset-0 bg-gray-900/90 flex flex-col justify-center items-center text-center text-white p-8 transition-opacity duration-300 ${
//                     hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
//                   <p className="mb-6 leading-relaxed">{project.description}</p>
//                   <button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
//                     View Project
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Portfolio


import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kerbha from "../images/kerbha_preview.png";
import nkdrop from "../images/nkdroptaxi_preview.png";
import datawomb from "../images/datawomb_preview.png";
import corizo from "../images/corizo_preview.png";

const projects = [
  {
    title: "Kerbha",
    subtitle: "Professional Business Portfolio",
    img: kerbha,
    link: "http://kerbha-site.s3-website.ap-south-1.amazonaws.com/",
  },
  {
    title: "NK Drop Taxi",
    subtitle: "Taxi Booking Platform",
    img: nkdrop,
    link: "https://nkdroptaxi.com/",
  },
  {
    title: "DataWomb",
    subtitle: "Data Analytics Solutions",
    img: datawomb,
    link: "https://datawomb.com/",
  },
  {
    title: "Corizo",
    subtitle: "Education & Training Platform",
    img: corizo,
    link: "https://corizo.in/",
  },
];

const Portfolio = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Work</h2>
          <p className="text-gray-900 mt-2">
            Showcasing our expertise through successful projects
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-md hover:scale-110 transition hidden md:block"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Scrollable Row */}
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-8 md:px-14"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-md hover:scale-110 transition hidden md:block"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
 