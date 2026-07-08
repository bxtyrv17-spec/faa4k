/* ═══════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════ */
const LANG_META = {
  ru: { code: 'RU', name: 'Русский' },
  en: { code: 'EN', name: 'English' },
  uz: { code: 'UZ', name: "O'zbek" },
};

const T = {
  ru: {
    'nav.home': 'Главная', 'nav.services': 'Услуги', 'nav.packages': 'Пакеты',
    'nav.blog': 'Блог', 'nav.about': 'Обо мне', 'nav.contact': 'Контакты', 'nav.book': 'Записаться',
    'hero.role': 'Графический дизайнер',
    'hero.s0': 'Дизайн — это<br>язык без слов',
    'hero.s1': 'Создаю бренды,<br>которые запоминают',
    'hero.s2': 'Идея, обретающая<br>форму',
    'hero.desc': 'Создаю визуальные образы, которые вдохновляют и навсегда остаются в памяти.',
    'hero.cta1': 'Смотреть работы', 'hero.cta2': 'Обо мне',
    'sv.tag': 'услуги', 'sv.heading': 'Что я делаю', 'sv.all': 'Все услуги',
    'sv.c1': 'Брендинг', 'sv.c2': 'Айдентика', 'sv.c3': 'UI/UX', 'sv.c4': 'Упаковка', 'sv.c5': 'Типографика', 'sv.c6': 'Иллюстрация',
    'srv.n1': 'Логотип и фирменный стиль', 'srv.n2': 'Визитки и полиграфия', 'srv.n3': 'UI/UX мобильных приложений',
    'srv.n4': 'Ребрендинг', 'srv.n5': 'Оформление соцсетей', 'srv.n6': 'Веб-дизайн сайтов',
    'srv.n7': 'Гайдлайн бренда', 'srv.n8': 'Дизайн упаковки', 'srv.n9': 'Этикетки и стикеры',
    'srv.d1': 'Разработка логотипа с фирменными цветами, типографикой и правилами использования.',
    'srv.d2': 'Дизайн визиток, флаеров, брошюр и другой печатной продукции под ваш бренд.',
    'srv.d3': 'Проектирование удобного и красивого интерфейса мобильного приложения.',
    'srv.d4': 'Обновление визуального стиля бренда с сохранением его сути и узнаваемости.',
    'srv.d5': 'Единый визуальный стиль для Instagram, Telegram и других платформ.',
    'srv.d6': 'Дизайн современного сайта: лендинг, портфолио или корпоративный сайт.',
    'srv.d7': 'Документ с правилами использования логотипа, шрифтов и цветов бренда.',
    'srv.d8': 'Привлекательная упаковка, которая выделяет продукт на полке и продаёт сама.',
    'srv.d9': 'Дизайн этикеток для бутылок, банок, коробок и брендированных стикеров.',
    'srv.panel.sub': 'Выберите направление, которое вам нужно',
    'wh.tag': 'почему я', 'wh.heading': 'Дизайн, который ставит<br>ваш бренд на первое место',
    'bn.h1': 'Идея превращается в форму', 'bn.meta1': '◷ 5–14 дней', 'bn.meta2': '★ Премиум дизайн',
    'bn.h2': 'Внимание к каждой детали', 'bn.stat': 'проектов и брендов',
    'bn.chip1': '200+ макетов', 'bn.chip2': '20+ брендов', 'bn.since': 'с 2020',
    'bn.h3': 'Подберём стиль под вас', 'bn.p3': 'Найдём визуальный язык под ваш бренд и задачу',
    'bn.sat.lbl': 'довольных клиентов', 'bn.free.h': 'Бесплатная консультация',
    'bn.free.p': 'Первая встреча — обсуждение проекта бесплатно',
    'pk.tag': 'пакеты', 'pk.heading': 'Выберите свой пакет', 'pk.sub': 'Выберите подходящий формат сотрудничества',
    'pk.n1': 'Старт', 'pk.n2': 'Стандарт', 'pk.n3': 'Премиум',
    'pk.d1': 'Для малого бизнеса', 'pk.d2': 'Для растущих брендов', 'pk.d3': 'Для крупных проектов',
    'pk.popular': 'Популярный', 'pk.btn': 'Выбрать пакет',
    'pk.zone1': 'Стартовый пакет', 'pk.zone2': 'Стандартный пакет', 'pk.zone3': 'Премиум пакет',
    'pk.f1.1': 'Логотип + фирменный стиль', 'pk.f1.2': '1 концепция', 'pk.f1.3': '3 правки', 'pk.f1.4': 'Исходные файлы',
    'pk.f2.1': 'Полный фирменный стиль', 'pk.f2.2': '2 концепции', 'pk.f2.3': '5 правок', 'pk.f2.4': 'Гайдлайн бренда', 'pk.f2.5': 'Соцсети + шаблоны',
    'pk.f3.1': 'Полная айдентика', 'pk.f3.2': '3 концепции', 'pk.f3.3': 'Безлимит правок', 'pk.f3.4': 'Брендбук', 'pk.f3.5': 'Упаковка + иллюстрации', 'pk.f3.6': 'Приоритетная поддержка',
    'pk.note1': 'Уточняется на консультации', 'pk.note2': 'Зависит от проекта', 'pk.cur': 'сум',
    'bl.tag': 'блог', 'bl.heading': 'Статьи и советы', 'bl.read': 'Читать →', 'bl.min': 'мин',
    'bl.cat1': 'Брендинг', 'bl.cat2': 'Типографика', 'bl.cat3': 'Цвет', 'bl.cat4': 'Минимализм', 'bl.cat5': 'Логотип', 'bl.cat6': 'Тренды',
    'bl.t1': 'Как создать сильный бренд: 5 ключевых принципов',
    'bl.t2': 'Типографика в брендинге: почему шрифт важнее, чем кажется',
    'bl.t3': 'Психология цвета: как выбрать палитру для бренда',
    'bl.t4': 'Минимализм в дизайне: когда меньше — это больше',
    'bl.t5': 'Сила логотипа: как символ становится историей бренда',
    'bl.t6': 'Тренды графического дизайна 2025',
    'bl.d1': 'Брендинг — это не просто логотип. Это система, которая делает ваш бизнес узнаваемым.',
    'bl.d2': 'Правильный шрифт передаёт характер бренда лучше любого изображения.',
    'bl.d3': 'Цвет — мощный инструмент. Он влияет на восприятие и решения клиентов.',
    'bl.d4': 'Пустое пространство — это воздух, который позволяет смыслу дышать.',
    'bl.d5': 'Великие логотипы — это сжатая философия компании в одной форме.',
    'bl.d6': 'Что определит визуальный язык брендов в 2025 — ключевые направления.',
    'about.eyebrow': 'обо мне',
    'about.title': 'Привет! Я — faa4k,<br>графический дизайнер',
    'about.lead': 'Более 3 лет помогаю брендам находить свой визуальный язык — от логотипа до цельной айдентики. Верю, что хороший дизайн решает задачи бизнеса и остаётся в памяти.',
    'about.stat1': 'года опыта', 'about.stat2': 'проектов', 'about.stat3': 'брендов', 'about.stat4': 'довольных клиентов',
    'about.h1': 'Чем занимаюсь', 'about.h2': 'Как работаю',
    'about.chip1': 'Брендинг', 'about.chip2': 'Логотипы', 'about.chip3': 'Айдентика', 'about.chip4': 'UI/UX', 'about.chip5': 'Упаковка', 'about.chip6': 'Типографика', 'about.chip7': 'Иллюстрация',
    'about.step1': 'Погружаюсь в задачу и бренд', 'about.step2': 'Показываю концепции на выбор',
    'about.step3': 'Дорабатываю по вашим правкам', 'about.step4': 'Отдаю исходники и гайд',
    'cta.tag': 'Специальное предложение', 'cta.h': 'Первая консультация<br>бесплатно',
    'cta.sub': 'Обсудим ваш проект, задачи и стиль — бесплатно и без обязательств.',
    'cta.btn': 'Записаться бесплатно', 'cta.svc': 'Мои услуги →',
    'faq.eyebrow': 'вопросы и ответы', 'faq.title': 'Частые вопросы',
    'faq.card.h': 'Остались вопросы?', 'faq.card.p': 'Напишите мне — отвечу лично.', 'faq.card.btn': 'Написать мне',
    'faq.q1': 'Сколько стоит логотип и фирменный стиль?',
    'faq.q2': 'Сколько времени занимает проект?',
    'faq.q3': 'Сколько правок входит в работу?',
    'faq.q4': 'Вы передаёте исходные файлы?',
    'faq.q5': 'Как проходит работа над проектом?',
    'faq.a1': 'Стоимость зависит от объёма задачи и количества концепций. Точную цену назову после короткого брифа на бесплатной консультации.',
    'faq.a2': 'Логотип — от 5 дней, полный фирменный стиль — от 2 недель. Точные сроки согласуем перед стартом.',
    'faq.a3': 'В зависимости от пакета — от 3 правок до безлимита. Правки в рамках выбранной концепции всегда включены.',
    'faq.a4': 'Да. После оплаты вы получаете все исходники в нужных форматах и гайд по использованию.',
    'faq.a5': 'Бриф → концепции → выбор направления → доработка → финальные файлы. На каждом этапе вы участвуете и утверждаете результат.',
    'faq.regions': 'Работаю с клиентами из',
    'faq.r1': 'Узбекистана', 'faq.r2': 'Казахстана', 'faq.r3': 'России', 'faq.r4': 'Кыргызстана', 'faq.r5': 'Европы',
    'ft.brand': 'faa4k · графический дизайнер',
    'ft.cta.h': '−10% на первый<br>проект', 'ft.cta.sub': 'Скидка для новых клиентов на первый заказ.',
    'ft.cta.fill': 'Записаться', 'ft.cta.svc': 'Мои услуги →',
    'ft.about': 'Графический дизайнер. Брендинг, айдентика и визуальные системы для брендов.',
    'ft.h1': 'Услуги', 'ft.h2': 'Разделы', 'ft.h3': 'Связаться',
    'ft.s1.1': 'Брендинг', 'ft.s1.2': 'Логотипы', 'ft.s1.3': 'UI/UX', 'ft.s1.4': 'Упаковка', 'ft.s1.5': 'Типографика',
    'ft.s2.1': 'Услуги', 'ft.s2.2': 'Пакеты', 'ft.s2.3': 'Блог', 'ft.s2.4': 'Обо мне', 'ft.s2.5': 'Контакты',
    'ft.s3.1': 'Telegram канал', 'ft.s3.2': 'Instagram', 'ft.s3.3': 'Записаться на консультацию',
    'ft.copy': '© 2026 faa4k. Все права защищены.', 'ft.top': 'Наверх ↑',
    'bk.eyebrow': 'заявка', 'bk.title': 'Оставьте заявку', 'bk.sub': 'Опишите задачу — я свяжусь с вами в течение дня',
    'bk.name.lbl': 'Имя', 'bk.name.ph': 'Как к вам обращаться?',
    'bk.phone.lbl': 'Телефон / Telegram', 'bk.phone.ph': '+998 __ ___ __ __',
    'bk.service.lbl': 'Услуга', 'bk.o.ph': '— выберите услугу —',
    'bk.o.s1': 'Логотип и фирменный стиль', 'bk.o.s2': 'Визитки и полиграфия', 'bk.o.s3': 'UI/UX мобильных приложений',
    'bk.o.s4': 'Ребрендинг', 'bk.o.s5': 'Оформление соцсетей', 'bk.o.s6': 'Веб-дизайн сайтов',
    'bk.o.s7': 'Гайдлайн бренда', 'bk.o.s8': 'Дизайн упаковки', 'bk.o.s9': 'Этикетки и стикеры',
    'bk.o.p1': 'Пакет Старт', 'bk.o.p2': 'Пакет Стандарт', 'bk.o.p3': 'Пакет Премиум', 'bk.o.other': 'Другое',
    'bk.budget.lbl': 'Бюджет', 'bk.b.ph': '— приблизительный бюджет —',
    'bk.b1': 'до 1 000 000 сум', 'bk.b2': '1–3 млн сум', 'bk.b3': '3–5 млн сум', 'bk.b4': '5+ млн сум', 'bk.b5': 'Обсудим на встрече',
    'bk.msg.lbl': 'Сообщение', 'bk.msg.ph': 'Расскажите о вашем проекте...',
    'bk.submit': 'Отправить заявку', 'bk.sending': 'Отправляю...', 'bk.sent': 'Заявка отправлена!',
    'bk.err': 'Ошибка — попробуйте ещё раз',
    'bk.note.ok': 'Я свяжусь с вами в ближайшее время',
    'bk.note.err': 'Не удалось отправить. Напишите мне напрямую в Telegram.',
    'bk.req.name': 'Пожалуйста, введите ваше имя',
    'panel.back': 'Главная',
  },
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.packages': 'Packages',
    'nav.blog': 'Blog', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.book': 'Book now',
    'hero.role': 'Graphic Designer',
    'hero.s0': 'Design is<br>a language without words',
    'hero.s1': 'I create brands<br>people remember',
    'hero.s2': 'An idea taking<br>shape',
    'hero.desc': 'Creating visual images that inspire and stay in memory forever.',
    'hero.cta1': 'View work', 'hero.cta2': 'About me',
    'sv.tag': 'services', 'sv.heading': 'What I do', 'sv.all': 'All services',
    'sv.c1': 'Branding', 'sv.c2': 'Identity', 'sv.c3': 'UI/UX', 'sv.c4': 'Packaging', 'sv.c5': 'Typography', 'sv.c6': 'Illustration',
    'srv.n1': 'Logo & Brand Identity', 'srv.n2': 'Business Cards & Print', 'srv.n3': 'Mobile App UI/UX',
    'srv.n4': 'Rebranding', 'srv.n5': 'Social Media Design', 'srv.n6': 'Website Design',
    'srv.n7': 'Brand Guidelines', 'srv.n8': 'Packaging Design', 'srv.n9': 'Labels & Stickers',
    'srv.d1': 'Logo development with brand colors, typography and usage guidelines.',
    'srv.d2': 'Business cards, flyers, brochures and other printed materials for your brand.',
    'srv.d3': 'Designing a convenient and beautiful mobile app interface.',
    'srv.d4': 'Updating the visual brand style while preserving its essence and recognizability.',
    'srv.d5': 'A unified visual style for Instagram, Telegram and other platforms.',
    'srv.d6': 'Modern website design: landing page, portfolio or corporate website.',
    'srv.d7': 'A document with logo, font and brand color usage guidelines.',
    'srv.d8': 'Attractive packaging that makes your product stand out on the shelf.',
    'srv.d9': 'Label design for bottles, jars, boxes and branded stickers.',
    'srv.panel.sub': 'Choose the direction you need',
    'wh.tag': 'why me', 'wh.heading': 'Design that puts<br>your brand first',
    'bn.h1': 'An idea takes shape', 'bn.meta1': '◷ 5–14 days', 'bn.meta2': '★ Premium design',
    'bn.h2': 'Attention to every detail', 'bn.stat': 'projects & brands',
    'bn.chip1': '200+ layouts', 'bn.chip2': '20+ brands', 'bn.since': 'since 2020',
    'bn.h3': 'We find your style', 'bn.p3': 'We find the visual language for your brand',
    'bn.sat.lbl': 'satisfied clients', 'bn.free.h': 'Free Consultation',
    'bn.free.p': 'First meeting — project discussion is free',
    'pk.tag': 'packages', 'pk.heading': 'Choose your package', 'pk.sub': 'Choose the right format of collaboration',
    'pk.n1': 'Start', 'pk.n2': 'Standard', 'pk.n3': 'Premium',
    'pk.d1': 'For small business', 'pk.d2': 'For growing brands', 'pk.d3': 'For big projects',
    'pk.popular': 'Popular', 'pk.btn': 'Choose plan',
    'pk.zone1': 'Starter Package', 'pk.zone2': 'Standard Package', 'pk.zone3': 'Premium Package',
    'pk.f1.1': 'Logo + brand identity', 'pk.f1.2': '1 concept', 'pk.f1.3': '3 revisions', 'pk.f1.4': 'Source files',
    'pk.f2.1': 'Full brand identity', 'pk.f2.2': '2 concepts', 'pk.f2.3': '5 revisions', 'pk.f2.4': 'Brand guidelines', 'pk.f2.5': 'Social media + templates',
    'pk.f3.1': 'Full identity', 'pk.f3.2': '3 concepts', 'pk.f3.3': 'Unlimited revisions', 'pk.f3.4': 'Brand book', 'pk.f3.5': 'Packaging + illustrations', 'pk.f3.6': 'Priority support',
    'pk.note1': 'Confirmed at consultation', 'pk.note2': 'Depends on project', 'pk.cur': 'UZS',
    'bl.tag': 'blog', 'bl.heading': 'Articles & Tips', 'bl.read': 'Read →', 'bl.min': 'min',
    'bl.cat1': 'Branding', 'bl.cat2': 'Typography', 'bl.cat3': 'Color', 'bl.cat4': 'Minimalism', 'bl.cat5': 'Logo', 'bl.cat6': 'Trends',
    'bl.t1': 'How to Build a Strong Brand: 5 Key Principles',
    'bl.t2': 'Typography in Branding: Why Fonts Matter More Than You Think',
    'bl.t3': 'Color Psychology: How to Choose a Brand Palette',
    'bl.t4': 'Minimalism in Design: When Less Is More',
    'bl.t5': 'The Power of a Logo: How a Symbol Becomes a Brand Story',
    'bl.t6': 'Graphic Design Trends 2025',
    'bl.d1': 'Branding is not just a logo. It is a system that makes your business recognizable.',
    'bl.d2': 'The right font conveys brand character better than any image.',
    'bl.d3': 'Color is a powerful tool. It influences customer perception and decisions.',
    'bl.d4': 'White space is air that lets meaning breathe.',
    'bl.d5': 'Great logos are the compressed philosophy of a company in one form.',
    'bl.d6': "What will define brands' visual language in 2025 — key directions.",
    'about.eyebrow': 'about me',
    'about.title': "Hi! I'm faa4k,<br>graphic designer",
    'about.lead': 'For over 3 years I help brands find their visual language — from logo to complete identity. I believe good design solves business problems and stays in memory.',
    'about.stat1': 'years exp.', 'about.stat2': 'projects', 'about.stat3': 'brands', 'about.stat4': 'satisfied clients',
    'about.h1': 'What I do', 'about.h2': 'How I work',
    'about.chip1': 'Branding', 'about.chip2': 'Logos', 'about.chip3': 'Identity', 'about.chip4': 'UI/UX', 'about.chip5': 'Packaging', 'about.chip6': 'Typography', 'about.chip7': 'Illustration',
    'about.step1': 'Deep dive into task and brand', 'about.step2': 'Present concepts to choose from',
    'about.step3': 'Refine based on your feedback', 'about.step4': 'Deliver source files and guide',
    'cta.tag': 'Special offer', 'cta.h': 'First consultation<br>is free',
    'cta.sub': 'We discuss your project, goals and style — free and without obligations.',
    'cta.btn': 'Book for free', 'cta.svc': 'My services →',
    'faq.eyebrow': 'questions & answers', 'faq.title': 'Frequently Asked Questions',
    'faq.card.h': 'Still have questions?', 'faq.card.p': 'Write to me — I will reply personally.', 'faq.card.btn': 'Write to me',
    'faq.q1': 'How much does a logo and brand identity cost?',
    'faq.q2': 'How long does a project take?',
    'faq.q3': 'How many revisions are included?',
    'faq.q4': 'Do you provide source files?',
    'faq.q5': 'How does the work process go?',
    'faq.a1': 'The cost depends on the scope and number of concepts. I will give you an exact price after a short brief at a free consultation.',
    'faq.a2': 'A logo — from 5 days, full brand identity — from 2 weeks. We agree on exact timelines before starting.',
    'faq.a3': 'Depending on the package — from 3 revisions to unlimited. Revisions within the chosen concept are always included.',
    'faq.a4': 'Yes. After payment you receive all source files in the required formats and a usage guide.',
    'faq.a5': 'Brief → concepts → direction choice → refinement → final files. You are involved and approve the result at every stage.',
    'faq.regions': 'I work with clients from',
    'faq.r1': 'Uzbekistan', 'faq.r2': 'Kazakhstan', 'faq.r3': 'Russia', 'faq.r4': 'Kyrgyzstan', 'faq.r5': 'Europe',
    'ft.brand': 'faa4k · graphic designer',
    'ft.cta.h': '−10% on your first<br>project', 'ft.cta.sub': 'Discount for new clients on their first order.',
    'ft.cta.fill': 'Book now', 'ft.cta.svc': 'My services →',
    'ft.about': 'Graphic designer. Branding, identity and visual systems for brands.',
    'ft.h1': 'Services', 'ft.h2': 'Pages', 'ft.h3': 'Contact',
    'ft.s1.1': 'Branding', 'ft.s1.2': 'Logos', 'ft.s1.3': 'UI/UX', 'ft.s1.4': 'Packaging', 'ft.s1.5': 'Typography',
    'ft.s2.1': 'Services', 'ft.s2.2': 'Packages', 'ft.s2.3': 'Blog', 'ft.s2.4': 'About', 'ft.s2.5': 'Contact',
    'ft.s3.1': 'Telegram channel', 'ft.s3.2': 'Instagram', 'ft.s3.3': 'Book a consultation',
    'ft.copy': '© 2026 faa4k. All rights reserved.', 'ft.top': 'Back to top ↑',
    'bk.eyebrow': 'request', 'bk.title': 'Leave a Request', 'bk.sub': 'Describe your task — I will contact you within a day',
    'bk.name.lbl': 'Name', 'bk.name.ph': 'How should I address you?',
    'bk.phone.lbl': 'Phone / Telegram', 'bk.phone.ph': '+998 __ ___ __ __',
    'bk.service.lbl': 'Service', 'bk.o.ph': '— select a service —',
    'bk.o.s1': 'Logo & Brand Identity', 'bk.o.s2': 'Business Cards & Print', 'bk.o.s3': 'Mobile App UI/UX',
    'bk.o.s4': 'Rebranding', 'bk.o.s5': 'Social Media Design', 'bk.o.s6': 'Website Design',
    'bk.o.s7': 'Brand Guidelines', 'bk.o.s8': 'Packaging Design', 'bk.o.s9': 'Labels & Stickers',
    'bk.o.p1': 'Starter Package', 'bk.o.p2': 'Standard Package', 'bk.o.p3': 'Premium Package', 'bk.o.other': 'Other',
    'bk.budget.lbl': 'Budget', 'bk.b.ph': '— approximate budget —',
    'bk.b1': 'up to 1,000,000 UZS', 'bk.b2': '1–3M UZS', 'bk.b3': '3–5M UZS', 'bk.b4': '5M+ UZS', 'bk.b5': 'Discuss at meeting',
    'bk.msg.lbl': 'Message', 'bk.msg.ph': 'Tell me about your project...',
    'bk.submit': 'Send Request', 'bk.sending': 'Sending...', 'bk.sent': 'Request Sent!',
    'bk.err': 'Error — please try again',
    'bk.note.ok': 'I will contact you shortly',
    'bk.note.err': 'Could not send. Please write to me directly in Telegram.',
    'bk.req.name': 'Please enter your name',
    'panel.back': 'Home',
  },
  uz: {
    'nav.home': 'Bosh sahifa', 'nav.services': 'Xizmatlar', 'nav.packages': 'Paketlar',
    'nav.blog': 'Blog', 'nav.about': 'Men haqimda', 'nav.contact': 'Aloqa', 'nav.book': "Ro'yxatdan o'tish",
    'hero.role': 'Grafik dizayner',
    'hero.s0': "Dizayn —<br>so'zsiz til",
    'hero.s1': "Xotirada<br>qoladigan brendlar",
    'hero.s2': "Shaklga<br>kirgan g'oya",
    'hero.desc': "Ilhom beradigan va xotirada abadiy qoladigan vizual obrazlar yarataman.",
    'hero.cta1': "Ishlarni ko'rish", 'hero.cta2': 'Men haqimda',
    'sv.tag': 'xizmatlar', 'sv.heading': 'Nima qilaman', 'sv.all': 'Barcha xizmatlar',
    'sv.c1': 'Brending', 'sv.c2': 'Identifikatsiya', 'sv.c3': 'UI/UX', 'sv.c4': 'Qadoqlash', 'sv.c5': 'Tipografiya', 'sv.c6': 'Illustratsiya',
    'srv.n1': 'Logotip va korporativ uslub', 'srv.n2': 'Vizitka va poligrafiya', 'srv.n3': 'Mobil ilova UI/UX',
    'srv.n4': 'Rebrending', 'srv.n5': 'Ijtimoiy tarmoqlar dizayni', 'srv.n6': 'Veb-dizayn',
    'srv.n7': 'Brend qoidalari', 'srv.n8': 'Qadoqlash dizayni', 'srv.n9': 'Etiketka va stikerlar',
    'srv.d1': "Brend ranglari, tipografiya va foydalanish qoidalari bilan logotip ishlab chiqish.",
    'srv.d2': "Brendingiz uchun vizitka, flaer, broshyura va boshqa bosmaxona mahsulotlari dizayni.",
    'srv.d3': "Mobil ilova uchun qulay va chiroyli interfeys loyihalash.",
    'srv.d4': "Brendning mohiyati va taniqliligini saqlab, uning vizual uslubini yangilash.",
    'srv.d5': "Instagram, Telegram va boshqa platformalar uchun yagona vizual uslub.",
    'srv.d6': "Zamonaviy sayt dizayni: landing, portfolio yoki korporativ sayt.",
    'srv.d7': "Logotip, shrift va brend ranglaridan foydalanish qoidalari hujjati.",
    'srv.d8': "Mahsulotni raqobatchilar orasida ajratib turadigan jozibali qadoqlash.",
    'srv.d9': "Shisha, banka, quti va brendli stikerlar uchun etiketka dizayni.",
    'srv.panel.sub': "Kerakli yo'nalishni tanlang",
    'wh.tag': 'nega men', 'wh.heading': "Brendingizni birinchi<br>o'ringa qo'yadigan dizayn",
    'bn.h1': "G'oya shaklga kiradi", 'bn.meta1': '◷ 5–14 kun', 'bn.meta2': '★ Premium dizayn',
    'bn.h2': "Har bir detaylga e'tibor", 'bn.stat': 'loyiha va brendlar',
    'bn.chip1': '200+ maket', 'bn.chip2': '20+ brend', 'bn.since': '2020 yildan',
    'bn.h3': "Uslubingizni topamiz", 'bn.p3': "Brendingiz uchun vizual tilni topamiz",
    'bn.sat.lbl': "mamnun mijozlar", 'bn.free.h': "Bepul maslahat",
    'bn.free.p': "Birinchi uchrashuv — loyihani muhokama qilish bepul",
    'pk.tag': 'paketlar', 'pk.heading': "O'zingizga mos paketni tanlang", 'pk.sub': 'Hamkorlik formatini tanlang',
    'pk.n1': 'Start', 'pk.n2': 'Standart', 'pk.n3': 'Premium',
    'pk.d1': 'Kichik biznes uchun', 'pk.d2': "O'suvchi brendlar uchun", 'pk.d3': 'Yirik loyihalar uchun',
    'pk.popular': 'Mashhur', 'pk.btn': 'Paketni tanlash',
    'pk.zone1': "Starter to'plam", 'pk.zone2': "Standart to'plam", 'pk.zone3': "Premium to'plam",
    'pk.f1.1': 'Logotip + korporativ uslub', 'pk.f1.2': '1 kontseptsiya', 'pk.f1.3': '3 tuzatish', 'pk.f1.4': 'Manba fayllari',
    'pk.f2.1': "To'liq korporativ uslub", 'pk.f2.2': '2 kontseptsiya', 'pk.f2.3': '5 tuzatish', 'pk.f2.4': 'Brend qoidalari', 'pk.f2.5': 'Ijtimoiy tarmoqlar + shablonlar',
    'pk.f3.1': "To'liq identifikatsiya", 'pk.f3.2': '3 kontseptsiya', 'pk.f3.3': "Cheksiz tuzatishlar", 'pk.f3.4': 'Brendbuk', 'pk.f3.5': 'Qadoqlash + illustratsiyalar', 'pk.f3.6': "Ustuvor qo'llab-quvvatlash",
    'pk.note1': "Maslahatda aniqlanadi", 'pk.note2': "Loyihaga bog'liq", "pk.cur": "so'm",
    'bl.tag': 'blog', 'bl.heading': 'Maqolalar va maslahatlar', 'bl.read': "O'qish →", 'bl.min': 'daq',
    'bl.cat1': 'Brending', 'bl.cat2': 'Tipografiya', 'bl.cat3': 'Rang', 'bl.cat4': 'Minimalizm', 'bl.cat5': 'Logotip', 'bl.cat6': 'Trendlar',
    'bl.t1': "Kuchli brend qanday yaratiladi: 5 ta asosiy tamoyil",
    'bl.t2': "Brendingdagi tipografiya: shrift nima uchun muhim",
    'bl.t3': "Rang psixologiyasi: brend uchun palitra qanday tanlanadi",
    'bl.t4': "Dizayndagi minimalizm: ozroq ko'proq",
    'bl.t5': "Logotip kuchi: belgi qanday qilib brend tarixiga aylanadi",
    'bl.t6': "Grafik dizayn trendlari 2025",
    'bl.d1': "Brending — bu shunchaki logotip emas. Bu biznesingizni taniqli qiladigan tizim.",
    'bl.d2': "To'g'ri shrift brend xarakterini har qanday rasmdan yaxshiroq ifodalaydi.",
    'bl.d3': "Rang — kuchli vosita. U mijozlarning idrokiga va qarorlariga ta'sir qiladi.",
    'bl.d4': "Bo'sh joy — ma'noga nafas oldiradigan havo.",
    'bl.d5': "Buyuk logotiplar — kompaniya falsafasining bir shaklda siqilgan ifodasi.",
    'bl.d6': "2025 yilda brendlarning vizual tilini nima belgilaydi — asosiy yo'nalishlar.",
    'about.eyebrow': 'men haqimda',
    'about.title': "Salom! Men — faa4k,<br>grafik dizayner",
    'about.lead': "3 yildan ortiq brendlarga vizual tillarini topishda yordam beraman — logotipdan to'liq identifikatsiyagacha. Yaxshi dizayn biznes muammolarini hal qiladi va xotirada qoladi deb ishonaman.",
    'about.stat1': 'yil tajriba', 'about.stat2': 'loyiha', 'about.stat3': 'brend', 'about.stat4': "mamnun mijozlar",
    'about.h1': "Nima qilaman", 'about.h2': "Qanday ishlayman",
    'about.chip1': 'Brending', 'about.chip2': 'Logotiplar', 'about.chip3': 'Identifikatsiya', 'about.chip4': 'UI/UX', 'about.chip5': 'Qadoqlash', 'about.chip6': 'Tipografiya', 'about.chip7': 'Illustratsiya',
    'about.step1': "Vazifa va brendga sho'ng'iyman", 'about.step2': "Kontseptsiyalarni tanlash uchun ko'rsataman",
    'about.step3': "Izohlaringizga ko'ra takomillashtiraman", 'about.step4': "Manba fayllar va qo'llanmani topshiraman",
    'cta.tag': "Maxsus taklif", 'cta.h': "Birinchi maslahat<br>bepul",
    'cta.sub': "Loyihangiz, vazifalaringiz va uslubingizni muhokama qilamiz — bepul va majburiyatsiz.",
    'cta.btn': "Bepul yozilish", 'cta.svc': "Mening xizmatlarim →",
    'faq.eyebrow': 'savol va javoblar', 'faq.title': "Ko'p so'raladigan savollar",
    'faq.card.h': "Savollar qoldimi?", 'faq.card.p': "Menga yozing — shaxsan javob beraman.", 'faq.card.btn': "Menga yozish",
    'faq.q1': "Logotip va korporativ uslub qancha turadi?",
    'faq.q2': "Loyiha qancha vaqt oladi?",
    'faq.q3': "Qancha tuzatish kiritilgan?",
    'faq.q4': "Manba fayllarni berasizmi?",
    'faq.q5': "Loyiha ustida ishlash qanday amalga oshadi?",
    'faq.a1': "Narx vazifa hajmi va kontseptsiyalar soniga bog'liq. Bepul maslahatda qisqacha brifdan keyin aniq narx aytaman.",
    'faq.a2': "Logotip — 5 kundan, to'liq korporativ uslub — 2 haftadan. Aniq muddatlarni boshlanishdan oldin kelishib olamiz.",
    'faq.a3': "Paketga bog'liq — 3 tuzatishdan cheksizgacha. Tanlangan kontseptsiya doirasidagi tuzatishlar doimo kiritilgan.",
    'faq.a4': "Ha. To'lovdan keyin kerakli formatlardagi barcha manba fayllar va foydalanish qo'llanmasini olasiz.",
    'faq.a5': "Brifing → kontseptsiyalar → yo'nalish tanlash → takomillashtirish → yakuniy fayllar. Har bir bosqichda siz ishtirok etasiz va natijani tasdiqlaysiz.",
    'faq.regions': "Quyidagi davlatlardan mijozlar bilan ishlayman",
    'faq.r1': "O'zbekiston", 'faq.r2': "Qozog'iston", 'faq.r3': "Rossiya", 'faq.r4': "Qirg'iziston", 'faq.r5': "Yevropa",
    'ft.brand': "faa4k · grafik dizayner",
    'ft.cta.h': "Birinchi<br>loyihaga −10%", 'ft.cta.sub': "Yangi mijozlarga birinchi buyurtmada chegirma.",
    'ft.cta.fill': "Yozilish", 'ft.cta.svc': "Mening xizmatlarim →",
    'ft.about': "Grafik dizayner. Brendlar uchun brending, identifikatsiya va vizual tizimlar.",
    'ft.h1': "Xizmatlar", 'ft.h2': "Bo'limlar", 'ft.h3': "Bog'lanish",
    'ft.s1.1': "Brending", 'ft.s1.2': "Logotiplar", 'ft.s1.3': "UI/UX", 'ft.s1.4': "Qadoqlash", 'ft.s1.5': "Tipografiya",
    'ft.s2.1': "Xizmatlar", 'ft.s2.2': "Paketlar", 'ft.s2.3': "Blog", 'ft.s2.4': "Men haqimda", 'ft.s2.5': "Aloqa",
    'ft.s3.1': "Telegram kanal", 'ft.s3.2': "Instagram", 'ft.s3.3': "Maslahat uchun yozilish",
    'ft.copy': "© 2026 faa4k. Barcha huquqlar himoyalangan.", 'ft.top': "Yuqoriga ↑",
    'bk.eyebrow': "ariza", 'bk.title': "Ariza qoldiring", 'bk.sub': "Vazifangizni tasvirlab bering — bir kun ichida bog'lanaman",
    'bk.name.lbl': "Ism", 'bk.name.ph': "Sizga qanday murojaat qilsam bo'ladi?",
    'bk.phone.lbl': "Telefon / Telegram", 'bk.phone.ph': "+998 __ ___ __ __",
    'bk.service.lbl': "Xizmat", 'bk.o.ph': "— xizmat tanlang —",
    'bk.o.s1': "Logotip va korporativ uslub", 'bk.o.s2': "Vizitka va poligrafiya", 'bk.o.s3': "Mobil ilova UI/UX",
    'bk.o.s4': "Rebrending", 'bk.o.s5': "Ijtimoiy tarmoqlar dizayni", 'bk.o.s6': "Veb-dizayn",
    'bk.o.s7': "Brend qoidalari", 'bk.o.s8': "Qadoqlash dizayni", 'bk.o.s9': "Etiketka va stikerlar",
    'bk.o.p1': "Starter to'plam", 'bk.o.p2': "Standart to'plam", 'bk.o.p3': "Premium to'plam", 'bk.o.other': "Boshqa",
    'bk.budget.lbl': "Byudjet", 'bk.b.ph': "— taxminiy byudjet —",
    'bk.b1': "1 000 000 so'm gacha", 'bk.b2': "1–3 mln so'm", 'bk.b3': "3–5 mln so'm", 'bk.b4': "5+ mln so'm", 'bk.b5': "Uchrashuvda muhokama qilamiz",
    'bk.msg.lbl': "Xabar", 'bk.msg.ph': "Loyihangiz haqida gapirib bering...",
    'bk.submit': "Ariza yuborish", 'bk.sending': "Yuborilmoqda...", 'bk.sent': "Ariza yuborildi!",
    'bk.err': "Xato — qayta urinib ko'ring",
    'bk.note.ok': "Tez orada siz bilan bog'lanaman",
    'bk.note.err': "Yuborib bo'lmadi. Telegram orqali to'g'ridan-to'g'ri yozing.",
    'bk.req.name': "Iltimos, ismingizni kiriting",
    'panel.back': "Bosh sahifa",
  },
};

/* ═══════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  const dict = T[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k] !== undefined) el.textContent = dict[k];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (dict[k] !== undefined) el.placeholder = dict[k];
  });

  // Update dropdown button label
  const cur = document.getElementById('langCurrent');
  if (cur) cur.textContent = LANG_META[lang].code;

  // Update active state in dropdown
  document.querySelectorAll('.lang-item').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

/* ═══════════════════════════════════════════
   LANGUAGE DROPDOWN
═══════════════════════════════════════════ */
const langDropdown = document.getElementById('langDropdown');
const langToggle   = document.getElementById('langToggle');
const langMenu     = document.getElementById('langMenu');

langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
  langMenu.classList.toggle('open');
});

document.querySelectorAll('.lang-item').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    langDropdown.classList.remove('open');
    langMenu.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!langDropdown.contains(e.target)) {
    langDropdown.classList.remove('open');
    langMenu.classList.remove('open');
  }
});

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const mc = document.getElementById('themeColor');
  if (mc) mc.content = theme === 'dark' ? '#0C0308' : '#F6F0EB';
  localStorage.setItem('theme', theme);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  setTheme(cur === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.anim').forEach(el => observer.observe(el));

/* ═══════════════════════════════════════════
   PAGE PANELS
═══════════════════════════════════════════ */
let currentPanel = '';

function openPanel(name) {
  currentPanel = name;
  document.querySelectorAll('.page-panel').forEach(p => p.classList.remove('is-open'));
  if (name) {
    const panel = document.getElementById('panel-' + name);
    if (panel) {
      panel.classList.add('is-open');
      panel.scrollTop = 0;
    }
  }
  // Update active nav link
  document.querySelectorAll('.nav-link, .drawer-link').forEach(l => {
    l.classList.toggle('is-active', l.dataset.panel === name);
  });
  // Close mobile drawer
  document.getElementById('navbar').classList.remove('is-open');
}

// Event delegation — handles [data-panel] on any element (including cloned footer)
document.addEventListener('click', e => {
  const el = e.target.closest('[data-panel]');
  if (!el) return;
  e.preventDefault();
  openPanel(el.dataset.panel);
});

// Inject back button into every panel (shown only on mobile via CSS)
document.querySelectorAll('.page-panel').forEach(panel => {
  const btn = document.createElement('button');
  btn.className = 'panel-back-btn';
  btn.setAttribute('data-panel', '');
  btn.setAttribute('data-i18n', 'panel.back');
  btn.textContent = T[currentLang]?.['panel.back'] || 'Главная';
  panel.prepend(btn);
});

// Clone main footer into each panel slot
(function () {
  const footer = document.querySelector('footer.footer');
  if (!footer) return;
  document.querySelectorAll('.panel-footer-slot').forEach(slot => {
    const clone = footer.cloneNode(true);
    clone.id = ''; // remove id="contact" from clones
    clone.classList.add('panel-footer-el');
    // Remove scroll-animation classes so they show instantly
    clone.querySelectorAll('.anim').forEach(a => a.classList.remove('anim'));
    slot.replaceWith(clone);
  });
})();

/* ═══════════════════════════════════════════
   HAMBURGER
═══════════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const navBurger = document.getElementById('navBurger');

navBurger.addEventListener('click', () => navbar.classList.toggle('is-open'));

document.querySelectorAll('.drawer-link').forEach(link =>
  link.addEventListener('click', () => navbar.classList.remove('is-open'))
);

document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) navbar.classList.remove('is-open');
});

/* ═══════════════════════════════════════════
   ARTICLES
═══════════════════════════════════════════ */
const ARTICLES = [
  {
    date: '15 мая 2025',
    title: 'Как создать сильный бренд: 5 ключевых принципов',
    body: `<p>Брендинг — это не просто логотип и цвета. Это целая система ценностей, которая определяет, как мир воспринимает вашу компанию. Сильный бренд запоминается, вызывает доверие и создаёт эмоциональную связь с аудиторией.</p>
<h3>1. Чёткое позиционирование</h3>
<p>Прежде чем думать о визуале, ответьте на вопрос: кто вы и для кого вы работаете? Позиционирование — это фундамент, на котором строится всё остальное. Без него даже самый красивый логотип останется пустым.</p>
<h3>2. Визуальная последовательность</h3>
<p>Цвета, шрифты, стиль иллюстраций — всё должно работать в едином ключе на всех носителях: от визитки до Instagram. Непоследовательность разрушает доверие быстрее, чем плохой дизайн.</p>
<h3>3. Голос и тон</h3>
<p>Бренд — это личность. Как вы пишете тексты, какие слова выбираете, как отвечаете клиентам — это тоже часть дизайна. Согласованность голоса создаёт ощущение живого, настоящего бренда.</p>
<h3>4. Простота</h3>
<p>Лучшие бренды мира — Apple, Nike, Chanel — узнаются с одного взгляда. Сложность — это роскошь, которую не могут себе позволить те, кто хочет быть понятым. Упрощайте.</p>
<h3>5. Последовательность во времени</h3>
<p>Бренд строится годами. Не меняйте его каждые полгода. Дайте аудитории время полюбить вас — и она ответит лояльностью.</p>`
  },
  {
    date: '3 апреля 2025',
    title: 'Типографика в брендинге: почему шрифт важнее, чем кажется',
    body: `<p>Шрифт — это голос вашего бренда в молчании. До того как читатель прочтёт ни слова, он уже чувствует характер компании через форму букв. Засечки говорят об аристократизме, гротески — о современности, рукописные шрифты — о человечности.</p>
<h3>Характер через форму</h3>
<p>Выбор шрифта — это выбор личности. Юридическая фирма и стартап в сфере технологий могут говорить об одном и том же, но совершенно по-разному. Первая выберет строгие засечки, второй — лаконичный гротеск. Оба правы — для своей аудитории.</p>
<h3>Иерархия и читаемость</h3>
<p>Хорошая типографика — это не только красота, это навигация. Заголовки, подзаголовки, основной текст — каждый уровень должен чётко отличаться по размеру, весу или начертанию. Читатель должен понимать, куда смотреть, без усилий.</p>
<h3>Пара шрифтов</h3>
<p>Классическое сочетание: контрастная пара — засечки для заголовков, гротеск для текста. Или два гротеска разного характера. Главное — не смешивать больше двух шрифтов. Хаос в типографике — это хаос в голове у читателя.</p>`
  },
  {
    date: '18 февраля 2025',
    title: 'Психология цвета: как выбрать палитру для бренда',
    body: `<p>Цвет — это первое, что мы воспринимаем, и последнее, что забываем. Исследования показывают, что до 90% первого впечатления о продукте связано с цветом. Это огромная ответственность — и огромная возможность.</p>
<h3>Эмоции в цвете</h3>
<p>Красный — страсть, энергия, срочность. Синий — доверие, стабильность, профессионализм. Зелёный — рост, здоровье, природа. Чёрный — элегантность, власть, люксовость. Но эти ассоциации культурно обусловлены: что работает в Европе, может не работать в Азии.</p>
<h3>Как строить палитру</h3>
<p>Начните с одного ключевого цвета — того, который максимально точно передаёт характер бренда. Затем найдите ему пару: дополнительный или аналогичный цвет. Добавьте нейтральные тона для фона и текста. Итого: 4–5 цветов, не больше.</p>
<h3>Тестируйте контекст</h3>
<p>Цвет на экране и в печати — разные вещи. Цвет на белом фоне и на тёмном — тоже разные вещи. Прежде чем утвердить палитру, проверьте её в реальных условиях использования: на упаковке, на сайте, в рекламном баннере.</p>`
  },
  {
    date: '10 января 2025',
    title: 'Минимализм в дизайне: когда меньше — это больше',
    body: `<p>Минимализм часто путают с пустотой. Это ошибка. Настоящий минимализм — это максимальная выразительность при минимальных средствах. Каждый элемент на месте, каждый цвет оправдан, каждый миллиметр пространства несёт смысл.</p>
<h3>Белое пространство — это инструмент</h3>
<p>Пустота — не отсутствие дизайна. Это воздух, который позволяет важному дышать. Когда вокруг заголовка достаточно пространства, глаз сам притягивается к нему. Белое пространство управляет вниманием лучше, чем любые стрелки и рамки.</p>
<h3>Убирать — это искусство</h3>
<p>Легко добавить ещё один элемент. Трудно убрать то, что кажется важным. Задайте себе вопрос: что будет, если убрать это? Если ничего не изменится — убирайте. Сильный дизайн устойчив к сокращению.</p>
<h3>Минимализм — не стиль, а подход</h3>
<p>Минимализм работает в любом стиле: в роскошном и в демократичном, в строгом и в игровом. Это не про меньше декора — это про больше смысла. Спрашивайте себя не «как сделать красиво», а «как сделать точно».</p>`
  },
  {
    date: '5 декабря 2024',
    title: 'Сила логотипа: как символ становится историей бренда',
    body: `<p>Логотип — это, пожалуй, самый ответственный элемент в дизайне бренда. Он должен работать на визитке и на билборде, в чёрно-белом и в цвете, в 16 пикселях и в 16 метрах. И при этом — рассказывать историю.</p>
<h3>Простота как сила</h3>
<p>Великие логотипы просты до неприличия: яблоко, птица, галочка, три полоски. Простота — это не бедность идеи, это её концентрат. Чем проще форма, тем легче она запоминается, тем дольше не устаревает.</p>
<h3>Смысл в деталях</h3>
<p>Лучшие логотипы содержат скрытый смысл, который обнаруживается при внимательном взгляде. Стрела в FedEx, медведь на горе в логотипе Toblerone, стрелка «от А до Я» в Amazon. Такие детали создают ощущение богатства и умысла.</p>
<h3>Логотип как обещание</h3>
<p>В конечном счёте логотип — это подпись под обещанием бренда. Сам по себе он ничего не значит. Но со временем, когда бренд выполняет свои обещания, логотип накапливает в себе доверие, опыт и эмоции миллионов людей.</p>`
  },
  {
    date: '20 ноября 2024',
    title: 'Тренды графического дизайна 2025',
    body: `<p>Дизайн никогда не стоит на месте. 2025 год приносит новые ответы на старые вопросы: как выделиться в перегруженной информацией среде? Как сохранить человечность в эпоху ИИ? Как совместить эстетику и функцию?</p>
<h3>Крупная типографика как герой</h3>
<p>Слова становятся визуальными объектами. Заголовки занимают весь экран, шрифт становится иллюстрацией. Это реакция на визуальный шум: когда все кричат картинками, буквы становятся неожиданно тихими и мощными.</p>
<h3>Тактильность и аналог</h3>
<p>После лет цифрового гиперсовершенства — возврат к несовершенству. Зернистые текстуры, ризографическая печать, «случайные» мазки кисти. Аудитория хочет чувствовать, что за дизайном стоит человек, а не алгоритм.</p>
<h3>ИИ как инструмент, не автор</h3>
<p>Лучшие дизайнеры 2025 года используют ИИ для ускорения рутинных задач — но не для замены творческого мышления. Технология усиливает человека, но не заменяет его точку зрения, его вкус, его историю.</p>`
  },
];

const articleModal   = document.getElementById('articleModal');
const articleContent = document.getElementById('articleModalContent');
const articleClose   = document.getElementById('articleModalClose');
const articleBackdrop = document.getElementById('articleModalBackdrop');

function openArticle(idx) {
  const a = ARTICLES[idx];
  if (!a) return;
  articleContent.innerHTML =
    `<p class="article-meta">${a.date}</p>` +
    `<h2 class="article-h">${a.title}</h2>` +
    `<div class="article-text">${a.body}</div>`;
  articleModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  articleModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-article]').forEach(btn => {
  btn.addEventListener('click', () => openArticle(+btn.dataset.article));
});

articleClose.addEventListener('click', closeArticle);
articleBackdrop.addEventListener('click', closeArticle);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('articleModal');
    if (modal && modal.classList.contains('open')) closeArticle();
  }
});


/* ═══════════════════════════════════════════
   REVIEWS CAROUSEL
═══════════════════════════════════════════ */
(function initReviewsCarousel() {
  const REVIEWS = [
    { name: 'Азиза Р.',       service: 'Брендинг',           text: 'Результат превзошёл все ожидания. Логотип и фирменный стиль получились именно такими, как я мечтала. Спасибо за внимание к деталям!' },
    { name: 'Тимур К.',       service: 'Логотип',            text: 'Очень профессиональная работа. Несколько вариантов логотипа, быстрые правки. Рекомендую всем, кто ищет качественный дизайн.' },
    { name: 'Камилла М.',     service: 'Дизайн упаковки',    text: 'Упаковка для нашего продукта выглядит потрясающе! Покупатели сразу замечают и хвалят оформление. Буду обращаться снова.' },
    { name: 'Санжар Б.',      service: 'UI/UX',              text: 'Интерфейс приложения стал намного удобнее и красивее. Пользователи довольны, конверсия выросла. Отличная работа!' },
    { name: 'Нилуфар А.',     service: 'Айдентика',          text: 'Полностью обновили образ бренда. Клиенты сразу заметили разницу и стали чаще обращаться.' },
    { name: 'Отабек Х.',      service: 'Презентация',        text: 'Презентация для инвесторов получилась на высшем уровне. Успешно привлекли финансирование — спасибо!' },
    { name: 'Зарина У.',      service: 'Соцсети',            text: 'Оформление Instagram-аккаунта преобразило наш профиль. Подписчики растут, охваты увеличились вдвое.' },
    { name: 'Бахром Ю.',      service: 'Логотип',            text: 'Простой и запоминающийся логотип — именно то, что нужно для нашего бизнеса. Работали быстро и чётко.' },
    { name: 'Дилноза С.',     service: 'Брендинг',           text: 'Работали очень быстро и качественно. Всё сделали в срок и с душой. Ощущается, что дизайнер вникает в задачу.' },
    { name: 'Акбар Т.',       service: 'UI/UX',              text: 'Дизайн сайта стал намного привлекательнее. Среднее время на странице увеличилось вдвое.' },
    { name: 'Феруза Н.',      service: 'Упаковка',           text: 'Упаковка получилась стильной и функциональной. Товар начал выделяться на полке среди конкурентов.' },
    { name: 'Джасур М.',      service: 'Иллюстрация',        text: 'Иллюстрации для книги получились живыми и выразительными. Издательство тоже осталось в восторге.' },
    { name: 'Шахло И.',       service: 'Типографика',        text: 'Постер с типографикой украсил наш офис. Стильно, со смыслом, и каждый гость спрашивает, кто автор.' },
    { name: 'Улугбек Р.',     service: 'Брендинг',           text: 'Новый фирменный стиль сразу повысил узнаваемость компании. Партнёры заметили изменения с первого взгляда.' },
    { name: 'Малика К.',      service: 'Упаковка',           text: 'Клиенты постоянно спрашивают, кто делал упаковку. Это лучший комплимент для дизайнера!' },
    { name: 'Рустам Д.',      service: 'Презентация',        text: 'Делали презентацию для конференции — выступление прошло на ура. Слайды выглядели профессионально.' },
    { name: 'Гульнора Ш.',    service: 'Логотип',            text: 'Логотип получился лаконичным и современным. Именно так и представляли с самого начала.' },
    { name: 'Бобур А.',       service: 'Соцсети',            text: 'Контент для соцсетей стал системным и красивым. Аудитория реагирует активнее.' },
    { name: 'Наргиза В.',     service: 'UI/UX',              text: 'Мобильное приложение теперь радует глаз. Пользователи оставляют положительные отзывы в сторах.' },
    { name: 'Комил Р.',       service: 'Айдентика',          text: 'Айдентика для нашего ресторана создала нужную атмосферу ещё до открытия.' },
    { name: 'Лола Б.',        service: 'Брендинг',           text: 'Профессионал своего дела. Всё объяснил, выслушал пожелания, сделал идеально и в срок.' },
    { name: 'Хуршид Е.',      service: 'Иллюстрация',        text: 'Персонажи для игры получились яркими и запоминающимися. Продолжаем долгосрочное сотрудничество.' },
    { name: 'Мадина Ф.',      service: 'Типографика',        text: 'Афиша для нашего мероприятия привлекла намного больше людей, чем раньше.' },
    { name: 'Алишер Г.',      service: 'Упаковка',           text: 'Редизайн упаковки поднял продажи. Инвестиции в дизайн окупились за первый месяц.' },
    { name: 'Юлдуз Р.',       service: 'Логотип',            text: 'Работала с несколькими дизайнерами, но только здесь поняли мою идею с первого раза.' },
    { name: 'Фаррух Н.',      service: 'UI/UX',              text: 'Дизайн интернет-магазина увеличил конверсию на 30%. Инвестиции окупились очень быстро.' },
    { name: 'Сабина А.',      service: 'Брендинг',           text: 'Бренд стал узнаваемым и цельным. Клиенты часто говорят, что у нас «красиво».' },
    { name: 'Тошпулат М.',    service: 'Презентация',        text: 'Сделали за одну ночь перед важной встречей — и всё было идеально. Реально спасли!' },
    { name: 'Мухаммад О.',    service: 'Соцсети',            text: 'Визуальный стиль профиля изменился до неузнаваемости. Теперь не стыдно показывать клиентам.' },
    { name: 'Дина К.',        service: 'Айдентика',          text: 'Новая айдентика для нашей клиники вызывает доверие у пациентов с первого взгляда.' },
    { name: 'Асел Р.',        service: 'Иллюстрация',        text: 'Иллюстрации для детского журнала полюбили и дети, и родители! Тёплые и живые образы.' },
    { name: 'Нодир Б.',       service: 'Брендинг',           text: 'Полный ребрендинг прошёл гладко. Команда профессионалов, которые слышат заказчика.' },
    { name: 'Зебо И.',        service: 'Логотип',            text: 'Логотип отражает ценности нашей компании. Очень точное попадание в концепцию с первого варианта.' },
    { name: 'Сарвар У.',      service: 'UI/UX',              text: 'Юзабилити сайта улучшилось значительно. Клиенты находят нужную информацию намного быстрее.' },
    { name: 'Барно Х.',       service: 'Упаковка',           text: 'Наш продукт наконец выглядит так же хорошо, как и на вкус. Огромное спасибо!' },
    { name: 'Озодбек Л.',     service: 'Типографика',        text: 'Фирменный шрифтовой стиль придал изданию особый характер. Читатели сразу отличают нас от других.' },
    { name: 'Чулпан М.',      service: 'Брендинг',           text: 'Детальная проработка каждого элемента. Брендбук — настоящее произведение искусства.' },
    { name: 'Хамид Т.',       service: 'Соцсети',            text: 'Шаблоны для постов экономят время и держат единый стиль. Удобно и очень красиво.' },
    { name: 'Матлуба В.',     service: 'Айдентика',          text: 'Корпоративная айдентика объединила всю команду. Сотрудники гордятся своим брендом.' },
    { name: 'Ислом Р.',       service: 'Иллюстрация',        text: 'Иллюстрации для рекламной кампании были восприняты очень тепло. Результат превзошёл все KPI.' },
  ];

  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  // Inject cards
  track.innerHTML = REVIEWS.map(r => {
    const initials = r.name.split(' ').map(w => w[0]).join('').toUpperCase();
    return `<div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar">${initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-service">${r.service}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  const prevBtn = document.querySelector('.rev-arr-prev');
  const nextBtn = document.querySelector('.rev-arr-next');
  let current = 0;

  function getVisible() {
    const w = window.innerWidth;
    if (w >= 1100) return 4;
    if (w >= 768)  return 3;
    if (w >= 500)  return 2;
    return 1;
  }

  function getStepPx() {
    const card = track.querySelector('.review-card');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return card.getBoundingClientRect().width + gap;
  }

  function setCardWidths() {
    const vp = document.querySelector('.reviews-viewport');
    if (!vp) return;
    const vis = getVisible();
    const gap = 20;
    const w = Math.floor((vp.offsetWidth - gap * (vis - 1)) / vis);
    track.querySelectorAll('.review-card').forEach(c => { c.style.width = w + 'px'; });
  }

  function go(n) {
    const max = REVIEWS.length - getVisible();
    current = Math.max(0, Math.min(n, max));
    track.style.transform = `translateX(${-current * getStepPx()}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= REVIEWS.length - getVisible();
  }

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setCardWidths();
      go(current);
    }, 80);
  });

  setCardWidths();
  go(0);
})();

// FAB chat button — open booking panel
document.getElementById('fabChat').addEventListener('click', () => openPanel('book'));

/* ═══════════════════════════════════════════
   BENTO REVIEWS TICKER
═══════════════════════════════════════════ */
(function () {
  const ticker = document.getElementById('bentoTicker');
  if (!ticker) return;

  const TICKER_REVIEWS = [
    { name: 'Азиза Р.',      text: 'Логотип получился именно таким, как я мечтала. Внимание к деталям на высоте.' },
    { name: 'Камол Б.',      text: 'Фирменный стиль разработан с душой. Клиенты сразу замечают, что бренд серьёзный.' },
    { name: 'Дилноза М.',    text: 'Работа выполнена быстро и качественно. Логотип вызывает восхищение у всех.' },
    { name: 'Жасур Х.',      text: 'Наш новый логотип идеально отражает характер компании. Рекомендую!' },
    { name: 'Нилуфар С.',    text: 'Упаковка продукта теперь выглядит премиально. Продажи выросли заметно.' },
    { name: 'Отабек Р.',     text: 'Дизайн соцсетей стал единым и узнаваемым. Подписчики отметили изменения.' },
    { name: 'Зулфия А.',     text: 'Очень вдумчивый подход. Все пожелания были учтены с первого раза.' },
    { name: 'Санжар Т.',     text: 'Сайт получил красивый и понятный дизайн. Конверсия выросла вдвое.' },
    { name: 'Малика Э.',     text: 'Визитки и брошюры теперь выглядят как из топового агентства. Спасибо!' },
    { name: 'Бахром Ю.',     text: 'Ребрендинг прошёл безупречно. Старые клиенты узнают нас, новые — влюбляются.' },
    { name: 'Феруза К.',     text: 'Гайдлайн бренда помог команде держать единый стиль во всём. Незаменимо.' },
    { name: 'Умид Н.',       text: 'Этикетка для нашего продукта стала настоящим украшением полки в магазине.' },
    { name: 'Сарвар У.',     text: 'Юзабилити сайта улучшилось значительно. Клиенты находят нужное быстрее.' },
    { name: 'Барно Х.',      text: 'Наш продукт наконец выглядит так же хорошо, как и на вкус. Огромное спасибо!' },
    { name: 'Озодбек Л.',    text: 'Фирменный шрифтовой стиль придал изданию особый характер. Нас узнают.' },
    { name: 'Чулпан М.',     text: 'Детальная проработка каждого элемента. Брендбук — настоящее произведение.' },
    { name: 'Хамид Т.',      text: 'Шаблоны для постов экономят время и держат единый стиль. Удобно и красиво.' },
    { name: 'Матлуба В.',    text: 'Корпоративная айдентика объединила всю команду. Мы гордимся своим брендом.' },
  ];

  function makeCard(r) {
    const div = document.createElement('div');
    div.className = 'bento-mini';
    div.innerHTML = `<div class="bento-mini-stars">★★★★★</div><p>${r.text}</p><span class="bento-mini-name">${r.name}</span>`;
    return div;
  }

  // Fill twice for seamless loop
  TICKER_REVIEWS.forEach(r => ticker.appendChild(makeCard(r)));
  TICKER_REVIEWS.forEach(r => ticker.appendChild(makeCard(r)));
})();

/* ═══════════════════════════════════════════
   SERVICES FILTER
═══════════════════════════════════════════ */
document.querySelectorAll('.srv-list').forEach(list => {
  const scope = list.closest('.sec-inner') || document;
  const chips = Array.from(scope.querySelectorAll('.srv-chip'));
  const items = Array.from(list.querySelectorAll('.srv-item'));
  if (!chips.length) return;

  function apply(cat) {
    list.classList.add('is-switching');
    setTimeout(() => {
      items.forEach(it => {
        const show = cat === 'all' || it.dataset.cat === cat;
        it.classList.toggle('hide', !show);
      });
      list.classList.remove('is-switching');
    }, 200);
  }

  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.toggle('is-active', c === chip));
    apply(chip.dataset.cat);
  }));
});

/* ═══════════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════════ */
(function () {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;
  items.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(other => {
        other.classList.remove('open');
        const oa = other.querySelector('.faq-a');
        if (oa) oa.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();

/* ═══════════════════════════════════════════
   HERO CAROUSEL
═══════════════════════════════════════════ */
(function () {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots   = Array.from(document.querySelectorAll('.hero-dot'));
  const heads  = Array.from(document.querySelectorAll('.hero-heading'));
  if (slides.length < 2) return;

  let idx = 0, timer = null;

  function go(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    heads.forEach((h, i) => h.classList.toggle('is-active', i === idx));
  }
  function start() { stop(); timer = setInterval(() => go(idx + 1), 5000); }
  function stop()  { if (timer) { clearInterval(timer); timer = null; } }

  dots.forEach(d => d.addEventListener('click', () => { go(+d.dataset.slide); start(); }));

  const stage = document.querySelector('.hero-stage');
  if (stage && window.matchMedia('(hover: hover)').matches) {
    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', start);
  }
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  start();
})();

/* ═══════════════════════════════════════════
   BOOKING FORM
═══════════════════════════════════════════ */
// ↓ Fill in your bot token and group chat ID after getting them from @BotFather
const TELEGRAM_TOKEN   = '8866781995:AAE6u4IDLUJ6M-4XJFqWemRUj81Nmtj-93M';
const TELEGRAM_CHAT_ID = '-5348875104';

// Pre-fill service select when panel is opened via data-service
const _origOpenPanel = openPanel;
(function () {
  // Patch openPanel to handle service pre-fill
  const _open = openPanel;
  window._bookLastTrigger = null;
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-panel="book"]');
    if (el && el.dataset.service) window._bookLastTrigger = el.dataset.service;
    else if (el) window._bookLastTrigger = null;
  }, true); // capture phase — runs before the delegation handler
})();

// Watch for book panel opening and pre-fill service
const _panelObserver = new MutationObserver(() => {
  const panel = document.getElementById('panel-book');
  if (!panel) return;
  if (panel.classList.contains('is-open')) {
    const sel = document.getElementById('bookService');
    if (sel && window._bookLastTrigger) {
      sel.value = window._bookLastTrigger;
    }
  }
});
const bookPanel = document.getElementById('panel-book');
if (bookPanel) _panelObserver.observe(bookPanel, { attributes: true, attributeFilter: ['class'] });

// Form submission
const bookForm   = document.getElementById('bookForm');
const bookSubmit = document.getElementById('bookSubmit');
const bookNote   = document.getElementById('bookNote');

if (bookForm) {
  bookForm.addEventListener('submit', async e => {
    e.preventDefault();

    const name    = document.getElementById('bookName').value.trim();
    const phone   = document.getElementById('bookPhone').value.trim();
    const service = document.getElementById('bookService').value;
    const budget  = document.getElementById('bookBudget').value;
    const message = document.getElementById('bookMsg').value.trim();

    if (!name) { showNote(T[currentLang]['bk.req.name'], 'err'); return; }

    bookSubmit.disabled = true;
    bookSubmit.textContent = T[currentLang]['bk.sending'];
    bookNote.textContent = '';

    const text =
      `📩 Новая заявка с сайта faa4k\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Контакт: ${phone || 'не указан'}\n` +
      `🎨 Услуга: ${service || 'не выбрана'}\n` +
      `💰 Бюджет: ${budget || 'не указан'}\n` +
      `💬 Сообщение: ${message || '—'}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'HTML' }),
        }
      );
      const data = await res.json();
      if (data.ok) {
        bookSubmit.classList.add('is-ok');
        bookSubmit.textContent = T[currentLang]['bk.sent'];
        showNote(T[currentLang]['bk.note.ok'], 'ok');
        bookForm.reset();
        setTimeout(() => {
          bookSubmit.classList.remove('is-ok');
          bookSubmit.textContent = T[currentLang]['bk.submit'];
          bookSubmit.disabled = false;
        }, 4000);
      } else {
        throw new Error(data.description || 'Telegram error');
      }
    } catch {
      bookSubmit.classList.add('is-err-state');
      bookSubmit.textContent = T[currentLang]['bk.err'];
      showNote(T[currentLang]['bk.note.err'], 'err');
      setTimeout(() => {
        bookSubmit.classList.remove('is-err-state');
        bookSubmit.textContent = T[currentLang]['bk.submit'];
        bookSubmit.disabled = false;
      }, 4000);
    }
  });
}

function showNote(msg, type) {
  if (!bookNote) return;
  bookNote.textContent = msg;
  bookNote.className = 'book-note ' + (type === 'ok' ? 'book-note-ok' : 'book-note-err');
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
applyLang(currentLang);
setTheme(localStorage.getItem('theme') || 'light');

/* ═══════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════ */
(function initCursor() {
  const el = document.getElementById('cCursor');
  if (!el || window.matchMedia('(pointer: coarse)').matches) {
    if (el) el.remove();
    return;
  }

  let tx = -200, ty = -200, cx = -200, cy = -200;
  let hovering = false;
  let idleTimer = null;

  function setClass(cls) {
    el.classList.remove('c-moving', 'c-idle', 'c-hover');
    if (cls) el.classList.add(cls);
  }

  const INTERACT = 'a, button, input, select, textarea, label, [data-panel], ' +
    '.faq-btn, .pkg-card, .service-item-header, .nav-link, .portfolio-card, ' +
    '.bento-item, .faq-item, .filter-btn, .book-submit, [role="button"]';

  document.addEventListener('mousemove', function(e) {
    tx = e.clientX;
    ty = e.clientY;
    el.classList.add('c-visible');
    if (!hovering) setClass('c-moving');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      if (!hovering) setClass('c-idle');
    }, 1500);
  });

  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(INTERACT)) {
      hovering = true;
      setClass('c-hover');
      clearTimeout(idleTimer);
    }
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(INTERACT)) {
      hovering = false;
      setClass('c-moving');
    }
  });

  document.addEventListener('mouseleave', function() { el.classList.remove('c-visible'); });
  document.addEventListener('mouseenter', function() { el.classList.add('c-visible'); });

  (function tick() {
    cx += (tx - cx) * 0.13;
    cy += (ty - cy) * 0.13;
    el.style.left = cx + 'px';
    el.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
})();
