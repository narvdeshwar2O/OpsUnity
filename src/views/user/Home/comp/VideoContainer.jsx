import { Opsunity } from "@/assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const VideoContainer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        className="overflow-hidden aspect-video w-[80%] rounded-[clamp(5px,4vw,30px)] transition-all duration-300">

        <video
          src={Opsunity}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover aspect-video"
        />
      </motion.div> 
    </div>
  );
};

export default VideoContainer;
