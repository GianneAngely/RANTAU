// Mock data for RANTAU platform

export interface Kost {
  id: number;
  name: string;
  category: "Putra" | "Putri" | "Campuran";
  price: string;
  distance: string;
  rating: number;
  coords: [number, number];
  address: string;
  description: string;
  facilities: string[];
  routes: string[];
  image?: string;
}

export interface Owner {
  id: number;
  name: string;
  kost_owned: string[];
  contact: string;
  location: string;
  experience: string;
  rating: number;
  monthly_earnings: string;
  bio: string;
}

export interface Roommate {
  id: number;
  name: string;
  campus: string;
  compatibility: string;
  sleep_schedule: string;
  cleanliness: string;
  study_style: string;
  interests: string[];
}

export interface ForumPost {
  id: number;
  author: string;
  campus: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
}

export interface Story {
  id: number;
  quote: string;
  author: string;
  campus: string;
  background?: string;
}

export const kosts: Kost[] = [
  {
    id: 1,
    name: "Kost Harmoni Putri",
    category: "Putri",
    price: "Rp 950.000/bulan",
    distance: "400m dari UNDHIRA",
    rating: 4.9,
    coords: [-8.6704, 115.2127],
    address: "Jl. Gunung Salak No.9, Denpasar Barat",
    description: "Kost putri yang bersih dengan kamar mandi dalam, closet duduk, AC, dan dapur bersama. Cocok untuk kehidupan kuliah yang tenang dan nyaman dekat kampus.",
    facilities: ["WiFi", "Laundry", "Kamar Mandi Dalam", "AC", "Dapur Bersama", "Parkir Motor"],
    routes: ["5 menit jalan kaki ke UNDHIRA", "2 menit ke Warung Bu Sri", "3 menit ke Laundry Express"]
  },
  {
    id: 2,
    name: "Kost Ceria Campuran",
    category: "Campuran",
    price: "Rp 1.100.000/bulan",
    distance: "650m dari UNUD",
    rating: 4.7,
    coords: [-8.7992, 115.1772],
    address: "Jl. Raya Kampus UNUD, Jimbaran",
    description: "Kost campuran modern dengan lounge, kamar mandi dalam, dan ruang kerja bersama. Sempurna untuk mahasiswa UNUD Jimbaran.",
    facilities: ["WiFi", "Air Panas", "Parkir Luas", "Kulkas", "Smart TV", "Ruang Bersama"],
    routes: ["4 menit ke UNUD", "1 menit ke Indomaret", "Dekat Halte Bus Jimbaran"]
  },
  {
    id: 3,
    name: "Kost Putra Surya Indah",
    category: "Putra",
    price: "Rp 800.000/bulan",
    distance: "900m dari ITB STIKOM Bali",
    rating: 4.5,
    coords: [-8.6871, 115.2194],
    address: "Jl. Gatot Subroto Barat, Denpasar Utara",
    description: "Kost putra terjangkau untuk mahasiswa teknik. Termasuk kamar mandi dalam dan layanan laundry.",
    facilities: ["WiFi", "Laundry", "Kamar Mandi Dalam", "Parkir Motor"],
    routes: ["7 menit ke STIKOM Bali", "2 menit ke Warung Bu Agung", "Dekat terminal Ubung"]
  },
  {
    id: 4,
    name: "Kost Cendana",
    category: "Campuran",
    price: "Rp 1.250.000/bulan",
    distance: "500m dari ISI Denpasar",
    rating: 4.8,
    coords: [-8.6830, 115.2479],
    address: "Jl. Nusa Indah No.5, Denpasar Timur",
    description: "Kost kreatif dengan rooftop dan suasana artistik. Sempurna untuk mahasiswa seni ISI Denpasar.",
    facilities: ["WiFi", "Air Panas", "Dapur", "Rooftop", "Parkir"],
    routes: ["3 menit ke ISI Denpasar", "Dekat Bali Artspace Gallery"]
  },
  {
    id: 5,
    name: "Kost Melati Asri",
    category: "Putri",
    price: "Rp 1.000.000/bulan",
    distance: "600m dari UNMAS",
    rating: 4.7,
    coords: [-8.6729, 115.2344],
    address: "Jl. Gunung Soputan No.22, Denpasar Barat",
    description: "Kost khusus putri dengan CCTV dan dapur bersama. Lingkungan tenang dekat UNMAS Denpasar.",
    facilities: ["WiFi", "AC", "Dapur", "CCTV", "Laundry"],
    routes: ["3 menit ke UNMAS", "1 menit ke Warung Nasi Bali Gek"]
  }
];

export const owners: Owner[] = [
  {
    id: 1,
    name: "Ibu Made Sulastri",
    kost_owned: ["Kost Harmoni Putri"],
    contact: "081234567890",
    location: "Denpasar Barat",
    experience: "8 tahun",
    rating: 4.9,
    monthly_earnings: "Rp 12.000.000",
    bio: "Pemilik kost ramah dan peduli dengan mahasiswa. Sering membantu mahasiswa baru beradaptasi."
  },
  {
    id: 2,
    name: "Pak Nyoman Adi",
    kost_owned: ["Kost Putra Surya Indah"],
    contact: "081245678900",
    location: "Denpasar Utara",
    experience: "5 tahun",
    rating: 4.7,
    monthly_earnings: "Rp 9.500.000",
    bio: "Pemilik kost yang dekat dengan mahasiswa teknik, menyediakan wifi cepat dan laundry gratis."
  }
];

export const roommates: Roommate[] = [
  {
    id: 1,
    name: "Ayu Kartika",
    campus: "Universitas Dhyana Pura",
    compatibility: "94%",
    sleep_schedule: "tidur jam 11 malam",
    cleanliness: "rapi banget",
    study_style: "belajar di kamar",
    interests: ["Mendengarkan lofi music", "Fotografi", "Masak"]
  },
  {
    id: 2,
    name: "Rafi Pradana",
    campus: "UNWAR",
    compatibility: "89%",
    sleep_schedule: "begadang sering",
    cleanliness: "santai aja",
    study_style: "nongkrong di kafe",
    interests: ["Gaming", "Ngopi", "Nugas tengah malam"]
  },
  {
    id: 3,
    name: "Sinta Mahardika",
    campus: "UNUD",
    compatibility: "91%",
    sleep_schedule: "tidur jam 10 malam",
    cleanliness: "super bersih",
    study_style: "belajar tenang",
    interests: ["Yoga", "Membaca", "Menonton drama Korea"]
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    author: "Ayu Kartika",
    campus: "UNDHIRA",
    title: "Tips hemat di Denpasar",
    content: "Kalau mau hemat, coba masak bareng teman kost. Belanja di pasar Gunung Agung lebih murah loh!",
    tags: ["#TipsKost", "#RantauLife"],
    likes: 32,
    comments: 5
  },
  {
    id: 2,
    author: "Rafi Pradana",
    campus: "UNWAR",
    title: "Ada yang butuh roommate Renon?",
    content: "Halo! Aku lagi cari teman sekamar buat sharing biaya kost di Renon. Chat ya kalau minat!",
    tags: ["#Roommate", "#Lowongan"],
    likes: 21,
    comments: 3
  },
  {
    id: 3,
    author: "Sinta Mahardika",
    campus: "UNUD",
    title: "Tempat nongkrong nyaman buat nugas?",
    content: "Ada rekomendasi kafe nyaman buat nugas dekat Jimbaran? Aku bosan di kost terus 😅",
    tags: ["#KehidupanRantau", "#Ngopi"],
    likes: 45,
    comments: 8
  }
];

export const stories: Story[] = [
  {
    id: 1,
    quote: "RANTAU bantu aku nemuin kost yang nyaman dan teman sekamar yang cocok banget! Sekarang nggak merasa sendiri lagi di perantauan.",
    author: "Dewi Lestari",
    campus: "UNUD Jimbaran"
  },
  {
    id: 2,
    quote: "Awalnya bingung cari kost yang sesuai budget. Pakai RANTAU langsung ketemu kost impian dengan fasilitas lengkap!",
    author: "Agung Prasetyo",
    campus: "STIKOM Bali"
  },
  {
    id: 3,
    quote: "Di rantau kita mungkin jauh dari keluarga, tapi lewat RANTAU aku dapat keluarga baru di kost. Thanks RANTAU!",
    author: "Sari Wijaya",
    campus: "ISI Denpasar"
  },
  {
    id: 4,
    quote: "Quiz roommate matching-nya akurat banget! Sekarang aku dan teman sekamar udah kayak saudara.",
    author: "Raka Mahendra",
    campus: "UNDHIRA"
  },
  {
    id: 5,
    quote: "Forum RANTAU membantu aku dapat info lowongan part-time dan tips hemat di Denpasar. Sangat berguna!",
    author: "Nina Puspita",
    campus: "UNMAS"
  },
  {
    id: 6,
    quote: "Pertama kali ke Bali langsung pakai RANTAU. Dalam seminggu udah dapat kost dan teman baru. Recommended!",
    author: "Budi Santoso",
    campus: "UNWAR"
  },
  {
    id: 7,
    quote: "Fitur split bill-nya keren banget! Nggak perlu ribet lagi urusan patungan listrik sama WiFi.",
    author: "Maya Kusuma",
    campus: "UNUD"
  },
  {
    id: 8,
    quote: "Sebagai anak rantau, RANTAU bener-bener jadi solusi lengkap. Dari cari kost sampai bikin komunitas.",
    author: "Fikri Rahman",
    campus: "STIKOM Bali"
  },
  {
    id: 9,
    quote: "Peta interaktifnya memudahkan banget buat lihat lokasi kost dan sekitarnya. Smart!",
    author: "Laras Ayu",
    campus: "ISI Denpasar"
  },
  {
    id: 10,
    quote: "RANTAU bukan cuma platform, tapi juga rumah kedua buat anak perantau. Terima kasih RANTAU! ❤️",
    author: "Made Wisnu",
    campus: "UNDHIRA"
  }
];
