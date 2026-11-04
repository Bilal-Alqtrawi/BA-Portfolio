# CLAUDE.md

إرشادات لـ Claude Code عند العمل على هذا المشروع. اقرأ هذا الملف أولًا بدل فحص الشجرة كاملة.

## نظرة عامة
بورتفوليو شخصي لـ Bilal Al-Qatrawi (مطوّر Front-End) — صفحة واحدة (single-page) بأقسام تتمرر (scroll) لا صفحات منفصلة (ما عدا مجلد `src/app/*` الفارغ حاليًا — بقايا تجربة سابقة، تجاهله إلا إذا طُلب تفعيله).

- **Stack**: Create React App (react-scripts 5) + React 18 + TypeScript (جزئي، JS غالبًا) + Tailwind CSS v3 + Redux Toolkit + Framer Motion
- **i18n**: نظام ترجمة خاص (ليس i18next) عبر `src/context/I18nContext.js` — قاموسان فقط: `src/locales/en.js` و `src/locales/ar.js`. العربي هو RTL (`document.documentElement.dir`), يُحفظ الاختيار في `localStorage` (`portfolio_locale`).
- **Dark mode**: عبر Redux (`src/redux/modules/theme.js`) — كلاس `dark` يُضاف لـ `<html>` من `App.js`.
- **النشر**: GitHub Pages عبر `gh-pages` (`npm run deploy`) — `homepage` في package.json: `https://Bilal-Alqtrawi.github.io/BA-Portfolio`.
- **نموذج التواصل**: `@formspree/react` في `Contact.js` (مش عبر API Route خاص).

## البنية (src/)
```
App.js              # التركيب: Provider(redux) > I18nProvider > كل الأقسام بالترتيب
components/
  Header.js          # nav بالـ hash links (#home, #about, ...) + useActiveSection hook
  Hero, About, Skills, Expertise, Experience, Projects, Contact, Footer
  DarkModeToggle, LanguageToggle, PageLoader
  ui/                # Dialog, Reveal, SectionHeading (مكوّنات مشتركة صغيرة)
  layout/, projects/, sections/, services/   # مجلدات فارغة حاليًا — تجاهلها
data/
  projects.ts         # مصدر الحقيقة الوحيد لمشاريع البورتفوليو (array PROJECTS) — أضف مشروع جديد هنا فقط
  contact.js, skillsStructure.js
locales/
  en.js / ar.js        # كل النصوص هنا، بالـ key path (مثلاً projects.qira.title) — لا نصوص hardcoded بالمكوّنات
context/I18nContext.js # useI18n() -> { t, locale, setLocale, dir, isRTL }
redux/                 # store بسيط، modules/theme.js فقط
hooks/useActiveSection.js
types/                 # فارغ حاليًا
```

## قواعد مهمة عند التعديل
1. **كل نص ظاهر للمستخدم يروح باللغتين** — أضف المفتاح في `en.js` و `ar.js` معًا، لا تكتب نص عربي/إنجليزي مباشر داخل JSX.
2. **مشاريع البورتفوليو**: لإضافة/تعديل مشروع، عدّل `src/data/projects.ts` فقط (id, titleKey, tech, image, demoUrl...) ثم أضف مفاتيح الترجمة المطابقة في الـ locales — لا تضف بيانات مشروع داخل `Projects.js` مباشرة.
3. **الصور**: تروح بـ `public/` (ليس `src/images/` إلا للصور المستخدمة داخل كود import مباشر) — استخدم `publicImage()` helper الموجود بـ `projects.ts` للمسارات.
4. **الألوان/الخطوط**: مخصصة بـ `tailwind.config.js` (`brand`, `ink`, خط Cairo) — لا تستخدم ألوان Tailwind الافتراضية (red-500 مثلاً) لو فيه بديل مطابق بـ `brand`/`ink`.
5. **لا Next.js هنا** — هذا مشروع CRA عادي (`react-scripts`)، فلا تقترح/تستخدم App Router, metadata API, أو ملفات `opengraph-image.tsx` إلخ.
6. **لا تلمس `src/app/*`** إلا لو طُلب صراحة — مجلدات فاضية مش مستخدمة بالراوتنج الحالي (ما في react-router فعليًا مفعّل بالصفحة الرئيسية، كلشي scroll واحد).

## أوامر
```
npm start      # dev server localhost:3000
npm run build  # إنتاج
npm run deploy # ينشر على GitHub Pages (يشغل build تلقائيًا)
npm test
```

## ملاحظات
- `react-router-dom` موجود بالـ dependencies لكن غير مستخدم فعليًا بـ App.js الحالي (صفحة واحدة بالكامل) — إذا ظهر لاحقًا استخدام فعلي له (مثلاً صفحة `/projects/[slug]`) حدّث هذا الملف.
- TypeScript مفعّل جزئيًا (`tsconfig.json` موجود، `allowJs: true`) — معظم الملفات `.js` وملف واحد فقط `.ts` حاليًا (`data/projects.ts`). لا تجبر تحويل كل شيء لـ TS إلا إذا طُلب.
