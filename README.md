# Financial Analyzer - Global Scaffold

نسخة مبدئية جاهزة للرفع على GitHub. تحتوي على واجهة Next.js + Tailwind مع صفحات: Home, Input, Upload, Report, Dashboard, Settings.

## ملاحظات مهمة
- الواجهة تعرض *نتائج ملخّصة ومؤكدة فقط* — تفاصيل التحليل والـ accounting engine يجب وضعها في backend مؤمن ومعزول.
- هذا scaffold مُعد للـ frontend. لإضافة معالجة حقيقية للملفات والتحليلات: أضف backend (Node/Nest/Go) مع jobs لمعالجة البيانات.

## تشغيل محلي
```bash
npm install
npm run dev
# افتح http://localhost:3000
```

## رفع على GitHub
```
git init
git add .
git commit -m "initial scaffold"
gh repo create financial-analyzer --public --source=. --remote=origin
git push -u origin main
```
