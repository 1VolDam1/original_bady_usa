export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="NOW KZ" className="h-12 w-auto bg-white rounded-lg p-1.5" />
              <div className="text-xs uppercase tracking-widest text-gray-500 font-medium border-l border-gray-700 pl-3">
                Оригинальные<br />БАДы из США
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              NOW KZ — официальные поставки витаминов и БАДов NOW Foods, Sambucol,
              Life Extension, Doctor's Best в Казахстане.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#brands" className="hover:text-white transition-colors">Бренды</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Категории</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Качество</a></li>
              <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+77001234567" className="hover:text-white transition-colors">
                  +7 (700) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@now-kz.com" className="hover:text-white transition-colors">
                  info@now-kz.com
                </a>
              </li>
              <li>г. Алматы, Казахстан</li>
              <li>Ежедневно: 9:00 — 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center text-xs text-gray-500">
          <div>© {year} NOW KZ. Все права защищены.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>

        <div className="mt-6 text-[11px] text-gray-600 leading-relaxed">
          БАД. Не является лекарственным средством. Перед применением рекомендуется
          проконсультироваться со специалистом. Имеются противопоказания.
        </div>
      </div>
    </footer>
  );
}
