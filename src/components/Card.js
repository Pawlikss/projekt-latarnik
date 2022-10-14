import { motion, useMotionValue, useTransform, useAnimation } from 'framer';

import '../index.css';

const Card = ({ text, color }) => {
    const motionValue = useMotionValue(0);
    
    const opacityValue = useTransform(
      motionValue,
      [-200, -150, 0, 150, 200],
      [0, 1, 1, 1, 0]
    );
    
    const animControls = useAnimation();
    
    const style = {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: color,
      boxShadow: '5px 10px 18px #888888',
      borderRadius: 10,
      height: 200,
      width: 200
    };
    
    return (
      <center>
        <motion.div
          center
          drag='x'
          x={motionValue}
          opacity={opacityValue}
          dragConstraints={{ left: -200, right: 200 }}
          style={style}
          children={text}

          onDragEnd={(event, info) => {
            if (Math.abs(info.point.x) <= 200) {
                animControls.start({ x: 950 });
            } else {
                animControls.start({ x: info.point.x < 0 ? -200 : 200 });
            }
          }}
        />
      </center>
    );
  };

  export default Card;