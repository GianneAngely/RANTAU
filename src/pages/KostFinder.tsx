import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map as MapIcon } from "lucide-react";
import { kosts } from "../data/kosts";
import { kostQuizQuestions } from "../data/questions";
import MapView from "../components/MapView";
import { Button } from "../components/ui/button";

export default function KostFinder() {
  const [mode, setMode] = useState<"quiz" | "explore" | "results">("explore");
  const [quizStep, setQuizStep] = useState(0);
  const [budget, setBudget] = useState(1000000);
  const [showMap, setShowMap] = useState(false);
  const [selectedKost, setSelectedKost] = useState<(typeof kosts)[0] | null>(
    null
  );
  const [quizAnswers, setQuizAnswers] = useState<
    Record<number, string | number | string[]>
  >({});
  const [pendingAnswer, setPendingAnswer] = useState<
    string | number | string[] | undefined
  >(undefined);

  const currentQuestion =
    mode === "quiz" && quizStep < kostQuizQuestions.length
      ? kostQuizQuestions[quizStep]
      : null;

  function handleQuizNext(answer?: string | number | string[]): void {
    let nextAnswers = { ...quizAnswers };
    let nextStep = quizStep;

    if (answer !== undefined) {
      nextAnswers = { ...quizAnswers, [currentQuestion?.id as number]: answer };
      setQuizAnswers(nextAnswers);
      nextStep = quizStep + 1;
    } else if (
      currentQuestion &&
      (currentQuestion.type === "range" || currentQuestion.type === "multiple")
    ) {
      nextAnswers = { ...quizAnswers, [currentQuestion.id]: pendingAnswer };
      setQuizAnswers(nextAnswers);
      nextStep = quizStep + 1;
    } else {
      nextStep = quizStep + 1;
    }

    if (nextStep < kostQuizQuestions.length) {
      setQuizStep(nextStep);
      setPendingAnswer(undefined);
    } else {
      setMode("results");
      setQuizStep(0);
      setPendingAnswer(undefined);
    }
  }

  function handleQuizBack() {
    if (quizStep > 0) {
      setQuizStep(quizStep - 1);
      setPendingAnswer(undefined);
    } else {
      setMode("explore");
    }
  }

  useEffect(() => {
    if (mode === "quiz" && currentQuestion) {
      if (currentQuestion.type === "range") {
        setPendingAnswer(budget);
      } else if (currentQuestion.type === "multiple") {
        setPendingAnswer([]);
      } else {
        setPendingAnswer(undefined);
      }
    }
    // eslint-disable-next-line
  }, [quizStep, mode]);

  // KostCard lokal, gambar dari data jika ada, fallback ke Unsplash jika tidak ada
  function KostCard({
    kost,
    onDetail,
  }: {
    kost: (typeof kosts)[0];
    onDetail: () => void;
  }) {
    return (
      <div className="overflow-hidden shadow-card hover:shadow-hover transition-smooth rounded-xl bg-white flex flex-col h-full">
        <div className="relative h-40 w-full">
          <img
            src={
              kost.image ||
              `https://source.unsplash.com/400x300/?kost,room,indonesia&sig=${kost.id}`
            }
            alt={kost.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg mb-1">{kost.name}</h3>
          <p className="text-[#B7262B] font-bold mb-1">{kost.price}</p>
          <p className="text-gray-600 text-sm mb-2">{kost.address}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {kost.facilities.slice(0, 3).map((f, i) => (
              <span
                key={i}
                className="bg-[#F6F6F6] px-2 py-1 rounded-full text-xs"
              >
                {f}
              </span>
            ))}
            {kost.facilities.length > 3 && (
              <span className="bg-[#F6F6F6] px-2 py-1 rounded-full text-xs">
                +{kost.facilities.length - 3}
              </span>
            )}
          </div>
          <Button className="w-full mt-auto" onClick={onDetail}>
            Lihat Detail
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-gradient-to-r from-[#B7262B] to-[#8D1C22] text-white py-8 px-6">
        <h1 className="text-3xl font-heading font-bold mb-2 text-center">
          Smart Kost Finder
        </h1>
        <p className="opacity-90 text-center">Cari kost sesuai gaya hidupmu</p>
      </div>

      {mode === "explore" && (
        <div className="p-6 max-w-6xl mx-auto">
          <div className="flex gap-4 mb-6">
            <Button
              onClick={() => setMode("quiz")}
              className="flex-1 font-bold"
            >
              <Search className="w-5 h-5 mr-2" />
              Mulai Quiz
            </Button>
            <Button
              onClick={() => setShowMap(!showMap)}
              variant="outline"
              className="flex-1 font-bold"
            >
              <MapIcon className="w-5 h-5 mr-2" />
              {showMap ? "Grid" : "Peta"}
            </Button>
          </div>

          {showMap ? (
            <div className="h-[600px]">
              <MapView
                kosts={kosts}
                onKostClick={(kost) => setSelectedKost(kost)}
              />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kosts.map((kost) => (
                <KostCard
                  key={kost.id}
                  kost={kost}
                  onDetail={() => setSelectedKost(kost)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {mode === "quiz" && currentQuestion && (
        <div className="p-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  Pertanyaan {quizStep + 1} dari {kostQuizQuestions.length}
                </span>
                <span>
                  {Math.round(
                    ((quizStep + 1) / kostQuizQuestions.length) * 100
                  )}
                  %
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#B7262B]"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      ((quizStep + 1) / kostQuizQuestions.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={quizStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {currentQuestion.question}
                </h2>

                {/* Range */}
                {currentQuestion.type === "range" && (
                  <div className="py-8">
                    <input
                      type="range"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step={currentQuestion.step}
                      value={
                        typeof pendingAnswer === "number"
                          ? pendingAnswer
                          : budget
                      }
                      onChange={(e) => {
                        setBudget(Number(e.target.value));
                        setPendingAnswer(Number(e.target.value));
                      }}
                      className="w-full h-2 bg-[#F6F6F6] rounded-lg appearance-none cursor-pointer accent-[#B7262B]"
                      style={{
                        background: (() => {
                          const val =
                            typeof pendingAnswer === "number"
                              ? pendingAnswer
                              : budget;
                          const min = currentQuestion.min || 0;
                          const max = currentQuestion.max || 1;
                          const percent = ((val - min) / (max - min)) * 100;
                          return `linear-gradient(to right, #B7262B 0%, #B7262B ${percent}%, #F6F6F6 ${percent}%, #F6F6F6 100%)`;
                        })(),
                      }}
                    />
                    <p className="text-center font-bold text-[#B7262B] text-2xl mt-4">
                      Rp{" "}
                      {(typeof pendingAnswer === "number"
                        ? pendingAnswer
                        : budget
                      ).toLocaleString("id-ID")}
                    </p>
                  </div>
                )}

                {/* Multiple choice */}
                {currentQuestion.type === "multiple" && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map(
                      (option: string, idx: number) => (
                        <label
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-[#B7262B] hover:bg-[#F6F6F6] cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            className="accent-[#B7262B]"
                            checked={
                              Array.isArray(pendingAnswer)
                                ? pendingAnswer.includes(option)
                                : false
                            }
                            onChange={(e) => {
                              const prev: string[] = Array.isArray(
                                pendingAnswer
                              )
                                ? pendingAnswer
                                : [];
                              if (e.target.checked) {
                                setPendingAnswer([...prev, option]);
                              } else {
                                setPendingAnswer(
                                  prev.filter((o) => o !== option)
                                );
                              }
                            }}
                          />
                          <span>{option}</span>
                        </label>
                      )
                    )}
                  </div>
                )}

                {/* Single choice */}
                {(currentQuestion.type === "choice" ||
                  currentQuestion.type === "text") && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map(
                      (option: string, idx: number) => (
                        <motion.button
                          key={idx}
                          className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-[#B7262B] hover:bg-[#F6F6F6] text-left transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizNext(option)}
                        >
                          {option}
                        </motion.button>
                      )
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-8">
              {quizStep > 0 && (
                <Button
                  onClick={handleQuizBack}
                  variant="outline"
                  className="flex-1"
                >
                  Kembali
                </Button>
              )}
              {(currentQuestion.type === "range" ||
                currentQuestion.type === "multiple") && (
                <Button
                  onClick={() => handleQuizNext()}
                  className="flex-1"
                  disabled={
                    currentQuestion.type === "range"
                      ? pendingAnswer === undefined
                      : !Array.isArray(pendingAnswer) ||
                        pendingAnswer.length === 0
                  }
                >
                  {quizStep === kostQuizQuestions.length - 1
                    ? "Selesai"
                    : "Lanjut"}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {mode === "results" && (
        <div className="p-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Kami menemukan {kosts.length} kost untukmu!
            </h2>
            <p className="text-gray-600">Berdasarkan preferensimu</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kosts.slice(0, 6).map((kost, idx) => (
              <KostCard
                key={kost.id}
                kost={kost}
                onDetail={() => setSelectedKost(kost)}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => setMode("explore")} variant="outline">
              Lihat Semua Kost
            </Button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedKost && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedKost(null)}
          >
            <motion.div
              className="bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={
                    selectedKost.image ||
                    `https://source.unsplash.com/800x600/?bali,indonesia,boarding,room&sig=${selectedKost.id}`
                  }
                  alt={selectedKost.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedKost(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedKost.name}
                </h2>
                <p className="text-[#B7262B] text-2xl font-bold mb-4">
                  {selectedKost.price}
                </p>
                <p className="text-gray-600 mb-4">{selectedKost.description}</p>

                <h3 className="font-bold mb-2">Fasilitas:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedKost.facilities.map(
                    (facility: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-[#F6F6F6] px-3 py-1 rounded-full text-sm"
                      >
                        {facility}
                      </span>
                    )
                  )}
                </div>

                <h3 className="font-bold mb-2">Lokasi:</h3>
                <p className="text-gray-600 mb-4">{selectedKost.address}</p>

                <div className="h-64 rounded-xl overflow-hidden mb-4">
                  <MapView
                    kosts={[selectedKost]}
                    center={selectedKost.coords}
                    zoom={15}
                  />
                </div>

                <Button className="w-full">Hubungi Pemilik</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
