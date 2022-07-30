import React from 'react'
import AnimatedCursor from 'react-animated-cursor'


const Cursor = () => {
  return (
    <div >
        <AnimatedCursor
        style={{zIndex:"2000"}}
        innerStyle={{border:'2px solid #ffffff'}}
        outerSize={40}
        innerSize={10}
        color="135, 57, 250"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
        outerStyle={{border:'2px solid #ffffff'}}
        // outerStyle={{background: 'rgb(135, 57, 175)', opacity: '0.5'}}
        />
    </div>
  )
}

export default Cursor