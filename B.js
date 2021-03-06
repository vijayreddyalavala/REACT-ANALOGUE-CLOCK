import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import { Circle } from "./ui";
import Hands from './Hands'

const Mark = styled.div`
  position: absolute;
  font-weight: bold;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  text-align: center;
  transform: translate3d(-50%, 0, 0)
    rotate(${props => props.rotation || "0deg"});
  transform-origin: center 140px;
`;

const marks = Array(12).fill();

const Clock = ({ className, size }) => {
  const time = useClock('Hyderabad');

  return (
    <Circle size={size} className={className}>
      {marks.map((_, i) => (
        
        <Mark  
        style={{transform: `rotate(${i*30}deg)`}}
        key={i} 
        size={size}
        >
           <p style={{transform: `rotate(${-i*30}deg)`}}>
          {i === 0 ? 12 : i}
          </p>
        </Mark>
      ))}
      <Hands time={time} borderWidth={0} />
    </Circle>
  );
};

const StyledClock = styled(Clock)`
  position: relative;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.15);
  background: white;
`;

export default StyledClock;





