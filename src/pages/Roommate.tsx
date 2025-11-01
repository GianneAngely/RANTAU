import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roommates } from "@/data/mockData";
import roommate1 from "@/assets/roommate-1.jpg";
import roommate2 from "@/assets/roommate-2.jpg";

export default function Roommate() {
  const [mode, setMode] = useState<"intro" | "quiz" | "matching" | "results">("intro");
  const [quizStep, setQuizStep] = useState(0);
  const [currentRoommateIndex, setCurrentRoommateIndex] = useState(0);

  const quizQuestions = [
    {
      question: "Kamu tipe yang tidur jam berapa?",
      emoji: "😴",
      options: ["Sebelum jam 10", "Jam 11-12 malam", "Begadang sampai subuh", "Nggak tentu"]
    },
    {
      question: "Seberapa penting kebersihan kamar?",
      emoji: "🧹",
      options: ["Super penting!", "Lumayan penting", "Santai aja", "Bersih-bersih seminggu sekali"]
    },
    {
      question: "Kamu suka belajar dimana?",
      emoji: "📚",
      options: ["Di kamar", "Di perpus", "Di kafe", "Nggak suka belajar 😅"]
    },
    {
      question: "Hobi kamu apa?",
      emoji: "🎨",
      options: ["Gaming", "Olahraga", "Seni/Musik", "Nonton series"]
    },
    {
      question: "Tipe teman sekamar ideal?",
      emoji: "🤝",
      options: ["Yang sering ngobrol", "Yang respect privacy", "Yang bisa diajak kemana-mana", "Yang nyantai"]
    }
  ];

  const handleStartQuiz = () => {
    setMode("quiz");
  };

  const handleNextQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setMode("matching");
      setTimeout(() => setMode("results"), 3000);
    }
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (currentRoommateIndex < roommates.length - 1) {
      setCurrentRoommateIndex(currentRoommateIndex + 1);
    } else {
      setCurrentRoommateIndex(0);
    }
  };

  const currentRoommate = roommates[currentRoommateIndex];
  const roommateImages = [roommate1, roommate2];

  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="bg-primary text-white p-6">
        <h1 className="text-3xl font-heading font-bold text-center">Roommate Matching</h1>
        <p className="text-center text-white/90 mt-2">Temukan teman sekamar yang cocok!</p>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <AnimatePresence mode="wait">
          {mode === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <Card className="p-8 text-center shadow-card">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  👯
                </motion.div>
                
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Cari Teman Sekamar yang Cocok
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Jawab beberapa pertanyaan sederhana, dan kami akan carikan teman sekamar 
                  yang paling compatible denganmu!
                </p>
                
                <Button
                  size="lg"
                  onClick={handleStartQuiz}
                  className="gradient-primary text-white font-bold px-8 py-6 text-lg"
                >
                  Mulai Quiz Matching
                </Button>
              </Card>
            </motion.div>
          )}

          {mode === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="mt-8"
            >
              <Card className="p-8 shadow-card">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-muted-foreground">
                      Pertanyaan {quizStep + 1} dari {quizQuestions.length}
                    </span>
                    <span className="text-3xl">{quizQuestions[quizStep].emoji}</span>
                  </div>
                  
                  <div className="w-full bg-accent rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold text-center">
                    {quizQuestions[quizStep].question}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={handleNextQuestion}
                      className="py-6 hover:bg-primary hover:text-white transition-smooth"
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {quizStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setQuizStep(quizStep - 1)}
                    className="w-full mt-6"
                  >
                    Kembali
                  </Button>
                )}
              </Card>
            </motion.div>
          )}

          {mode === "matching" && (
            <motion.div
              key="matching"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-16"
            >
              <Card className="p-12 text-center shadow-card">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Loader2 className="w-12 h-12 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Mencari Match Terbaik...
                </h3>
                <p className="text-muted-foreground">
                  Sedang mencocokkan kepribadianmu dengan ribuan mahasiswa lain ✨
                </p>
              </Card>
            </motion.div>
          )}

          {mode === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Card className="p-6 bg-gradient-to-r from-primary to-primary-light text-white text-center shadow-hover">
                  <h2 className="text-2xl font-heading font-bold mb-2">
                    🎉 Kami Menemukan {roommates.length} Match!
                  </h2>
                  <p className="text-white/90">
                    Swipe kartu untuk melihat profil mereka
                  </p>
                </Card>
              </motion.div>

              <motion.div
                key={currentRoommateIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative"
              >
                <Card className="overflow-hidden shadow-hover">
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent">
                    <img 
                      src={roommateImages[currentRoommate.id % 2]}
                      alt={currentRoommate.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto mt-8 border-4 border-white shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                      <span className="text-primary font-bold text-lg">
                        {currentRoommate.compatibility}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-heading font-bold">{currentRoommate.name}</h3>
                      <p className="text-muted-foreground">{currentRoommate.campus}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-accent p-3 rounded-lg">
                        <p className="text-muted-foreground mb-1">Jadwal Tidur</p>
                        <p className="font-semibold">{currentRoommate.sleep_schedule}</p>
                      </div>
                      <div className="bg-accent p-3 rounded-lg">
                        <p className="text-muted-foreground mb-1">Kebersihan</p>
                        <p className="font-semibold">{currentRoommate.cleanliness}</p>
                      </div>
                      <div className="bg-accent p-3 rounded-lg col-span-2">
                        <p className="text-muted-foreground mb-1">Gaya Belajar</p>
                        <p className="font-semibold">{currentRoommate.study_style}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Minat & Hobi:</p>
                      <div className="flex flex-wrap gap-2">
                        {currentRoommate.interests.map((interest, index) => (
                          <Badge key={index} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 md:gap-3 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => handleSwipe("left")}
                        className="flex-1 border-2 px-3 py-2 md:px-8 md:py-3 h-auto text-sm md:text-base"
                      >
                        <X className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                        Skip
                      </Button>
                      <Button
                        onClick={() => handleSwipe("right")}
                        className="flex-1 gradient-primary text-white px-3 py-2 md:px-8 md:py-3 h-auto text-sm md:text-base"
                      >
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                        Chat
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <p className="text-center text-sm text-muted-foreground italic">
                💡 Kalian sama-sama suka begadang buat nugas ☕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
