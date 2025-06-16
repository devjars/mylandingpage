import React from 'react'

function MessageForm() {
  return (
   <form className="w-full max-w-xl bg-white/5 p-8 rounded-2xl shadow-md backdrop-blur-md space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm mb-1 text-gray-300">Name*</label>
          <input
            id="name"
            type="text"
            className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ctmblue"
            placeholder="Your name"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm mb-1 text-gray-300">Email*</label>
          <input
            id="email"
            type="email"
            className="p-3 rounded-lg bg-white/10 border  border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ctmblue"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm mb-1 text-gray-300">Message*</label>
          <textarea
            id="message"
            rows={5}
            className="p-3 rounded-lg font-secondary bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ctmblue"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-ctmblue hover:bg-blue-600 transition-colors text-white py-3 px-6 rounded-xl font-semibold"
        >
          Send Message
        </button>
      </form>
  )
}

export default MessageForm
