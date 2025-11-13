import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] min-h-[580px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur text-[#4B70E2] font-medium text-xs sm:text-sm shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#9B59B6]" /> Available for opportunities
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight">
              Nurkalam Abdurrahman
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-gray-700 max-w-2xl">
              Front-End Developer crafting clean, performant interfaces with React, TypeScript, and modern CSS.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-r from-[#9B59B6] to-[#4B70E2] text-white font-semibold shadow-lg shadow-[#4B70E2]/20 hover:opacity-95 transition-opacity">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300/80 bg-white/70 backdrop-blur text-gray-900 font-medium hover:bg-white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}
