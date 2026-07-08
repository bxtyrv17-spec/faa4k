/* ═══════════════════════════════════════════
   LANGUAGE DATA
═══════════════════════════════════════════ */
const LANG_META = {
  ru: { code: 'RU', name: 'Русский' },
  en: { code: 'EN', name: 'English' },
  uz: { code: 'UZ', name: "O'zbek" },
  kz: { code: 'KZ', name: 'Қазақша' },
  ge: { code: 'GE', name: 'ქართული' },
  tr: { code: 'TR', name: 'Türkçe' },
  az: { code: 'AZ', name: 'Azərbaycan' },
  ua: { code: 'UA', name: 'Українська' },
  zh: { code: 'ZH', name: '中文' },
  es: { code: 'ES', name: 'Español' },
  tj: { code: 'TJ', name: 'Тоҷикӣ' },
};

const T = {
  ru: {
    'nav.home': 'Главная', 'nav.services': 'Услуги', 'nav.packages': 'Пакеты',
    'nav.blog': 'Блог', 'nav.about': 'Обо мне', 'nav.contact': 'Контакты', 'nav.book': 'Записаться',
    'hero.role': 'Графический дизайнер', 'hero.h1': 'Дизайн — это', 'hero.h2': 'язык без слов',
    'hero.desc': 'Создаю визуальные образы, которые вдохновляют и навсегда остаются в памяти.',
    'hero.cta1': 'Смотреть работы', 'hero.cta2': 'Обо мне', 'hero.label': 'Дизайн студия',
    'stat.years': 'лет в дизайне', 'stat.projects': 'проектов', 'stat.clients': 'брендов', 'stat.awards': 'награды',
    'about.tag': 'обо мне',
    'about.body': 'Хороший дизайн — это не просто красота. Это <mark>ясность мысли</mark>, воплощённая в форме, которая меняет то, как мир <mark>видит себя</mark>',
    'sv.tag': 'услуги', 'sv.heading': 'Что я делаю', 'sv.all': 'Все услуги',
    'wh.tag': 'почему я', 'wh.heading': 'Дизайн, который ставит<br>ваш бренд на первое место',
    'sv.c1': 'Брендинг', 'sv.c2': 'Айдентика', 'sv.c3': 'UI/UX', 'sv.c4': 'Упаковка', 'sv.c5': 'Типографика', 'sv.c6': 'Иллюстрация',
    'pk.tag': 'пакеты', 'pk.heading': 'Выберите свой пакет', 'pk.sub': 'Выберите подходящий формат сотрудничества',
    'pk.n1': 'Старт', 'pk.n2': 'Стандарт', 'pk.n3': 'Премиум',
    'pk.d1': 'Для малого бизнеса', 'pk.d2': 'Для растущих брендов', 'pk.d3': 'Для крупных проектов',
    'pk.popular': 'Популярный', 'pk.btn': 'Выбрать пакет',
    'bl.tag': 'блог', 'bl.heading': 'Статьи', 'bl.read': 'Читать →',
    'ct.tag': 'контакты', 'ct.heading': 'Начнём что-то<br>создавать?', 'ct.email': 'Написать на почту', 'ct.tg': 'Telegram',
  },
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.packages': 'Packages',
    'nav.blog': 'Blog', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.book': 'Book now',
    'hero.role': 'Graphic Designer', 'hero.h1': 'Design is a', 'hero.h2': 'language without words',
    'hero.desc': 'Creating visual images that inspire and stay in memory forever.',
    'hero.cta1': 'View work', 'hero.cta2': 'About me', 'hero.label': 'Design studio',
    'stat.years': 'years in design', 'stat.projects': 'projects', 'stat.clients': 'brands', 'stat.awards': 'awards',
    'about.tag': 'about me',
    'about.body': 'Good design is not just beauty. It is <mark>clarity of thought</mark>, embodied in form that changes how the world <mark>sees itself</mark>',
    'sv.tag': 'services', 'sv.heading': 'What I do', 'sv.all': 'All services',
    'wh.tag': 'why me', 'wh.heading': 'Design that puts<br>your brand first',
    'sv.c1': 'Branding', 'sv.c2': 'Identity', 'sv.c3': 'UI/UX', 'sv.c4': 'Packaging', 'sv.c5': 'Typography', 'sv.c6': 'Illustration',
    'pk.tag': 'packages', 'pk.heading': 'Choose your package', 'pk.sub': 'Choose the right format of collaboration',
    'pk.n1': 'Start', 'pk.n2': 'Standard', 'pk.n3': 'Premium',
    'pk.d1': 'For small business', 'pk.d2': 'For growing brands', 'pk.d3': 'For big projects',
    'pk.popular': 'Popular', 'pk.btn': 'Choose plan',
    'bl.tag': 'blog', 'bl.heading': 'Articles', 'bl.read': 'Read →',
    'ct.tag': 'contact', 'ct.heading': "Let's create<br>something together", 'ct.email': 'Send email', 'ct.tg': 'Telegram',
  },
  uz: {
    'nav.home': 'Bosh sahifa', 'nav.services': 'Xizmatlar', 'nav.packages': 'Paketlar',
    'nav.blog': 'Blog', 'nav.about': 'Men haqimda', 'nav.contact': 'Aloqa', 'nav.book': "Ro'yxatdan o'tish",
    'hero.role': 'Grafik dizayner', 'hero.h1': 'Dizayn —', 'hero.h2': "so'zsiz til",
    'hero.desc': "Ilhom beradigan va xotirada abadiy qoladigan vizual obrazlar yarataman.",
    'hero.cta1': "Ishlarni ko'rish", 'hero.cta2': 'Men haqimda', 'hero.label': 'Dizayn studiyasi',
    'stat.years': 'yil tajriba', 'stat.projects': 'loyiha', 'stat.clients': 'brend', 'stat.awards': 'mukofot',
    'about.tag': 'men haqimda',
    'about.body': "Yaxshi dizayn — bu faqat chiroyli ko'rinish emas. Bu <mark>fikrning ravshanligi</mark>, shaklda mujassamlashgan va dunyo o'zini qanday <mark>ko'rishini</mark> o'zgartiradi",
    'sv.tag': 'xizmatlar', 'sv.heading': 'Nima qilaman', 'sv.all': 'Barcha xizmatlar',
    'wh.tag': 'nega men', 'wh.heading': "Brendingizni birinchi<br>o'ringa qo'yadigan dizayn",
    'sv.c1': 'Brending', 'sv.c2': 'Identifikatsiya', 'sv.c3': 'UI/UX', 'sv.c4': 'Qadoqlash', 'sv.c5': 'Tipografiya', 'sv.c6': 'Illustratsiya',
    'pk.tag': 'paketlar', 'pk.heading': "O'zingizga mos paketni tanlang", 'pk.sub': 'Hamkorlik formatini tanlang',
    'pk.n1': 'Start', 'pk.n2': 'Standart', 'pk.n3': 'Premium',
    'pk.d1': 'Kichik biznes uchun', 'pk.d2': "O'suvchi brendlar uchun", 'pk.d3': 'Yirik loyihalar uchun',
    'pk.popular': 'Mashhur', 'pk.btn': 'Paketni tanlash',
    'bl.tag': 'blog', 'bl.heading': 'Maqolalar', 'bl.read': "O'qish →",
    'ct.tag': 'aloqa', 'ct.heading': 'Birgalikda nimadir<br>yarataylik?', 'ct.email': 'Pochta yozish', 'ct.tg': 'Telegram',
  },
  kz: {
    'nav.home': 'Басты', 'nav.services': 'Қызметтер', 'nav.packages': 'Пакеттер',
    'nav.blog': 'Блог', 'nav.about': 'Мен туралы', 'nav.contact': 'Байланыс', 'nav.book': 'Жазылу',
    'hero.role': 'Графикалық дизайнер', 'hero.h1': 'Дизайн —', 'hero.h2': 'сөзсіз тіл',
    'hero.desc': 'Шабыт беріп, жадта мәңгі қалатын визуал бейнелер жасаймын.',
    'hero.cta1': 'Жұмыстарды көру', 'hero.cta2': 'Мен туралы', 'hero.label': 'Дизайн студиясы',
    'stat.years': 'жыл тәжірибе', 'stat.projects': 'жоба', 'stat.clients': 'брендтер', 'stat.awards': 'марапат',
    'about.tag': 'мен туралы',
    'about.body': 'Жақсы дизайн — тек сұлулық емес. Бұл <mark>ой айқындығы</mark>, дүниенің өзін қалай <mark>көретінін</mark> өзгертетін форма',
    'sv.tag': 'қызметтер', 'sv.heading': 'Не жасаймын', 'sv.all': 'Барлық қызметтер',
    'wh.tag': 'неге мен', 'wh.heading': 'Брендіңізді бірінші<br>орынға қоятын дизайн',
    'sv.c1': 'Брендинг', 'sv.c2': 'Айдентика', 'sv.c3': 'UI/UX', 'sv.c4': 'Қаптама', 'sv.c5': 'Типография', 'sv.c6': 'Иллюстрация',
    'pk.tag': 'пакеттер', 'pk.heading': 'Өзіңізге сай пакетті таңдаңыз', 'pk.sub': 'Қолайлы ынтымақтастық форматын таңдаңыз',
    'pk.n1': 'Старт', 'pk.n2': 'Стандарт', 'pk.n3': 'Премиум',
    'pk.d1': 'Шағын бизнес үшін', 'pk.d2': 'Өсіп келе жатқан брендтер үшін', 'pk.d3': 'Ірі жобалар үшін',
    'pk.popular': 'Танымал', 'pk.btn': 'Пакетті таңдау',
    'bl.tag': 'блог', 'bl.heading': 'Мақалалар', 'bl.read': 'Оқу →',
    'ct.tag': 'байланыс', 'ct.heading': 'Бірге бірдеңе<br>жасайық?', 'ct.email': 'Хат жазу', 'ct.tg': 'Telegram',
  },
  ge: {
    'nav.home': 'მთავარი', 'nav.services': 'სერვისები', 'nav.packages': 'პაკეტები',
    'nav.blog': 'ბლოგი', 'nav.about': 'ჩემ შესახებ', 'nav.contact': 'კონტაქტი', 'nav.book': 'დარეგისტრირება',
    'hero.role': 'გრაფიკული დიზაინერი', 'hero.h1': 'დიზაინი —', 'hero.h2': 'სიტყვებს მიღმა',
    'hero.desc': 'ვქმნი ვიზუალურ სახეებს, რომლებიც შთააგონებენ და სამუდამოდ რჩებიან მეხსიერებაში.',
    'hero.cta1': 'ნამუშევრები', 'hero.cta2': 'ჩემ შესახებ', 'hero.label': 'დიზაინ სტუდია',
    'stat.years': 'წელი დიზაინში', 'stat.projects': 'პროექტი', 'stat.clients': 'ბრენდი', 'stat.awards': 'ჯილდო',
    'about.tag': 'ჩემ შესახებ',
    'about.body': 'კარგი დიზაინი მხოლოდ სილამაზე არ არის. ეს <mark>აზრის სიცხადეა</mark>, ფორმაში მოცემული, რომელიც ცვლის სამყაროს <mark>თვით-ხედვას</mark>',
    'sv.tag': 'სერვისები', 'sv.heading': 'რას ვაკეთებ', 'sv.all': 'ყველა სერვისი',
    'wh.tag': 'რატომ მე', 'wh.heading': 'დიზაინი, რომელიც თქვენს<br>ბრენდს პირველ ადგილზე აყენებს',
    'sv.c1': 'ბრენდინგი', 'sv.c2': 'იდენტობა', 'sv.c3': 'UI/UX', 'sv.c4': 'შეფუთვა', 'sv.c5': 'ტიპოგრაფია', 'sv.c6': 'ილუსტრაცია',
    'pk.tag': 'პაკეტები', 'pk.heading': 'აირჩიეთ თქვენი პაკეტი', 'pk.sub': 'აირჩიეთ თანამშრომლობის სასურველი ფორმა',
    'pk.n1': 'სტარტი', 'pk.n2': 'სტანდარტი', 'pk.n3': 'პრემიუმი',
    'pk.d1': 'მცირე ბიზნესისთვის', 'pk.d2': 'მზარდი ბრენდებისთვის', 'pk.d3': 'მსხვილი პროექტებისთვის',
    'pk.popular': 'პოპულარული', 'pk.btn': 'პაკეტის არჩევა',
    'bl.tag': 'ბლოგი', 'bl.heading': 'სტატიები', 'bl.read': 'წაკითხვა →',
    'ct.tag': 'კონტაქტი', 'ct.heading': 'ერთად შევქმნათ<br>რაიმე?', 'ct.email': 'ელ-ფოსტა', 'ct.tg': 'Telegram',
  },
  tr: {
    'nav.home': 'Ana Sayfa', 'nav.services': 'Hizmetler', 'nav.packages': 'Paketler',
    'nav.blog': 'Blog', 'nav.about': 'Hakkımda', 'nav.contact': 'İletişim', 'nav.book': 'Rezervasyon',
    'hero.role': 'Grafik Tasarımcı', 'hero.h1': 'Tasarım —', 'hero.h2': 'sözsüz bir dil',
    'hero.desc': 'İlham veren ve belleklerde sonsuza kadar kalan görsel imgeler yaratıyorum.',
    'hero.cta1': 'İşleri Gör', 'hero.cta2': 'Hakkımda', 'hero.label': 'Tasarım Stüdyosu',
    'stat.years': 'yıl deneyim', 'stat.projects': 'proje', 'stat.clients': 'marka', 'stat.awards': 'ödül',
    'about.tag': 'hakkımda',
    'about.body': "İyi tasarım sadece güzellik değildir. Bu <mark>düşünce netliği</mark>, dünyanın kendini nasıl <mark>gördüğünü</mark> değiştiren formdur",
    'sv.tag': 'hizmetler', 'sv.heading': 'Ne yapıyorum', 'sv.all': 'Tüm hizmetler',
    'wh.tag': 'neden ben', 'wh.heading': 'Markanızı ön plana<br>çıkaran tasarım',
    'sv.c1': 'Marka Kimliği', 'sv.c2': 'Kurumsal Kimlik', 'sv.c3': 'UI/UX', 'sv.c4': 'Ambalaj', 'sv.c5': 'Tipografi', 'sv.c6': 'İllüstrasyon',
    'pk.tag': 'paketler', 'pk.heading': 'Paketinizi seçin', 'pk.sub': 'Size uygun iş birliği formatını seçin',
    'pk.n1': 'Başlangıç', 'pk.n2': 'Standart', 'pk.n3': 'Premium',
    'pk.d1': 'Küçük işletmeler için', 'pk.d2': 'Büyüyen markalar için', 'pk.d3': 'Büyük projeler için',
    'pk.popular': 'Popüler', 'pk.btn': 'Paketi seç',
    'bl.tag': 'blog', 'bl.heading': 'Makaleler', 'bl.read': 'Oku →',
    'ct.tag': 'iletişim', 'ct.heading': 'Birlikte bir şeyler<br>yaratalım?', 'ct.email': 'E-posta Gönder', 'ct.tg': 'Telegram',
  },
  az: {
    'nav.home': 'Ana Səhifə', 'nav.services': 'Xidmətlər', 'nav.packages': 'Paketlər',
    'nav.blog': 'Bloq', 'nav.about': 'Haqqımda', 'nav.contact': 'Əlaqə', 'nav.book': 'Qeydiyyat',
    'hero.role': 'Qrafik Dizayner', 'hero.h1': 'Dizayn —', 'hero.h2': 'sözsüz bir dil',
    'hero.desc': 'İlham verən və yaddaşlarda əbədi qalan vizual obrazlar yaradıram.',
    'hero.cta1': 'İşlərə bax', 'hero.cta2': 'Haqqımda', 'hero.label': 'Dizayn Studiyası',
    'stat.years': 'il təcrübə', 'stat.projects': 'layihə', 'stat.clients': 'brend', 'stat.awards': 'mükafat',
    'about.tag': 'haqqımda',
    'about.body': 'Yaxşı dizayn yalnız gözəllik deyil. Bu <mark>fikrin aydınlığıdır</mark>, dünyanın özünü necə <mark>gördüyünü</mark> dəyişdirən forma',
    'sv.tag': 'xidmətlər', 'sv.heading': 'Nə edirəm', 'sv.all': 'Bütün xidmətlər',
    'wh.tag': 'niyə mən', 'wh.heading': 'Brendinizi birinci<br>yerə qoyan dizayn',
    'sv.c1': 'Brendinq', 'sv.c2': 'Korporativ Kimlik', 'sv.c3': 'UI/UX', 'sv.c4': 'Qablaşdırma', 'sv.c5': 'Tipoqrafiya', 'sv.c6': 'İllüstrasiya',
    'pk.tag': 'paketlər', 'pk.heading': 'Paketinizi seçin', 'pk.sub': 'Əməkdaşlıq formatını seçin',
    'pk.n1': 'Start', 'pk.n2': 'Standart', 'pk.n3': 'Premium',
    'pk.d1': 'Kiçik biznes üçün', 'pk.d2': 'Böyüyən brendlər üçün', 'pk.d3': 'Böyük layihələr üçün',
    'pk.popular': 'Məşhur', 'pk.btn': 'Paketi seçin',
    'bl.tag': 'bloq', 'bl.heading': 'Məqalələr', 'bl.read': 'Oxu →',
    'ct.tag': 'əlaqə', 'ct.heading': 'Birlikdə bir şey<br>yaradaq?', 'ct.email': 'E-poçt göndər', 'ct.tg': 'Telegram',
  },
  ua: {
    'nav.home': 'Головна', 'nav.services': 'Послуги', 'nav.packages': 'Пакети',
    'nav.blog': 'Блог', 'nav.about': 'Про мене', 'nav.contact': 'Контакти', 'nav.book': 'Записатись',
    'hero.role': 'Графічний дизайнер', 'hero.h1': 'Дизайн — це', 'hero.h2': 'мова без слів',
    'hero.desc': "Створюю візуальні образи, які надихають і назавжди залишаються у пам'яті.",
    'hero.cta1': 'Дивитись роботи', 'hero.cta2': 'Про мене', 'hero.label': 'Дизайн студія',
    'stat.years': 'роки в дизайні', 'stat.projects': 'проектів', 'stat.clients': 'брендів', 'stat.awards': 'нагороди',
    'about.tag': 'про мене',
    'about.body': "Гарний дизайн — це не просто краса. Це <mark>ясність думки</mark>, втілена у формі, яка змінює те, як світ <mark>бачить себе</mark>",
    'sv.tag': 'послуги', 'sv.heading': 'Що я роблю', 'sv.all': 'Усі послуги',
    'wh.tag': 'чому я', 'wh.heading': 'Дизайн, що ставить<br>ваш бренд на перше місце',
    'sv.c1': 'Брендинг', 'sv.c2': 'Айдентика', 'sv.c3': 'UI/UX', 'sv.c4': 'Упаковка', 'sv.c5': 'Типографіка', 'sv.c6': 'Ілюстрація',
    'pk.tag': 'пакети', 'pk.heading': 'Оберіть свій пакет', 'pk.sub': 'Оберіть зручний формат співпраці',
    'pk.n1': 'Старт', 'pk.n2': 'Стандарт', 'pk.n3': 'Преміум',
    'pk.d1': 'Для малого бізнесу', 'pk.d2': 'Для зростаючих брендів', 'pk.d3': 'Для великих проектів',
    'pk.popular': 'Популярний', 'pk.btn': 'Обрати пакет',
    'bl.tag': 'блог', 'bl.heading': 'Статті', 'bl.read': 'Читати →',
    'ct.tag': 'контакти', 'ct.heading': 'Почнімо щось<br>створювати?', 'ct.email': 'Написати на пошту', 'ct.tg': 'Telegram',
  },
  zh: {
    'nav.home': '首页', 'nav.services': '服务', 'nav.packages': '套餐',
    'nav.blog': '博客', 'nav.about': '关于我', 'nav.contact': '联系', 'nav.book': '预约',
    'hero.role': '平面设计师', 'hero.h1': '设计是', 'hero.h2': '无声的语言',
    'hero.desc': '创造能够激励人心、永留记忆的视觉形象。',
    'hero.cta1': '查看作品', 'hero.cta2': '关于我', 'hero.label': '设计工作室',
    'stat.years': '年设计经验', 'stat.projects': '个项目', 'stat.clients': '个品牌', 'stat.awards': '个奖项',
    'about.tag': '关于我',
    'about.body': '好的设计不仅仅是美观。它是<mark>思想的清晰</mark>，以形式呈现，改变世界<mark>认识自己</mark>的方式',
    'sv.tag': '服务', 'sv.heading': '我能做什么', 'sv.all': '全部服务',
    'wh.tag': '为什么选我', 'wh.heading': '让您的品牌<br>脱颖而出的设计',
    'sv.c1': '品牌设计', 'sv.c2': '视觉识别', 'sv.c3': 'UI/UX', 'sv.c4': '包装设计', 'sv.c5': '字体设计', 'sv.c6': '插画',
    'pk.tag': '套餐', 'pk.heading': '选择您的套餐', 'pk.sub': '选择适合您的合作方式',
    'pk.n1': '基础', 'pk.n2': '标准', 'pk.n3': '高级',
    'pk.d1': '适合小型企业', 'pk.d2': '适合成长中的品牌', 'pk.d3': '适合大型项目',
    'pk.popular': '热门', 'pk.btn': '选择套餐',
    'bl.tag': '博客', 'bl.heading': '文章', 'bl.read': '阅读 →',
    'ct.tag': '联系', 'ct.heading': '让我们一起<br>创造？', 'ct.email': '发送邮件', 'ct.tg': 'Telegram',
  },
  es: {
    'nav.home': 'Inicio', 'nav.services': 'Servicios', 'nav.packages': 'Paquetes',
    'nav.blog': 'Blog', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto', 'nav.book': 'Reservar',
    'hero.role': 'Diseñador Gráfico', 'hero.h1': 'El diseño es', 'hero.h2': 'un lenguaje sin palabras',
    'hero.desc': 'Creo imágenes visuales que inspiran y permanecen en la memoria para siempre.',
    'hero.cta1': 'Ver trabajos', 'hero.cta2': 'Sobre mí', 'hero.label': 'Estudio de diseño',
    'stat.years': 'años en diseño', 'stat.projects': 'proyectos', 'stat.clients': 'marcas', 'stat.awards': 'premios',
    'about.tag': 'sobre mí',
    'about.body': 'El buen diseño no es solo belleza. Es <mark>claridad de pensamiento</mark>, encarnada en forma que cambia cómo el mundo <mark>se ve a sí mismo</mark>',
    'sv.tag': 'servicios', 'sv.heading': 'Qué hago', 'sv.all': 'Todos los servicios',
    'wh.tag': 'por qué yo', 'wh.heading': 'Diseño que pone<br>tu marca primero',
    'sv.c1': 'Branding', 'sv.c2': 'Identidad', 'sv.c3': 'UI/UX', 'sv.c4': 'Packaging', 'sv.c5': 'Tipografía', 'sv.c6': 'Ilustración',
    'pk.tag': 'paquetes', 'pk.heading': 'Elige tu paquete', 'pk.sub': 'Elige el formato de colaboración adecuado',
    'pk.n1': 'Inicio', 'pk.n2': 'Estándar', 'pk.n3': 'Premium',
    'pk.d1': 'Para pequeñas empresas', 'pk.d2': 'Para marcas en crecimiento', 'pk.d3': 'Para grandes proyectos',
    'pk.popular': 'Popular', 'pk.btn': 'Elegir paquete',
    'bl.tag': 'blog', 'bl.heading': 'Artículos', 'bl.read': 'Leer →',
    'ct.tag': 'contacto', 'ct.heading': '¿Creemos algo<br>juntos?', 'ct.email': 'Enviar correo', 'ct.tg': 'Telegram',
  },
  tj: {
    'nav.home': 'Саҳифаи асосӣ', 'nav.services': 'Хизматҳо', 'nav.packages': 'Бастаҳо',
    'nav.blog': 'Блог', 'nav.about': 'Дар бораи ман', 'nav.contact': 'Тамос', 'nav.book': 'Сабтном',
    'hero.role': 'Тарроҳи графикӣ', 'hero.h1': 'Тарроҳӣ —', 'hero.h2': 'забони бесухан',
    'hero.desc': 'Тасвирҳои визуалӣ эҷод мекунам, ки илҳом мебахшанд ва абадӣ дар хотир мемонанд.',
    'hero.cta1': 'Дидани корҳо', 'hero.cta2': 'Дар бораи ман', 'hero.label': 'Студияи тарроҳӣ',
    'stat.years': 'сол дар тарроҳӣ', 'stat.projects': 'лоиҳа', 'stat.clients': 'бренд', 'stat.awards': 'ҷоиза',
    'about.tag': 'дар бораи ман',
    'about.body': 'Тарроҳии хуб танҳо зебоӣ нест. Ин <mark>равшании фикр</mark> аст, ки дар шакл мавҷуд буда, дигар мекунад, ки дунё худро чӣ гуна <mark>мебинад</mark>',
    'sv.tag': 'хизматҳо', 'sv.heading': 'Чи мекунам', 'sv.all': 'Ҳамаи хизматҳо',
    'wh.tag': 'чаро ман', 'wh.heading': 'Дизайне, ки брендатонро<br>дар ҷои аввал мегузорад',
    'sv.c1': 'Брендинг', 'sv.c2': 'Айдентика', 'sv.c3': 'UI/UX', 'sv.c4': 'Ҷабъбандӣ', 'sv.c5': 'Типография', 'sv.c6': 'Тасвиргарӣ',
    'pk.tag': 'бастаҳо', 'pk.heading': 'Бастаи худро интихоб кунед', 'pk.sub': 'Формати ҳамкориро интихоб кунед',
    'pk.n1': 'Старт', 'pk.n2': 'Стандарт', 'pk.n3': 'Премиум',
    'pk.d1': 'Барои бизнеси хурд', 'pk.d2': 'Барои брендҳои рушдёбанда', 'pk.d3': 'Барои лоиҳаҳои бузург',
    'pk.popular': 'Маъмул', 'pk.btn': 'Бастаро интихоб кунед',
    'bl.tag': 'блог', 'bl.heading': 'Мақолаҳо', 'bl.read': 'Хондан →',
    'ct.tag': 'тамос', 'ct.heading': 'Биёед якҷоя<br>чизе созем?', 'ct.email': 'Нома фиристодан', 'ct.tg': 'Telegram',
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
  btn.textContent = ' Главная';
  btn.setAttribute('data-panel', '');
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

    if (!name) { showNote('Пожалуйста, введите ваше имя', 'err'); return; }

    bookSubmit.disabled = true;
    bookSubmit.textContent = 'Отправляю...';
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
        bookSubmit.textContent = 'Заявка отправлена!';
        showNote('Я свяжусь с вами в ближайшее время', 'ok');
        bookForm.reset();
        setTimeout(() => {
          bookSubmit.classList.remove('is-ok');
          bookSubmit.textContent = 'Отправить заявку';
          bookSubmit.disabled = false;
        }, 4000);
      } else {
        throw new Error(data.description || 'Telegram error');
      }
    } catch {
      bookSubmit.classList.add('is-err-state');
      bookSubmit.textContent = 'Ошибка — попробуйте ещё раз';
      showNote('Не удалось отправить. Напишите мне напрямую в Telegram.', 'err');
      setTimeout(() => {
        bookSubmit.classList.remove('is-err-state');
        bookSubmit.textContent = 'Отправить заявку';
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
