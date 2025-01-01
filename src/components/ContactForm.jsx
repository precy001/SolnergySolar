import React, {useState, useRef} from 'react'
import Footer from './Footer' 
import axios from 'axios'

const ContactForm = () => {

  const [name, setName] = useState('')
  const handleNameChange = (e) => {
      setName(e.target.value)
  }

  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }

  const [message, setMessage] = useState('')
  const handleMessageChange = (e) => {
      setMessage(e.target.value)
  }

  const error = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0){
      error.current.innerHTML = 'Error: name section is blank!'
    }else if(email.length === 0){
      error.current.innerHTML = 'Error: email section is blank!'
    }else if(message.length === 0){
      error.current.innerHTML = 'Error: messahe section is blank!'
    }else{
      const url = "http://localhost/solnergySolar/backend/contact.php";
      let fdata = new FormData();
      fdata.append('name', name)
      fdata.append('email', email)
      fdata.append('message', message)
      axios.post(url, fdata).then(response => alert(response.data)).catch(error => alert(error))
    }
  }

  return (
    <div>
        <div className="form">
            <form action="" method="post">
            <div className="error" ref={error}>

            </div>
              <div className='label'>
                  Name
              </div>
                <input
                 type="text" 
                 value={name}
                 onChange={handleNameChange} 
                 className='name-input' 
                 placeholder= "E.g John Doe" 
                 name='name'              
                 />

              <div className='label'>
                  Email Address
              </div>
                <input
                 type="text" 
                 value={email}
                 onChange={handleEmailChange} 
                 className='name-input' 
                 placeholder= "johndoe@example.com" 
                 name='email'             
                 />

              <div className='label'>
                  Message
              </div>
                <textarea 
                 type="text" 
                 value={message}
                 onChange={handleMessageChange} 
                 className='message-input' 
                 placeholder= "Type a message"     
                 name='message'           
                 />

              <div className="submit">
                 <button type="submit" className='submit-btn' name='submit' onClick={(event) => handleSubmit(event)}>
                    Submit
                 </button>
                 </div>
            </form>

<center>
            <div className="map">
                 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126815.38738664726!2d3.4767910578729357!3d6.649294251035864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee62d44ab573%3A0x44ddf6ea18edfcb3!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1735197069004!5m2!1sen!2sng"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                 </div>
</center>
        </div>
        <div className="footeer-container">
                  <Footer />
                 </div>
    </div>
  )
}

export default ContactForm
