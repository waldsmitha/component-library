import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;

//Use Example
{
  /* <AnimateSharedLayout>
  <Toggle title="How Do I Start?">
    <div className="answer">
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem
        accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat
        corporis.
      </p>
    </div>
  </Toggle>
</AnimateSharedLayout>; */
}
