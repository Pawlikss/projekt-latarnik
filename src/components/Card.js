import { useState } from 'react'
import { motion, useMotionValue, useTransform, useAnimationControls } from 'framer-motion';

const Card = ({ id, text, color }) => {
    const [state, setState] = useState({ karty: [] })

    const motionValue = useMotionValue(0);
    
    const animControls = useAnimationControls();
    
    const style = {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: color,
      boxShadow: '5px 10px 18px #888888',
      borderRadius: 10,
      height: 200,
      width: 200,
      verticalAlign: 'middle',
      display: 'table-cell',
      position: 'absolute',
      left: '45%',
    };


    return (
      <center>
        <motion.div
          drag='x'
          x={motionValue}
          dragConstraints={{ left: 0, right: 0}}
          style={style}
          children={text}
          animate={animControls}

          onDragEnd={(event, info) => {
            if (info.point.x >= 800 && info.point.x <= 1100) {
                animControls.start({ x: 0 });
            } else {
                animControls.start({
                  x: info.point.x <= 800 ? -700 : 700,
                  opacity: 0
                });
            }

            if(info.point.x <= 800) {
              setState(prevValue => ({
                karty: [...prevValue.karty, 0]
              }))
            }
            if(info.point.x >= 1100) {
              setState(prevValue => ({
                karty: [...prevValue.karty, 1]
              }))
              
            }
          }
        }/>
      </center>
    );
  };

  
  export default Card;