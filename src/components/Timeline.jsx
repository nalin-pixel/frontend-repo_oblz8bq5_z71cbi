import React from 'react'

export function Experience() {
  const items = [
    {
      role: 'Senior Front-End Developer',
      company: 'TechNova Labs',
      time: '2022 — Present',
      points: [
        'Led UI architecture for a multi-tenant platform',
        'Reduced bundle size by 35% with code-splitting',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'PixelForge Studio',
      time: '2019 — 2022',
      points: [
        'Built accessible design system used across 10+ apps',
        'Improved Lighthouse scores to 95+ across sites',
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.role} className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-poppins font-semibold text-gray-900">{item.role}</div>
              <div className="text-sm text-gray-600">{item.company}</div>
            </div>
            <div className="text-sm text-gray-600">{item.time}</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-gray-700">
            {item.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function Education() {
  const items = [
    {
      title: 'B.Sc. in Computer Science',
      org: 'National University',
      time: '2015 — 2019',
    },
    {
      title: 'Certified Front-End Developer',
      org: 'Coursera / Meta',
      time: '2021',
    },
  ]
  return (
    <div className="space-y-4">
      {items.map((e) => (
        <div key={e.title} className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">{e.title}</div>
              <div className="text-sm text-gray-600">{e.org}</div>
            </div>
            <div className="text-sm text-gray-600">{e.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
