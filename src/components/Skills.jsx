import React from 'react'

const skills = [
  { name: 'UI Engineering', level: 'Expert' },
  { name: 'Design Systems', level: 'Advanced' },
  { name: 'Accessibility (a11y)', level: 'Advanced' },
  { name: 'Performance Optimization', level: 'Advanced' },
  { name: 'Animations & Motion', level: 'Advanced' },
  { name: 'Testing (Jest/RTL)', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((s) => (
        <div key={s.name} className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="font-medium text-gray-900">{s.name}</div>
            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#9B59B6]/10 to-[#4B70E2]/10 text-[#4B70E2] font-medium">
              {s.level}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
