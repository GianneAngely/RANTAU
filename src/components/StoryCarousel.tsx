import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { stories } from "@/data/mockData";

export default function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="py-12 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Cerita Anak Rantau 📖
          </h2>
          <p className="text-muted-foreground">
            Kisah nyata mahasiswa perantau yang menemukan rumah kedua lewat RANTAU
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-card min-h-[250px] flex flex-col justify-center"
            >
              <p className="text-lg text-foreground italic mb-4 leading-relaxed">
                "{stories[currentIndex].quote}"
              </p>
              <div className="text-right">
                <p className="font-semibold text-primary">— {stories[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{stories[currentIndex].campus}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-smooth"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-smooth"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
