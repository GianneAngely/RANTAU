import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImage from "@/assets/rantau-logo.png";
import { removeBackground, loadImageFromUrl } from "@/utils/backgroundRemoval";

interface LogoWithBackgroundRemovalProps {
  size?: "small" | "medium" | "large";
  showSubtext?: boolean;
}

export default function LogoWithBackgroundRemoval({ size = "medium", showSubtext = false }: LogoWithBackgroundRemovalProps) {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  const sizes = {
    small: "w-12 h-12",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        const img = await loadImageFromUrl(logoImage);
        const blob = await removeBackground(img);
        const url = URL.createObjectURL(blob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Failed to remove background:', error);
        // Fallback to original logo
        setProcessedLogoUrl(logoImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

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
        src={processedLogoUrl || logoImage}
        alt="RANTAU Logo"
        className={sizes[size]}
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
        style={{ 
          opacity: isProcessing ? 0.5 : 1,
          transition: 'opacity 0.3s ease'
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
