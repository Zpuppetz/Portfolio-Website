import { useState } from 'react'
import './App.css'
import { MacbookScrollDemo } from './components/Scroll.jsx'
import CardSwap, { Card } from './components/CardSwap.jsx'


function App() {

  return (
    <div className="w-full">
      {/* Macbook Section */}
      <div className="w-full bg-white dark:bg-[#0B0B0F] min-h-screen flex items-center justify-center">
        <MacbookScrollDemo />
      </div>

      {/* Projects Section */}
      <section className="w-full py-5 px-4 bg-gradient-to-b from-slate-900 to-black min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 text-center">Projects</h2>
            <p className="text-center text-gray-400 mb-16">Explore my latest work and projects</p>

            <div className="flex justify-center mt-32">
              <CardSwap width={500} height={400} pauseOnHover={true} delay={4000}>
                <Card customClass="bg-gradient-to-br from-blue-600 to-blue-800">
                  <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Smart Scape AI</h3>
                    <p className="text-sm text-gray-200">Description of your first project</p>
                  </div>
                </Card>
                <Card customClass="bg-gradient-to-br from-purple-600 to-purple-800">
                  <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Project Two</h3>
                    <p className="text-sm text-gray-200">Description of your second project</p>
                  </div>
                </Card>
                <Card customClass="bg-gradient-to-br from-pink-600 to-pink-800">
                  <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Project Three</h3>
                    <p className="text-sm text-gray-200">Description of your third project</p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

