import React from 'react'
import './Progress.css'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Progress = () => {
  return (
    <div>
        <div className="progress__container">
            <div className="progress__box">
            <CountUp end={5} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
                <div className='progress__title'>Projects Completed</div>
            </div>
            <div className="progress__box">
            <CountUp end={3} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
                <div className='progress__title'>Happy Clients</div>
                </div>
            <div className="progress__box">
            <CountUp end={1} redraw={true} duration={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
                <div className='progress__title'>Years of experience</div>
                </div>
        </div>
    </div>
  )
}

export default Progress