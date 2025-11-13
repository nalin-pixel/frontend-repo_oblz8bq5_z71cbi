import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks, your message has been sent!')
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Name" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B70E2]" />
        <input required type="email" placeholder="Email" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B70E2]" />
      </div>
      <input placeholder="Subject" className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B70E2]" />
      <textarea required placeholder="Message" rows="5" className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B70E2]" />
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-r from-[#9B59B6] to-[#4B70E2] text-white font-semibold shadow-lg shadow-[#4B70E2]/20 hover:opacity-95 transition-opacity">
          Send Message
        </button>
        {status && <span className="text-sm text-gray-700">{status}</span>}
      </div>
    </form>
  )
}
