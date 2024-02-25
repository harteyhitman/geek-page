import React from 'react'
import Button from '../../componnents/button'
import Message from '../../componnents/message'

const Messagefromceo = () => {
  return (
    <div className='message-cont'>
        <Message />
        <p>At our LMS, we are dedicated to breaking down barriers and making education accessible and affordable for everyone. Our mission is to truly democratize higher education, ensuring that individuals from all walks of life can access the knowledge and skills they need to thrive. We believe in assisting individuals in developing fulfilling careers by providing comprehensive learning opportunities that align with industry demands. Join us on this transformative journey and unlock a world of possibilities for your personal and professional growth.</p>
        <Button  className='join_us' label='Join Us'/>
    </div>
  )
}

export default Messagefromceo