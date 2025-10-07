import { mockSummary } from '../lib/mocks'

export default function Dashboard(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-sm text-slate-500">لوحة مخصصة تعرض أهم النتائج والمؤشرات الملخّصة. يمكن للمستخدم تعديل التعليقات وحفظ العرض.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {mockSummary.highlights.map(h=> (
          <div key={h.title} className="p-4 bg-white dark:bg-slate-800 rounded">
            <h4 className="font-semibold">{h.title}</h4>
            <div className="mt-2 text-lg">{h.value}</div>
            <textarea className="w-full mt-3 p-2 border rounded bg-transparent" placeholder="أضف تعليقك هنا (قابل للتحرير)"></textarea>
          </div>
        ))}
      </div>
    </div>
  )
}
