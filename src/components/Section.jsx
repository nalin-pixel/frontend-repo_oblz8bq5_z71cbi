import React from 'react'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="text-[#4B70E2] font-semibold text-xs sm:text-sm tracking-wide uppercase">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-gray-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-gray-700">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
