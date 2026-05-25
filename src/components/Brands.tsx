const brands = [
  {
    name: "NOW Foods",
    tagline: "Лидер №1 в мире витаминов",
    description:
      "Один из самых известных мировых производителей витаминов и добавок. Широкий ассортимент: омега-3, магний, витамин D3, коллаген, аминокислоты, спортивное питание.",
    color: "from-orange-500 to-orange-600",
    badge: "Бестселлер",
  },
  {
    name: "Sambucol",
    tagline: "Иммунитет на основе бузины",
    description:
      "Известный бренд на основе чёрной бузины для поддержки иммунитета взрослых и детей. Особенно популярен в сезон простуд и вирусных нагрузок.",
    color: "from-purple-600 to-purple-700",
    badge: "Для всей семьи",
  },
  {
    name: "Life Extension",
    tagline: "Премиум формулы долголетия",
    description:
      "Премиальные формулы для поддержки долголетия, здоровья сердца, мозга, сосудов и общего качества жизни. Высокие стандарты исследований и состава.",
    color: "from-blue-700 to-blue-800",
    badge: "Премиум",
  },
  {
    name: "Doctor's Best",
    tagline: "Научный подход к здоровью",
    description:
      "Научный подход и эффективные формулы для суставов, нервной системы, сна, энергии и восстановления организма.",
    color: "from-emerald-600 to-emerald-700",
    badge: "Доказательная база",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Наши бренды
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Бренды, которым доверяют миллионы
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Мы работаем только с проверенными мировыми производителями
            и гарантируем 100% оригинальность продукции.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.color}`} />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {b.name}
                  </h3>
                  <p className="text-sm text-brand font-semibold mt-1">{b.tagline}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent whitespace-nowrap">
                  {b.badge}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {b.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Узнать наличие
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
