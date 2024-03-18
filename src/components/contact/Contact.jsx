import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
      <div className='links'>
        <h1>you can get in touch</h1>
        <h2>with me via 
          <span><a href="https://github.com/githbkrishna">github</a></span></h2>
        <h3>
          or <span><a href="mailto:krishna636471@gmail.com">mail</a></span> 
          or <span><a href="https://www.linkdin.com/in/hariomsingh97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>linkedIn</a></span>.
        </h3>
      </div>
      <div className="forms">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40735018.386820555!2d77.47289066555291!3d51.45323183702775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709377809753!5m2!1sen!2sin" width="600" height="450" style={{border:2}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form action="" method='POST'>
          <div className='formdiv'>
            <input type="text" name='fullname' placeholder='enter name'/>
            <input type="text" name='email' placeholder='enter email'/>
            <textarea name="textarea" id="" cols="30" rows="10" placeholder='tell me query'></textarea>
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact