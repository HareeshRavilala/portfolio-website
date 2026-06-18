import { motion } from "framer-motion";

function SkillCard({
  name,
  percentage,
  icon
}) {
  return (

    <motion.div
      className="skill-card glass"
      whileHover={{
        scale: 1.05
      }}
    >

      <div className="skill-icon">
        {icon}
      </div>

      <h5>{name}</h5>

      <div className="progress">

        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`
          }}
        >
          {percentage}%
        </div>

      </div>

    </motion.div>
  );
}

export default SkillCard;