import { motion } from 'framer-motion';

const Fade = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Fade;
