export interface Kost {
  id: number;
  name: string;
  price: string;
  address: string;
  description: string;
  facilities: string[];
  coords: [number, number];
  image: string; // <-- tambahkan properti image
}

export const kosts: Kost[] = [
  {
    id: 1,
    name: "Kost Mawar",
    price: "Rp 900.000/bulan",
    address: "Jl. Mawar No. 1, Denpasar",
    description: "Kost nyaman dekat kampus dan tempat makan.",
    facilities: ["WiFi", "AC", "Parkir", "Dapur"],
    coords: [-8.6705, 115.2126],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Kost Melati",
    price: "Rp 1.200.000/bulan",
    address: "Jl. Melati No. 2, Denpasar",
    description: "Lingkungan tenang, kamar mandi dalam.",
    facilities: ["WiFi", "Laundry", "CCTV"],
    coords: [-8.672, 115.215],
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Kost Harmoni Putri",
    price: "Rp 950.000/bulan",
    address: "Jl. Gunung Salak No.9, Denpasar Barat",
    description:
      "Clean female kost with private bathroom, seated toilet, AC, and shared kitchen. Ideal for peaceful study life near campus.",
    facilities: [
      "WiFi",
      "Laundry",
      "Private Bathroom",
      "AC",
      "Shared Kitchen",
      "Motor Parking",
    ],
    coords: [-8.6704, 115.2127],
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Kost Ceria Campuran",
    price: "Rp 1.100.000/bulan",
    address: "Jl. Raya Kampus UNUD, Jimbaran",
    description:
      "Modern mixed kost with lounge, private bath, and shared workspace. Perfect for students at UNUD Jimbaran.",
    facilities: [
      "WiFi",
      "Hot Water",
      "Large Parking",
      "Fridge",
      "Smart TV",
      "Common Area",
    ],
    coords: [-8.7992, 115.1772],
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Kost Putra Surya Indah",
    price: "Rp 800.000/bulan",
    address: "Jl. Gatot Subroto Barat, Denpasar Utara",
    description:
      "Affordable male kost for tech students. Includes private bathroom and laundry service.",
    facilities: ["WiFi", "Laundry", "Private Bath", "Motor Parking"],
    coords: [-8.6871, 115.2194],
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Kost Cendana",
    price: "Rp 1.250.000/bulan",
    address: "Jl. Nusa Indah No.5, Denpasar Timur",
    description:
      "Creative kost with rooftop and artistic atmosphere. Perfect for ISI Denpasar art students.",
    facilities: ["WiFi", "Hot Water", "Kitchen", "Rooftop", "Parking"],
    coords: [-8.683, 115.2479],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Kost Melati Asri",
    price: "Rp 1.000.000/bulan",
    address: "Jl. Gunung Soputan No.22, Denpasar Barat",
    description:
      "Women-only kost with CCTV and shared kitchen. Calm environment near UNMAS Denpasar.",
    facilities: ["WiFi", "AC", "Kitchen", "CCTV", "Laundry"],
    coords: [-8.6729, 115.2344],
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Kost Angkasa Putra",
    price: "Rp 850.000/bulan",
    address: "Jl. Tukad Yeh Aya, Denpasar Selatan",
    description:
      "Male kost near UNWAR with lounge and wide parking. Great choice for engineering students.",
    facilities: ["WiFi", "Parking", "Hot Water", "Laundry"],
    coords: [-8.6689, 115.2322],
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Kost Damai Sentosa",
    price: "Rp 1.300.000/bulan",
    address: "Jl. Kampus UNUD No.4, Jimbaran",
    description: "Exclusive kost near UNUD Jimbaran with ocean view balcony.",
    facilities: ["WiFi", "AC", "Hot Water", "Balcony", "Car Parking"],
    coords: [-8.7968, 115.1785],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Kost Sakura",
    price: "Rp 950.000/bulan",
    address: "Jl. Trengguli No.6, Denpasar Timur",
    description:
      "Cozy and quiet kost for women with mini garden and reading corner.",
    facilities: ["WiFi", "Laundry", "Garden", "AC"],
    coords: [-8.6822, 115.2515],
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Kost Bambu Hijau",
    price: "Rp 1.000.000/bulan",
    address: "Jl. Pratama No.88, Nusa Dua",
    description:
      "Eco-friendly kost built with bamboo near Nusa Dua beach. Ideal for tourism students.",
    facilities: ["WiFi", "Private Bathroom", "Open Space", "Kitchen"],
    coords: [-8.8025, 115.2243],
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    name: "Kost Sanur Raya",
    price: "Rp 750.000/bulan",
    address: "Jl. Danau Buyan No.2, Sanur",
    description:
      "Affordable kost near Sanur with kitchen and good ventilation.",
    facilities: ["WiFi", "Private Bathroom", "Fridge", "Parking"],
    coords: [-8.6875, 115.2649],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 13,
    name: "Kost Pelangi Asih",
    price: "Rp 1.050.000/bulan",
    address: "Jl. Gunung Agung, Denpasar Barat",
    description:
      "Bright colorful kost for female students, perfect for sharing with friends.",
    facilities: ["WiFi", "Laundry", "Shared Kitchen", "AC"],
    coords: [-8.6712, 115.2129],
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 14,
    name: "Kost Arjuna",
    price: "Rp 900.000/bulan",
    address: "Jl. Arjuna No.17, Denpasar Selatan",
    description:
      "Spacious male kost with fast internet and parking space. Ideal for IT students.",
    facilities: ["WiFi", "Private Bathroom", "Laundry", "AC"],
    coords: [-8.6655, 115.2298],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 15,
    name: "Kost Dewi Sri",
    price: "Rp 1.200.000/bulan",
    address: "Jl. Dewi Sri No.15, Denpasar Barat",
    description:
      "Premium kost for female students with modern design, 24h CCTV, and private balcony.",
    facilities: [
      "WiFi",
      "AC",
      "Private Bathroom",
      "CCTV",
      "Balcony",
      "Laundry",
    ],
    coords: [-8.6698, 115.2119],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 16,
    name: "Kost Merah Putra",
    price: "Rp 850.000/bulan",
    address: "Jl. Raya Tukad Pakerisan No.8, Denpasar Selatan",
    description:
      "Simple kost for male students with fast WiFi and private toilet. Friendly owner and easy access to UNWAR.",
    facilities: ["WiFi", "Private Bathroom", "Laundry"],
    coords: [-8.6664, 115.2325],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 17,
    name: "Kost Ayodya Campuran",
    price: "Rp 1.000.000/bulan",
    address: "Jl. Gunung Agung Barat No.11, Denpasar Utara",
    description:
      "Spacious kost with shared kitchen and rooftop view. Open for all students. Great community vibes.",
    facilities: ["WiFi", "Kitchen", "Rooftop", "Laundry", "Parking"],
    coords: [-8.6883, 115.2215],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 18,
    name: "Kost Srikandi",
    price: "Rp 1.050.000/bulan",
    address: "Jl. Gunung Soputan Timur No.4, Denpasar Barat",
    description:
      "Bright, colorful kost for women, includes AC, laundry, and kitchenette.",
    facilities: ["WiFi", "AC", "Laundry", "Kitchenette", "CCTV"],
    coords: [-8.6715, 115.235],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 19,
    name: "Kost Merta Jaya",
    price: "Rp 950.000/bulan",
    address: "Jl. Tukad Badung No.14, Renon",
    description:
      "Male kost near Renon with garden and motorcycle parking. Calm neighborhood and helpful owner.",
    facilities: ["WiFi", "Private Bathroom", "Laundry", "Garden"],
    coords: [-8.6645, 115.2317],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 20,
    name: "Kost Taman Sari",
    price: "Rp 1.100.000/bulan",
    address: "Jl. Taman Griya No.3, Jimbaran",
    description:
      "Clean kost surrounded by trees with quiet environment. Perfect for focused study.",
    facilities: ["WiFi", "Private Bathroom", "Laundry", "Parking"],
    coords: [-8.7984, 115.178],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 21,
    name: "Kost Anggrek Manis",
    price: "Rp 1.000.000/bulan",
    address: "Jl. Raya Trengguli Timur No.9, Denpasar Timur",
    description:
      "Female kost with private bathroom and pastel-themed rooms. Loved by art students.",
    facilities: ["WiFi", "Laundry", "Private Bathroom", "Kitchen"],
    coords: [-8.6817, 115.2492],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 22,
    name: "Kost Nusantara",
    price: "Rp 1.200.000/bulan",
    address: "Jl. Kampus Baru No.10, Jimbaran",
    description:
      "Diverse kost for Indonesian students from various islands, with shared kitchen and lounge.",
    facilities: ["WiFi", "Kitchen", "Lounge", "Laundry", "Parking"],
    coords: [-8.796, 115.1799],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 23,
    name: "Kost Pertiwi Asri",
    price: "Rp 1.150.000/bulan",
    address: "Jl. Gunung Soputan Barat No.2, Denpasar Barat",
    description:
      "Bright female kost with modern interiors and secure gate. Near shops and cafes.",
    facilities: ["WiFi", "AC", "CCTV", "Private Bathroom"],
    coords: [-8.6708, 115.2138],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 24,
    name: "Kost Sejahtera Putra",
    price: "Rp 850.000/bulan",
    address: "Jl. Tukad Balian No.7, Denpasar Selatan",
    description:
      "Friendly kost with family-like atmosphere, private toilet, and large parking space.",
    facilities: ["WiFi", "Laundry", "Private Bathroom", "Parking"],
    coords: [-8.6701, 115.233],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
];
