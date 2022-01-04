import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const useScroll = (triggerOnce, threshold) => {
  const controls = useAnimation();
  const [element, view] = useInView({
    triggerOnce: triggerOnce,
    threshold: threshold,
    //   rootMargin: '-100px -px',
  });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

//Use Example

// const [element, controls] = useScroll();

// <motion.div
//     ref={element}
//     initial="hidden"
//     animate={controls}
//     variants={revealUp}>
// </motion.div>

export const LazyAnimation = (triggerOnce, threshold) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    // rootMargin: "-100px 0px",
    threshold: threshold,
  });

  return [ref, inView];
};

//Use Example

//  const [ref, inView] = LazyAnimation(false, 0.5);
{
  /* <StyledBioCard
  ref={ref}
  initial="hidden"
  animate={inView ? { opacity: 1 } : { opacity: 0 }}
></StyledBioCard>; */
}
