export type ProjectImageKey =
  | "bridge"
  | "datalogic"
  | "ssr"
  | "twentyMefreeAdmin"
  | "twentyMefreeLanding"
  | "keepoint";

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  technologies: string[];
  image: ProjectImageKey;
  impact?: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "SSR Management System",
    description:
      "SSR Outlet Management adalah aplikasi digital untuk mengelola data outlet, program kerja, dan administrasi secara terpusat. Aplikasi ini memudahkan pembaruan data, pengajuan program, validasi, monitoring, serta pelaporan guna meningkatkan efisiensi kerja, akurasi data, dan koordinasi antar tim.",
    role: "Full-stack Developer",
    technologies: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS", "Docker"],
    image: "ssr",
  },
  {
    id: "2",
    name: "Datalogic",
    description:
      "Datalogic  merupakan aplikasi visualisasi data yang dapat memperlihatkan gambaran laporan penjualan secara ringkas yang disajikan dalam bentuk grafik. Digunakan untuk menggabungkan, menganalisis, dan menginterpretasi data dari berbagai sumber.",
    role: "Backend Developer",
    technologies: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS", "Docker"],
    image: "datalogic",
  },
  {
    id: "3",
    name: "Bridge System",
    description:
      "Bridge System adalah aplikasi integrasi yang berfungsi sebagai penghubung antara Shopify dan OMS (Order Management System). Aplikasi ini menerima transaksi dari Shopify, meneruskan data pesanan ke OMS melalui API, serta menerima webhook dari OMS untuk memperbarui status transaksi di Shopify. Selain itu, Bridge System menyediakan fitur laporan transaksi dalam format Excel untuk memudahkan monitoring dan pengelolaan data transaksi.",
    role: "Full-stack Developer",
    technologies: ["Laravel", "JavaScript", "MySQL", "API Integration", "Docker"],
    image: "bridge",
  },
  {
    id: "5",
    name: "20Mefree - Landing Page",
    description:
    "20Mefree - Landing Page adalah halaman depan untuk platform 20Mefree yang menampilkan informasi produk dan layanan secara ringkas dan menarik.",
    role: "Full-stack Developer",
    technologies: ["Nuxt.js", "Tailwind CSS", "TypeScript", "API Integration"],
    image: "twentyMefreeLanding",
  },
  {
    id: "6",
    name: "20Mefree - Admin Panel",
    description:
    "20Mefree - Admin Panel adalah sistem manajemen yang memungkinkan admin untuk mengelola konten, pengguna, dan transaksi pada platform 20Mefree dengan aman dan efisien.",
    role: "Full-stack Developer",
    technologies: ["Laravel", "JavaScript", "Vue.js", "MySQL", "API Integration", "Docker"],
    image: "twentyMefreeAdmin",
  },
  // {
  //   id: "7",
  //   name: "POS System",
  //   description:
  //   "POS System adalah aplikasi kasir modern full-stack dengan backend API yang terstruktur dan frontend web untuk operasional penjualan serta manajemen stok.",
  //   role: "Full-stack Developer",
  //   technologies: ["TypeScript", "React.js", "PostgreSQL", "API Integration", "Golang"],
  //   image: "posSystem",
  // },
  {
    id: "4",
    name: "Keepoint",
    description:
      "Keepoint adalah sistem manajemen program loyalitas yang membantu bisnis melacak dan mengelola poin yang diperoleh pelanggan dari pembelian mereka. Pelanggan dapat menukarkan poin tersebut dengan berbagai hadiah yang disesuaikan dengan level keanggotaan mereka.",
    role: "Full-stack Developer",
    technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap CSS"],
    image: "keepoint",
  },
];

export const skills: Skill[] = [
  {
    category: "Backend",
    items: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST API",
      "Docker",
    ],
  },
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Nginx",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Postman",
      "API Integration",
    ],
  },
];

export const contact = {
  email: "fahmimusyafa@gmail.com",
  github: "https://github.com/fahmimusyafa",
  linkedin: "https://www.linkedin.com/in/muhamadfahmimusyafa",
};
