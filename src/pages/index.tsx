import Link from 'next/link'
import { mockSummary } from '../lib/mocks'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

export default function Home(){
  return (
    <div>
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">منصة التحليل المؤكَّد</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">تجربة عالمية تبرز النتائج فقط — بدون كشف تفاصيل الحسابات والتحليلات.</p>
        </div>
        <div>
          <Link href="/input"><button className="px-4 py-2 bg-green-600 text-white rounded">ابدأ الآن</button></Link>
        </div>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockSummary.highlights.map((h)=> (
          <div key={h.title} className="p-4 border rounded bg-white dark:bg-slate-800">
            <h3 className="font-semibold">{h.title}</h3>
            <div className="mt-2 text-xl">{h.value}</div>
          </div>
        ))}
      </section>

      <section className="mt-8 p-4 bg-white dark:bg-slate-800 rounded">
        <h3 className="font-semibold">تطور الأداء (عرض مبسط)</h3>
        <div style={{ height: 240 }} className="mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockSummary.trend}>
              <XAxis dataKey="month"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={{ r:4 }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  )
}
