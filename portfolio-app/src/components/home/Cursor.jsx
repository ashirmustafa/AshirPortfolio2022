import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Animatedcursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <div >
        <AnimatedCursor
        style={{zIndex:"2000"}}
        innerStyle={10}
        outerSize={40}
        color="170,51,106"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
        />
    </div>
  )
}

export default Cursor