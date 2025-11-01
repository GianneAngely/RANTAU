import { motion } from "framer-motion";
import { Building2, Phone, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { owners } from "@/data/mockData";

export default function Owner() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="bg-primary text-white p-6">
        <h1 className="text-3xl font-heading font-bold text-center">UMKM Kost Owners</h1>
        <p className="text-center text-white/90 mt-2">Dukung UMKM Kost Go Digital 💡</p>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-gradient-to-br from-primary to-primary-dark text-white shadow-hover">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-white" />
              <h2 className="text-3xl font-heading font-bold mb-2">120+</h2>
              <p className="text-white/90">
                UMKM kost terhubung lewat RANTAU
              </p>
            </div>
          </Card>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 bg-accent text-center">
            <h3 className="font-heading font-bold text-xl mb-2">
              Punya kost tapi bingung promosi?
            </h3>
            <p className="text-muted-foreground mb-4">
              Yuk, gabung di RANTAU! Kami bantu kost kamu terkoneksi dengan ribuan mahasiswa.
            </p>
            <Button size="lg" className="gradient-primary text-white font-bold">
              Daftar Sekarang
            </Button>
          </Card>
        </motion.div>

        {/* Owners List */}
        <div className="space-y-4">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-5 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl font-bold">
                    {owner.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-lg">{owner.name}</h3>
                        <p className="text-sm text-muted-foreground">{owner.location}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold">{owner.rating}</span>
                      </div>
                    </div>

                    <p className="text-foreground text-sm mb-3 leading-relaxed">
                      {owner.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        <Building2 className="w-3 h-3 mr-1" />
                        {owner.kost_owned.length} Kost
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Pengalaman {owner.experience}
                      </Badge>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        {owner.monthly_earnings}/bulan
                      </Badge>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto hover:bg-primary hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <Card className="p-6 bg-accent">
            <h4 className="font-heading font-bold mb-2">Kenapa Join RANTAU?</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Dashboard digital untuk kelola kost</li>
              <li>✅ Jangkauan ribuan mahasiswa potensial</li>
              <li>✅ Analytics dan insights bisnis</li>
              <li>✅ Gratis untuk UMKM lokal!</li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
