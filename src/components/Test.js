import "../index.css";
import { motion, useMotionValue, useTransform, useAnimation } from "framer";

const style = {
    backgroundImage: "URL(https://img.icons8.com/color/452/GeeksforGeeks.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#55ccff",
    boxShadow: "5px 10px 18px #888888",
    borderRadius: 10,
    height: 300,
  };

const Test = () => {
  const motionValue = useMotionValue(0);
  
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  
  const animControls = useAnimation();
  
  return (
    <div className="App">
      <motion.div
        center
        drag="x"
        x={motionValue}
        rotate={rotateValue}
        opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        style={style}
        onDragEnd={(event, info) => {
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 });
          } else {
            animControls.start({ x: info.point.x < 0 ? -200 : 200 });
          }
        }}
      />
    </div>
  );
}
 
export default Test;