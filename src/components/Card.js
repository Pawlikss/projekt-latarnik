import { useState } from 'react'
import { motion, useMotionValue, useTransform, useAnimationControls } from 'framer-motion';

const Card = ({ id, text, color }) => {
  let cards = []
  const [state, setState] = useState({ karty: [] })

  const motionValue = useMotionValue(0);

  const animControls = useAnimationControls();

  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: color,
    borderRadius: 15,
    height: 190,
    width: 190,
    verticalAlign: 'middle',
    display: 'table-cell',
    position: 'absolute',
    left: '0px',
    padding: '5px'
  };
  console.log(cards)

  return (
    <motion.div
      drag='x'
      x={motionValue}
      dragConstraints={{ left: 0, right: 0 }}
      style={style}
      children={text}
      id={id}
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

        if (info.point.x <= 800) {
          setState(prevValue => ({
            karty: [
              ...prevValue.karty,
              { id, IsDragRight: 0 },
            ],
          }))
        }
        if (info.point.x >= 1100) {
          setState(prevValue => ({
            karty: [
              ...prevValue.karty,
              { id, IsDragRight: 1 },
            ],
          }))
        }
      }
      } />
  );
};


export default Card;