import { useState } from "react";

const navLinks = [
  { href: "#brands", label: "Бренды" },
  { href: "#categories", label: "Категории" },
  { href: "#for-whom", label: "Кому подходит" },
  { href: "#quality", label: "Качество" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="NOW KZ"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-gray-500 font-medium border-l border-gray-200 pl-3">
              Оригинальные<br />БАДы из США
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+77001234567"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +7 (700) 123-45-67
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              Оставить заявку
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 text-gray-700"
              aria-label="Меню"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 border-t border-gray-100 pt-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+77001234567"
              className="py-2.5 px-2 text-base font-semibold text-brand"
            >
              +7 (700) 123-45-67
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              Оставить заявку
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
