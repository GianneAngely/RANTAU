import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, Users, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LogoWithBackgroundRemoval from "@/components/LogoWithBackgroundRemoval";
import StoryCarousel from "@/components/StoryCarousel";
import heroBackground from "@/assets/rantau-hero-background.jpg";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Home,
      title: "Smart Kost Finder 🏘️",
      description: "Cari kost sesuai gaya hidupmu dengan quiz interaktif dan peta lengkap."
    },
    {
      icon: Users,
      title: "Roommate Matching 👯",
      description: "Temukan teman sekamar yang cocok, bukan yang nyebelin 😆."
    },
    {
      icon: Building2,
      title: "Koneksi UMKM Kost 💡",
      description: "Bantu pemilik kost lokal go digital dan berkembang bersama."
    },
    {
      icon: MessageSquare,
      title: "Forum Perantau 💬",
      description: "Curhat, sharing, dan ketemu teman baru sesama anak rantau."
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#C1272D]/70 to-[#C1272D]/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <LogoWithBackgroundRemoval size="large" showSubtext />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mt-8 mb-4"
          >
            RANTAU
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/90 mb-8"
          >
            Temukan kost, teman, dan cerita baru di kota perantauan
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => navigate("/kost-finder")}
              className="gradient-primary text-white font-bold text-lg px-8 py-6 shadow-hover"
            >
              Mulai Jelajahi
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/owner")}
              className="bg-white/90 backdrop-blur-sm border-2 border-white font-bold text-primary text-lg px-8 py-6 hover:bg-white"
            >
              Daftar Pemilik Kost
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Kenapa Harus RANTAU?
            </h2>
            <p className="text-muted-foreground text-lg">
              Semua yang kamu butuhkan sebagai anak perantau, dalam satu platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-hover transition-smooth h-full">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Carousel */}
      <StoryCarousel />

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-white text-center">
        <p className="font-semibold">© 2025 RANTAU — Dibangun oleh mahasiswa, untuk mahasiswa.</p>
        <p className="text-sm text-white/80 mt-2">
          Ruang Temu Anak Perantau di Bali
        </p>
      </footer>
    </div>
  );
}
