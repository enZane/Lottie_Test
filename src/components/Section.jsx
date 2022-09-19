import { motion } from "framer-motion";

export default function Section({ scroll, offset, color }) {
  return (
    <motion.div
      className="pl-2"
      animate={{
        borderLeft:
          scroll > offset ? `4px solid ${color}` : "4px solid transparent",
      }}
      transition={{ duration: 4, ease: "easeInOut" }}
    >
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
    </motion.div>
  );
}
