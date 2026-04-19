import { motion } from 'framer-motion';

const Slide = ({ children, direction = 'left', delay = 0, ...props }) => {
  const variants = {
    initial: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : 50 
    },
    animate: { 
      opacity: 1, 
      x: 0 
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
