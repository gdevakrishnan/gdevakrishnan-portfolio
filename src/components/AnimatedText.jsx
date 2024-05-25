import React from 'react';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => {
  return (
    <h1 className='typing' style={{color: "#cdcdcd", lineHeight: "2.4rem", marginTop: "1rem", fontSize: "1.4rem"}}>
        <span style={{color: "#cdcdcd", fontSize: "20px", textTransform: "capitalize", fontWeight: "lighter"}}>I've experience in</span> <Typewriter
        options={{
          loop: true,
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("MERN Stack Development")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Full Stack Web3 Development")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Problem Solving With Java")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </h1>
  );
};

export default AnimatedText;
