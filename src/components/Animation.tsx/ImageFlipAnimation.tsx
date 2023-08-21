import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ImageFlipAnimation = ({
  children,
  align,
  width,
}: ImageFlipAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width: width, textAlign: align }}>
      <motion.div
        variants={{
          hidden: { rotateX: "75deg" },
          visible: { rotateX: "0deg" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ImageFlipAnimation;

interface ImageFlipAnimationProps {
  children: JSX.Element;
  align?: "left" | "center";
  width?: "fit-content" | "100%";
}
