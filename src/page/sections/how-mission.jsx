import React from 'react'
import MissionH1 from '../../componnents/mission-h1'
import Button from '../../componnents/button'
import GreenMAn from '../../assets/images/green-reading.svg'
import OurEngagedColleges from '../../componnents/our-engaged-colleges'

const HowMission = () => {
    return (
        <div className='our_mission'>
            <div className="upper">
                <div className="our_mission_text">
                    <div className='text_btn_mission'>
                        <MissionH1 />
                        <p>Our commitment is to make education accessible and <br /> 
                        affordable to all. Geeks of Gurukul has been founded with a <br />
                         mission to solve the problem of learning outcomes. We <br /> 
                         encourage a culture of creativity, collaboration and continuous <br /> 
                         learning, and empower our talented team to develop solutions  <br /> 
                         for future-oriented growth. We constantly push the boundaries <br /> 
                         of the possible. Thus, exploring emerging technologies and <br /> 
                         looking forward to future trends.</p>
                        <Button className='join_us' label='Join Us' />
                    </div>
                    <div className="mission-img">
                        <img src={GreenMAn} alt="" />
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="engaged_text">
                <span>Our</span>
                <span>Engaged</span>
                <span>Colleges</span>
                </div>
                <OurEngagedColleges />
            </div>
        </div>
    )
}

export default HowMission