import React from 'react'
import { Code2, Figma, Cpu, Wand2 } from 'lucide-react'

const tech = [
  { name: 'React', description: 'Hooks, Context, Router, Suspense', icon: Code2 },
  { name: 'TypeScript', description: 'Typesafe frontends at scale', icon: Cpu },
  { name: 'Tailwind CSS', description: 'Utility-first, theming, dark mode', icon: Wand2 },
  { name: 'Figma', description: 'Design handoff & components', icon: Figma },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tech.map(({ name, description, icon: Icon }) => (
        <div key={name} className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#9B59B6]/15 to-[#4B70E2]/15 text-[#4B70E2]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{name}</div>
              <div className="text-sm text-gray-600">{description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
