import { useState } from "react"
import axios from "axios"
  
  
function MessageForm() {
  const [name,setname] = useState<string>('')
  const [email,setemail] = useState<string>("")
  const [message,setmessage] = useState<string>("")
  const [status, setStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const Handlesubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      setLoading(true);

      
    const data = {
      service_id: import.meta.env.VITE_SERVICE_KEY,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_USER_ID,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'ELLE POWER TRADING & SERVICES',
        message: message,
      },
    };
     try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      if (res.status === 200) {
        setname('');
        setemail('');
        setmessage('');
      }
    } catch (error) {
      console.error('Email failed:', error);
      setStatus(false);
    } finally {
      setLoading(false);

    }
    
  }


  return (
   <form onSubmit={Handlesubmit} className="w-full max-w-xl bg-white/5 p-8 rounded-2xl shadow-md backdrop-blur-md space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm mb-1 text-gray-300">Name*</label>
          <input
            id="name"
            type="text"
            className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ctmblue"
            placeholder="Your name"
            required
             value = {name}
            onChange={(e)=>setname(e.target.value)}
           
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
              value = {email}
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm mb-1 text-gray-300">Message*</label>
          <textarea
            id="message"
            rows={5}
            className="p-3 rounded-lg  bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ctmblue"
            placeholder="Tell me about your project..."
            required
              value = {message}
            onChange={(e)=>setmessage(e.target.value)}
          />
        </div>

      
        <button
        type="submit"
        disabled={loading}
        className={`bg-ctmblue hover:bg-blue-600  text-white py-3 px-6 rounded-xl font-semibold transition ${
          loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

         {status === true && (
        <p className="text-center text-sm text-green-700">Message sent successfully!</p>
      )}
      {status === false && (
        <p className="text-center text-sm text-red-700">Failed to send message. Please try again later.</p>
      )}
      </form>
  )
}

export default MessageForm
