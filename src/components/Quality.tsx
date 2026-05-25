const points = [
  "Работаем только с проверенными поставщиками",
  "Тщательный контроль качества каждой партии",
  "Сертификаты соответствия на всю продукцию",
  "Соблюдение условий хранения и транспортировки",
  "Актуальные сроки годности с большим запасом",
  "Гарантия подлинности продукции",
];

export default function Quality() {
  return (
    <section id="quality" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Гарантия качества
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Безопасность и оригинальность — наш приоритет
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              Мы понимаем, насколько важно получать безопасную и оригинальную
              продукцию. Поэтому работаем только с проверенными поставщиками
              и тщательно контролируем каждый этап.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-base text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-4 sm:space-y-5">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white">
                  <div className="text-4xl font-extrabold">100%</div>
                  <div className="text-sm mt-2 opacity-90">Оригинальная продукция из США</div>
                </div>
                <div className="p-6 rounded-2xl bg-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">GMP</div>
                  <div className="text-sm mt-2 text-gray-600">Производство по стандартам качества</div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-5 sm:mt-10">
                <div className="p-6 rounded-2xl bg-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">50+</div>
                  <div className="text-sm mt-2 text-gray-600">Лет опыта у наших брендов</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white">
                  <div className="text-4xl font-extrabold">USA</div>
                  <div className="text-sm mt-2 opacity-90">Прямые поставки из США</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
