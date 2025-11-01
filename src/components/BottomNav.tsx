import { Home, MapPin, Users, DollarSign, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/kost-finder", icon: MapPin, label: "Kost" },
  { path: "/roommate", icon: Users, label: "Roommate" },
  { path: "/split-reminder", icon: DollarSign, label: "Split" },
  { path: "/forum", icon: MessageSquare, label: "Forum" },
  { path: "/profile", icon: User, label: "Profile" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[0_-1px_5px_rgba(0,0,0,0.08)] z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center flex-1 h-full group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-0 left-0 right-0 mx-auto w-10 h-1 bg-primary rounded-b-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              <Icon 
                className={`w-5 h-5 mb-1 transition-smooth ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              
              <span 
                className={`text-xs transition-smooth ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
