import { motion } from "framer-motion";
import logoImage from "@/assets/rantau-logo.png";

interface AnimatedLogoProps {
  size?: "small" | "medium" | "large";
  showSubtext?: boolean;
}

export default function AnimatedLogo({ size = "medium", showSubtext = false }: AnimatedLogoProps) {
  const sizes = {
    small: "w-12 h-12",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
      className="flex flex-col items-center justify-center"
    >
      <motion.img
        src={logoImage}
        alt="RANTAU Logo"
        className={sizes[size]}
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
      />
      
      {showSubtext && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.5
          }}
          className="text-sm text-white mt-2 text-center font-medium"
        >
          Ruang Temu Anak Perantau
        </motion.p>
      )}
    </motion.div>
  );
}
