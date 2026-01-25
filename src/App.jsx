import { useState } from 'react'
import './App.css'
import { MacbookScrollDemo } from './components/Scroll.jsx'
import ProjectCardsGrid from './components/ProjectCards.jsx'
import Navbar from './components/Navbar.jsx'
import ContactForm from './components/ContactForm.jsx'


function App() {

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Macbook Section */}
      <section id="home" className="w-full bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F] to-[#0a1628] min-h-screen flex items-center justify-center pt-20">
        <MacbookScrollDemo />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-4 bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#0B0B0F] min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Projects</h2>
            <p className="text-center text-gray-400 mb-16">Explore my latest work and projects</p>

            <div className="mt-16">
              <ProjectCardsGrid />
            </div>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="w-full py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-black min-h-screen">
        <div className="w-full max-w-6xl mx-auto" >
          <h2 className="text-4xl font-bold text-white mb-2 text-center">Certifications</h2>
          <p className="text-center text-gray-400 mb-16">Professional credentials and achievements</p>

          {/* CHANGED: Switched to Flexbox to center the items */}
          <div className="flex flex-wrap justify-center gap-6">

            {/* Certification Card 1 */}
            {/* CHANGED: Added width classes (md:w-[45%] lg:w-[30%]) to mimic grid sizing while allowing centering */}
            <div className="w-full md:w-[45%] lg:w-[30%] group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Full Stack Web Development (MERN)</h3>
              <p className="text-gray-400 text-sm mb-4">Coding Blocks</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">2023</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">Frontend</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">Backend</span>
              </div>
            </div>

            {/* Certification Card 2 */}
            <div className="w-full md:w-[45%] lg:w-[30%] group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full" />
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Agentic AI: From Learner to Builder</h3>
              <p className="text-gray-400 text-sm mb-4">CSRBOX (In collaboration with IBM SkillsBuild)</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">2025</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300">Agentic AI</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20 px-4 bg-gradient-to-b from-black to-slate-900 min-h-screen">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-2 text-center">Experience</h2>
          <p className="text-center text-gray-400 mb-16">My professional journey</p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500 rounded-full" />

            {/* Experience Item 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12 pl-8 md:pl-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs mb-3">July 2025 - August-2025</span>
                  <h3 className="text-xl font-bold text-white mb-1">Summer Trainee</h3>
                  <p className="text-purple-400 font-medium mb-3">CSRBOX</p>
                  <p className="text-gray-400 text-sm">Developed and presented an AI-driven solution prototype, applying multimodal AI techniques and teamwork to address real-world problem scenarios.</p>
                  {/* <p className="text-gray-400 text-sm">Achieved recognition by being selected among the top 4 projects out of 400+ participating teams, demonstrating innovation and impact.</p> */}
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-900 shadow-lg shadow-violet-500/50 order-1 md:order-2" />
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block" />
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12 pl-8 md:pl-0">
              <div className="md:w-1/2 md:pr-12 order-2 hidden md:block" />
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50 order-1" />
              <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs mb-3"> Jan 2026 - Present</span>
                  <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
                  <p className="text-purple-400 font-medium mb-3">Polar AI</p>
                  <p className="text-gray-400 text-sm">Built and maintained multiple client projects. Implemented CI/CD pipelines and automated testing, reducing deployment time by 60%.</p>
                </div>
              </div>
            </div>

            {/* Experience Item 3
            <div className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-fuchsia-500/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs mb-3">2020 - 2022</span>
                  <h3 className="text-xl font-bold text-white mb-1">Junior Developer</h3>
                  <p className="text-purple-400 font-medium mb-3">Digital Agency</p>
                  <p className="text-gray-400 text-sm">Started my professional journey building responsive websites and learning modern development practices. Contributed to 15+ successful projects.</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-fuchsia-500 rounded-full border-4 border-slate-900 shadow-lg shadow-fuchsia-500/50 order-1 md:order-2" />
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 bg-gradient-to-b from-slate-900 to-black min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-2 text-center">Get In Touch</h2>
          <p className="text-center text-gray-400 mb-16">Let's work together on your next project</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

                <div className="space-y-6">
                  {/* Email */}
                  <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white group-hover:text-purple-300 transition-colors">keshavgupta4302@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+1234567890" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white group-hover:text-purple-300 transition-colors">+91 8588858571</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                  <a href="https://github.com/Zpuppetz" target='blank' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/keshav-gupta-bb5495252/" target='blank' className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

