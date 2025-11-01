import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Zap, Droplet, Plus, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SplitReminder() {
  const [bills] = useState([
    { id: 1, name: "WiFi", amount: 300000, icon: Wifi, color: "bg-blue-500" },
    {
      id: 2,
      name: "Listrik",
      amount: 250000,
      icon: Zap,
      color: "bg-yellow-500",
    },
    { id: 3, name: "Air", amount: 150000, icon: Droplet, color: "bg-cyan-500" },
  ]);

  const [reminders, setReminders] = useState({
    beforeDue: true,
    whatsapp: true,
    email: false,
  });

  const [selectedBill, setSelectedBill] = useState<(typeof bills)[0] | null>(
    null
  );

  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const perPerson = totalAmount / 2; // Assuming 2 roommates

  // Chart data for last 3 months, all bars #B7262B
  const chartData = {
    labels: ["Agustus", "September", "Oktober"],
    datasets: [
      {
        label: "Total Pengeluaran (Rp)",
        data: [650000, 700000, totalAmount],
        backgroundColor: ["#B7262B", "#B7262B", "#B7262B"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const history = [
    { bulan: "September 2025", status: "✓ Lunas" },
    { bulan: "Agustus 2025", status: "✓ Lunas" },
    { bulan: "Juli 2025", status: "✓ Lunas" },
  ];

  const handleSplitBill = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="bg-primary text-white p-6">
        <h1 className="text-3xl font-heading font-bold text-center">
          Patungan & Pengingat
        </h1>
        <p className="text-center text-white/90 mt-2">
          Kelola tagihan bareng teman kost 💸
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-gradient-to-br from-primary to-primary-dark text-white shadow-hover">
            <div className="text-center">
              <p className="text-white/80 mb-2">Total Tagihan Bulan Ini</p>
              <h2 className="text-4xl font-heading font-bold mb-4">
                Rp {totalAmount.toLocaleString("id-ID")}
              </h2>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-sm text-white/90 mb-1">Bagian kamu:</p>
                <p className="text-2xl font-bold">
                  Rp {perPerson.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bills List */}
        <div className="space-y-4">
          {bills.map((bill, index) => (
            <motion.div
              key={bill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-5 hover:shadow-hover transition-smooth cursor-pointer"
                onClick={() => setSelectedBill(bill)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${bill.color} w-12 h-12 rounded-full flex items-center justify-center`}
                    >
                      <bill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">
                        {bill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Per orang: Rp{" "}
                        {(bill.amount / 2).toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">
                      Rp {bill.amount.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" size="lg" className="font-bold">
            <Plus className="w-5 h-5 mr-2" />
            Tambah Tagihan
          </Button>
          <Button
            size="lg"
            onClick={handleSplitBill}
            className="gradient-primary text-white font-bold"
          >
            <DollarSign className="w-5 h-5 mr-2" />
            Bagi Rata
          </Button>
        </div>

        {/* Grafik Pengeluaran */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="font-heading font-bold text-lg mb-4">
              Pengeluaran 3 Bulan Terakhir
            </h3>
            <div className="h-56 bg-accent rounded-lg flex items-center justify-center">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </Card>
        </motion.div>

        {/* Riwayat Patungan & Pengingat Otomatis */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4">
                Riwayat Patungan
              </h3>
              <div className="space-y-3">
                {history.map((item) => (
                  <div
                    key={item.bulan}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{item.bulan}</span>
                    <span className="font-semibold text-green-600">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4">
                Pengingat Otomatis
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={reminders.beforeDue}
                    onChange={() =>
                      setReminders((r) => ({ ...r, beforeDue: !r.beforeDue }))
                    }
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    Ingatkan 3 hari sebelum jatuh tempo
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={reminders.whatsapp}
                    onChange={() =>
                      setReminders((r) => ({ ...r, whatsapp: !r.whatsapp }))
                    }
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    Notifikasi WhatsApp
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={reminders.email}
                    onChange={() =>
                      setReminders((r) => ({ ...r, email: !r.email }))
                    }
                    className="w-5 h-5 accent-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    Email reminder
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center py-4"
        >
          <Card className="p-4 bg-accent">
            <p className="text-muted-foreground italic">
              💡 Patungan itu ringan kalau bareng 😄
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Modal Detail Tagihan */}
      <AnimatePresence>
        {selectedBill && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBill(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary"
                onClick={() => setSelectedBill(null)}
              >
                ✕
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`${selectedBill.color} w-12 h-12 rounded-full flex items-center justify-center`}
                >
                  <selectedBill.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-xl">
                    {selectedBill.name}
                  </h2>
                  <p className="text-primary font-bold text-lg">
                    Rp {selectedBill.amount.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-sm text-muted-foreground">Dibagi 2 orang:</p>
                <p className="font-bold text-lg">
                  Rp {(selectedBill.amount / 2).toLocaleString("id-ID")}
                </p>
              </div>
              <div className="mt-4">
                <Button className="w-full gradient-primary text-white font-bold">
                  Tandai Sudah Dibayar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
