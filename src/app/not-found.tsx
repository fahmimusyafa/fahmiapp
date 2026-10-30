import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-primary text-secondary flex items-center">
      <div className="container-max py-section">
        <p className="text-accent text-sm mb-3">404</p>
        <h1 className="text-3xl md:text-5xl mb-4">Halaman tidak ditemukan</h1>
        <p className="text-surface max-w-2xl mb-8">
          Tautan yang Anda buka tidak tersedia. Kembali ke halaman utama untuk melihat portofolio.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center">
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}