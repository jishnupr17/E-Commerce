// import axios from 'axios';
// import React, { useState } from 'react'
// import { ClipLoader } from 'react-spinners';
// import { toast } from 'react-toastify';


// const Contact =() =>{

//   const [name,setName] =useState("");
//   const [email,setEmail] =useState("");
//   const [message,setMessage] =useState("");
//   const [loading,setLoading] =useState(false);
  


// const sendMail = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   if (!name.trim() || !email.trim() || !message.trim()) {
//     toast.error("All fields are required.");
//     setLoading(false);
//     return;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     toast.error("Please enter a valid email address.");
//     setLoading(false);
//     return;
//   }

//   try {
//     const { data } = await axios.post(
//       "http://localhost:5000/send/mail",
//       { name, email, message },
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     setName("");
//     setEmail("");
//     setMessage("");
//     toast.success(data.message);
//   } catch (error) {
//     toast.error(error.response?.data?.message || "An error occurred.");
//   } finally {
//     setLoading(false);
//   }
// };



//   return (
//     <section className='contact'>
//       <form onSubmit={sendMail}>

//         <h1>Contact Us</h1>
//         <div>
//           <label>Name</label>
//           <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Meassage</label>
//           <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
//         </div>
//         <button type='submit' disabled={loading} style={{
//           display:'flex',
//           justifyContent:'center',
//           alignItems:'center',
//           gap:'15px'
//         }}>
//           {loading && <ClipLoader  size={20}  color='white'/>}
// send message
//         </button>
//       </form>
//       </section>
//   )
// }

// export default Contact

import axios from 'axios';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Input validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Send request to backend
    try {
      const { data } = await axios.post(
        "http://localhost:5000/send/mail",
        { name, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;







