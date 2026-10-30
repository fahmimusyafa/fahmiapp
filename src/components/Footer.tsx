export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral border-t border-neutral py-8" data-aos="fade-up">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-surface">
          <p>&copy; {currentYear} Fahmi. All rights reserved.</p>
          <p>Fullstack Developer — Built with Love❤️</p>
        </div>
      </div>
    </footer>
  );
}
