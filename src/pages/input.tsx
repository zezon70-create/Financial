import { useState } from 'react'
import ConfirmCard from '../components/ConfirmCard'

export default function Input(){
  const [rows,setRows] = useState([{account:'1000 - Cash', debit:0, credit:0}])
  return (
    <div>
      <h2 className="text-2xl font-semibold">صفحة الإدخال اليدوي</h2>
      <p className="text-sm text-slate-500">أدخل بياناتك هنا — البيانات تظهر في واجهة مُبسّطة ومؤكدة فقط.</p>

      <div className="mt-4 bg-white dark:bg-slate-800 p-4 rounded">
        <table className="w-full">
          <thead><tr><th>الحساب</th><th>مدين</th><th>دائن</th></tr></thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i} className="border-t">
                <td><input value={r.account} onChange={(e)=>{ const copy=[...rows]; copy[i].account=e.target.value; setRows(copy)}} className="w-full bg-transparent"/></td>
                <td><input type="number" value={r.debit} onChange={(e)=>{ const copy=[...rows]; copy[i].debit=+e.target.value; setRows(copy)}} className="w-full bg-transparent"/></td>
                <td><input type="number" value={r.credit} onChange={(e)=>{ const copy=[...rows]; copy[i].credit=+e.target.value; setRows(copy)}} className="w-full bg-transparent"/></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={()=> setRows(r=>[...r,{account:'New',debit:0,credit:0}])}>أضف سطر</button>
          <button className="px-3 py-1 border rounded">حفظ</button>
        </div>
      </div>

      <div className="mt-6">
        <ConfirmCard title="تأكيد إرسال البيانات" subtitle="النظام سيعرض النتائج بطريقة مُلخّصة ومؤكدة فقط."/>
      </div>
    </div>
  )
}
