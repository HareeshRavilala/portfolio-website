import { motion } from "framer-motion";

function Loader() {

  return (
    <div className="loader-wrapper">

      <motion.div
        className="loader-circle"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <h4 className="mt-3">
        Loading Portfolio...
      </h4>

    </div>
  );
}

export default Loader;