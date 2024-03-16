import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }: AnimationProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);
	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: { left: "-100%" },
					visible: { left: "50%" },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 1, ease: "easeIn" }}
				style={{ position: "absolute" }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;

interface AnimationProps {
	children: JSX.Element;
	width?: "fit-content" | "100%";
}
