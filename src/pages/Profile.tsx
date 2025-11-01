import { motion } from "framer-motion";
import { User, MapPin, Users, MessageSquare, Award, Mail, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Profile() {
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pb-24 bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 text-center shadow-hover">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-2xl font-heading font-bold mb-2">
              Selamat Datang di RANTAU!
            </h2>
            <p className="text-muted-foreground mb-6">
              Daftar atau masuk untuk mengakses semua fitur
            </p>

            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full gradient-primary text-white font-bold"
              >
                Daftar Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2"
              >
                Masuk
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3">Atau daftar dengan:</p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Google
                </Button>
                <Button variant="outline" className="flex-1">
                  Facebook
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Mock user data for logged in state
  const userData = {
    name: "Ayu Kartika",
    email: "ayu.kartika@undhira.ac.id",
    campus: "Universitas Dhyana Pura",
    badges: [
      { name: "Kost Hunter", emoji: "🏠" },
      { name: "Roommate Friendly", emoji: "👯" },
      { name: "Rantau Explorer", emoji: "🌍" }
    ],
    stats: {
      savedKosts: 5,
      potentialRoommates: 8,
      forumPosts: 3
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="bg-primary text-white p-6">
        <h1 className="text-3xl font-heading font-bold text-center">Profil Saya</h1>
        <p className="text-center text-white/90 mt-2">Kelola akun dan aktivitasmu</p>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 text-center shadow-card">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
              {userData.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-heading font-bold mb-1">{userData.name}</h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <School className="w-4 h-4" />
              <span className="text-sm">{userData.campus}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{userData.email}</span>
            </div>
          </Card>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold">Badge Pencapaian</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {userData.badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-accent p-4 rounded-lg text-center hover:shadow-md transition-smooth"
                >
                  <div className="text-3xl mb-2">{badge.emoji}</div>
                  <p className="text-xs font-semibold">{badge.name}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Activity Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="font-heading font-bold mb-4">Aktivitas Kamu</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{userData.stats.savedKosts}</p>
                <p className="text-xs text-muted-foreground">Kost Favorit</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{userData.stats.potentialRoommates}</p>
                <p className="text-xs text-muted-foreground">Match Roommate</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{userData.stats.forumPosts}</p>
                <p className="text-xs text-muted-foreground">Postingan Forum</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <Button variant="outline" className="w-full justify-start" size="lg">
            Edit Profil
          </Button>
          <Button variant="outline" className="w-full justify-start" size="lg">
            Preferensi Pencarian
          </Button>
          <Button variant="outline" className="w-full justify-start" size="lg">
            Notifikasi
          </Button>
          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive" size="lg">
            Keluar
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
