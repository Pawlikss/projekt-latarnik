import { motion, useMotionValue, useAnimationControls } from 'framer-motion';

const Card = ({ id, text, color, state, setState }) => {
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
        if (info.point.x >= (window.innerWidth/2)-style.width*0.25 && info.point.x <= (window.innerWidth/2)+style.width*0.25) {
          animControls.start({ x: 0 });
        } else {
          animControls.start({
            x: info.point.x <= (window.innerWidth/2) ? -(window.innerWidth/2): (window.innerWidth/2)-70,
            opacity: 0,
            scale:0
          });
        }

        if (info.point.x <= (window.innerWidth/2)  - style.width * 0.25) {
          setState(current => [...current, { id, IsDragRight: 0 }])
        }
        if (info.point.x >= (window.innerWidth/2) - style.width * 0.25) {
          setState(current => [...current, { id, IsDragRight: 1 }])
        }
      }
      } />
  );
};


export default Card;