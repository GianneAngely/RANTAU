import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import confetti from "canvas-confetti";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    // Show subtext after logo animation
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 800);

    // Confetti effect
    const confettiTimer = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B7262B', '#FFFFFF']
      });
    }, 1200);

    // Complete splash screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(subtextTimer);
      clearTimeout(confettiTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
    >
      <AnimatedLogo size="large" showSubtext={false} />
      
      {showSubtext && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-xl font-heading font-bold text-primary mb-2">
            RANTAU
          </p>
          <p className="text-sm text-muted-foreground">
            Ruang Temu Anak Perantau
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
