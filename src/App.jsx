import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import { Experience, Education } from './components/Timeline'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900">
      <Navbar />
      <Hero />

      <Section
        id="about"
        eyebrow="About"
        title="About Nurkalam"
        subtitle="Front-End Developer focused on clean architecture, performance, and delightful user experiences. I love building resilient design systems and pixel-perfect interfaces."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm md:col-span-2">
            <p className="leading-relaxed text-gray-700">
              With 5+ years crafting modern web apps, I combine strong design sensibilities with robust engineering. I specialize in React ecosystems, TypeScript, and Tailwind, with a focus on accessibility and performance. I enjoy partnering with product and design teams to ship work that scales.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm">
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-medium text-gray-900">Location:</span> Dhaka, Bangladesh</li>
              <li><span className="font-medium text-gray-900">Role:</span> Front-End Developer</li>
              <li><span className="font-medium text-gray-900">Focus:</span> React, TypeScript, Design Systems</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Core Strengths">
        <Skills />
      </Section>

      <Section id="tech" eyebrow="Tech Stack" title="Tools I Use">
        <TechStack />
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected Work" subtitle="A snapshot of projects that highlight my approach to building reliable, elegant interfaces.">
        <Projects />
      </Section>

      <Section id="experience" eyebrow="Experience" title="Professional Timeline">
        <Experience />
      </Section>

      <Section id="education" eyebrow="Education & Certificates" title="Learning Journey">
        <Education />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build something great">
        <Contact />
      </Section>

      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Nurkalam Abdurrahman. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
