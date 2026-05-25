const items = [
  {
    title: "Тем, кто заботится о здоровье",
    text: "Поддерживайте энергию, иммунитет и хорошее самочувствие каждый день.",
  },
  {
    title: "Спортсменам и активным людям",
    text: "Спортивное питание, аминокислоты, витамины для восстановления и роста.",
  },
  {
    title: "Семьям с детьми",
    text: "Безопасные комплексы для поддержки иммунитета всей семьи.",
  },
  {
    title: "Для восстановления",
    text: "После нагрузок, стресса или болезни — комплексная поддержка организма.",
  },
  {
    title: "Для красоты",
    text: "Коллаген, биотин и витамины для здоровой кожи, волос и ногтей.",
  },
  {
    title: "Для долголетия",
    text: "Антиоксиданты и формулы для поддержки сердца, мозга и сосудов.",
  },
];

export default function ForWhom() {
  return (
    <section id="for-whom" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Для кого
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Для кого наши БАДы?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 hover:border-brand hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-extrabold text-brand/30">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {it.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
