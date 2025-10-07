import { mockSummary } from '../lib/mocks'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import ResultCard from '../components/ResultCard'
import { explainCurrentRatio, explainNetProfitMargin } from '../lib/explanations'

export default function Report(){
  const cr = explainCurrentRatio(0.85)
  const npm = explainNetProfitMargin(-2.5, 8.2)

  return (
    <div>
      <h2 className="text-2xl font-semibold">Report — ملخّص النتائج المؤكَّدة</h2>
      <p className="text-sm text-slate-500">هنا نعرض النتائج النهائية بطريقة واضحة ومركزة، دون كشف تفاصيل القوائم أو مؤشرات التحليل الدقيقة.</p>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-slate-800 rounded">
          <h3 className="font-semibold">الخلاصة التنفيذية</h3>
          <p className="mt-2">الشركة في موقف مستقر. تحسّن في الأداء ملحوظ خلال الأشهر الماضية.</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>ثبات السيولة: مؤكد</li>
            <li>توصية: الحفاظ على السياسات الحالية ومراقبة الإنفاق الرأسمالي</li>
          </ul>
        </div>

        <div className="p-4 bg-white dark:bg-slate-800 rounded">
          <h3 className="font-semibold">تطوّر الأداء</h3>
          <div style={{ height: 220 }} className="mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockSummary.trend}>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r:4 }}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard id="cr" title="Current Ratio" short="مؤشر السيولة الحالي" value="0.85" explanation={cr} />
        <ResultCard id="npm" title="Net Profit Margin" short="هامش الربح الصافي" value="8.2%" explanation={npm} />
      </div>

      <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-semibold">التأكيدات والنتائج</h3>
        <p className="mt-2">جميع النتائج هنا هي نتائج مُدقّقة ومؤكدة من النظام — نقدم للمستخدمين خلاصة قابلة للتنفيذ بدون تفاصيل تقنية.</p>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1 bg-indigo-600 text-white rounded">تصدير PDF</button>
          <button className="px-3 py-1 border rounded">تصدير Excel</button>
        </div>
      </div>
    </div>
  )
}
