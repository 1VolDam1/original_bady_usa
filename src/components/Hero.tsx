export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Официальный поставщик в Казахстане
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Оригинальные БАДы<br />
              из <span className="text-brand">США</span> в{" "}
              <span className="text-accent">Казахстане</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              NOW, Sambucol, Life Extension, Doctor's Best — проверенные мировые
              бренды витаминов и БАДов для иммунитета, энергии и активного образа жизни.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-accent text-white text-base font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Оставить заявку
              </a>
              <a
                href="#brands"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-gray-900 text-base font-semibold border border-gray-200 hover:border-brand hover:text-brand transition-colors"
              >
                Посмотреть бренды
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Оригинал из США</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand">4+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Премиум бренда</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative fade-up lg:order-last">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-brand/10">
              <img
                src="/images/hero-supplements.jpg"
                alt="Витамины и БАДы NOW Foods"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-transparent to-transparent" />
            </div>

            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 gap-3 items-center max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Сертифицировано</div>
                <div className="text-xs text-gray-500">Документы на товар</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 gap-3 items-center max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Быстрая доставка</div>
                <div className="text-xs text-gray-500">По всему Казахстану</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
