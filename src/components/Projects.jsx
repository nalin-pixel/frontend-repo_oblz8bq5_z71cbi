import React from 'react'

const projects = [
  {
    title: 'Enterprise Design System',
    desc: 'Scalable UI kit and theming for multi-brand apps.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time charts and role-based access control.',
    tags: ['React', 'Redux', 'ECharts', 'Node'],
  },
  {
    title: 'Marketing Website Revamp',
    desc: 'SEO, performance, and accessibility upgrades.',
    tags: ['Next.js', 'Tailwind', 'A11y'],
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="group rounded-xl border border-gray-200/80 bg-white overflow-hidden shadow-sm">
          <div className="h-40 bg-gradient-to-br from-[#9B59B6]/15 to-[#4B70E2]/15" />
          <div className="p-5">
            <h3 className="font-poppins font-semibold text-gray-900 text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
