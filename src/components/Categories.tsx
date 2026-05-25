const categories = [
  { name: "Витамин D3 и K2", icon: "☀️" },
  { name: "Магний и цинк", icon: "💊" },
  { name: "Омега-3", icon: "🐟" },
  { name: "Коллаген", icon: "✨" },
  { name: "Иммунитет", icon: "🛡️" },
  { name: "БАДы для суставов", icon: "🦴" },
  { name: "Сон и нервная система", icon: "🌙" },
  { name: "Антиоксиданты и энергия", icon: "⚡" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Каталог
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Популярные категории
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Подберём витамины и БАДы под любые цели и потребности.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#contact"
              className="group flex flex-col items-start gap-3 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-gray-50 hover:from-brand hover:to-brand-dark border border-gray-100 hover:border-transparent transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-white transition-colors">
                {c.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
