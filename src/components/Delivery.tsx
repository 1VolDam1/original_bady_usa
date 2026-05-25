const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", "Усть-Каменогорск"];

const steps = [
  { num: "01", title: "Заявка", text: "Оставьте заявку на сайте или позвоните нам." },
  { num: "02", title: "Подбор", text: "Менеджер свяжется и поможет подобрать продукцию." },
  { num: "03", title: "Оплата", text: "Удобные способы оплаты на выбор." },
  { num: "04", title: "Доставка", text: "Доставим в любой город Казахстана." },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand to-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Доставка
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Доставка по всему Казахстану
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Оперативная доставка в любой город. Удобная оплата
            и помощь в подборе продукции под ваши цели.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((s) => (
            <div key={s.num} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-accent mb-3">{s.num}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Города доставки
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {cities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10"
              >
                {c}
              </span>
            ))}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold">
              + другие города
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
