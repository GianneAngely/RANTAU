import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Kost } from "../data/kosts";

interface KostCardProps {
  kost: Kost;
  onClick?: () => void;
}

export default function KostCard({ kost, onClick }: KostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="transition-smooth"
    >
      <Card
        className="overflow-hidden shadow-card hover:shadow-hover transition-smooth"
        onClick={onClick}
      >
        <div className="relative h-48">
          <img
            src={`https://source.unsplash.com/400x300/?kost,room,indonesia&sig=${kost.id}`}
            alt={kost.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">
              {kost.name}
            </h3>
            <p className="text-primary font-bold text-xl mt-1">{kost.price}</p>
          </div>

          <p className="text-gray-600 text-sm mb-2">{kost.address}</p>

          <div className="flex flex-wrap gap-2">
            {kost.facilities.slice(0, 3).map((facility, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {facility}
              </Badge>
            ))}
            {kost.facilities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{kost.facilities.length - 3}
              </Badge>
            )}
          </div>

          <Button className="w-full gradient-primary text-white font-semibold">
            Lihat Detail
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
